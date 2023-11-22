"use strict";
const commandDocURL = "https://github.com/torrancecui/bozolol/tree/master/src",
  COMMANDS = {
    bozo: {
      name: "bozolol",
      url: "https://github.com/torrancecui/bozolol/tree/master/src",
    },
    fb: {
      name: "Facebook",
      url: "https://facebook.com/",
      searchurl: "https://www.facebook.com/search/top/?q=",
    },
    ig: {
      name: "Instagram",
      url: "https://instagram.com/",
      searchurl: "https://instagram.com/",
    },
    tw: {
      name: "Twitter",
      url: "https://twitter.com/",
      searchurl: "https://twitter.com/search?q=",
    },
    r: {
      name: "Reddit",
      url: "https://reddit.com/",
      searchurl: "https://www.reddit.com/search?q=",
    },
    l: { name: "Linkedin", url: "https://linkedin.com/" },
    s: {
      name: "Google",
      url: "https://google.com/",
      searchurl: "https://www.google.com/search?q=",
    },
    g: {
      name: "Google",
      url: "https://google.com/",
      searchurl: "https://www.google.com/search?q=",
    },
    gm: {
      name: "Gmail",
      url: "https://mail.google.com/mail/u/0",
      searchurl: "https://mail.google.com/mail/u/",
    },
    gd: {
      name: "Google Drive",
      url: "https://drive.google.com/drive/u/0",
      searchurl: "https://drive.google.com/drive/u/",
    },
    cal: {
      name: "Google Calendar",
      url: "https://calendar.google.com/calendar/r",
    },
    where: {
      name: "Google Maps",
      url: "https://www.google.com/maps/",
      searchurl: "https://www.google.com/maps/search/",
    },
    chase: { name: "Chase", url: "https://www.chase.com/" },
    fidelity: {
      name: "Fidelity",
      url: "https://login.fidelity.com/ftgw/Fas/Fidelity/NBPart/Login/Init?",
    },
    marcus: { name: "Marcus", url: "https://www.marcus.com/us/en/dashboard" },
    schwab: {
      name: "Charles Schwab",
      url: "https://client.schwab.com/Login/SignOn/CustomerCenterLogin.aspx",
    },
    gh: {
      name: "GitHub",
      url: "https://github.com/",
      searchurl: "https://www.github.com/search?q=",
    },
    net: {
      name: "Netlify",
      url: "https://app.netlify.com/teams/torrancecui/overview",
    },
    az: {
      name: "Amazon",
      url: "https://www.amazon.com/",
      searchurl: "https://www.amazon.com/s?k=",
    },
    yt: {
      name: "YouTube",
      url: "https://youtube.com/",
      searchurl: "https://www.youtube.com/results?search_query=",
    },
    nfx: {
      name: "Netflix",
      url: "https://netflix.com/",
      searchurl: "https://www.netflix.com/search?q=",
    },
    DEFAULT: {
      name: "Default - Google Search",
      url: "https://google.com/",
      searchurl: "https://www.google.com/search?q=",
    },
  },
  redirect = async function (a) {
    await window.location.replace(a);
  },
  bunnylol = async function (a) {
    let b = a.split(/[ +]/g);
    if (0 < b.length) {
      const c = b[0].endsWith(".")
        ? b[0].substring(0, b[0].length - 1).toLowerCase()
        : b[0].toLowerCase();
      if (c in COMMANDS) {
        const d = COMMANDS[c],
          e = new URL(d.url).protocol;
        if (
          ("https:" !== e && "http:" !== e && redirect(commandDocURL),
          d.searchurl && 1 !== b.length)
        ) {
          const b = "$" === c ? c.length : c.length + 1;
          return (
            await redirect(
              `${d.searchurl}${encodeURIComponent(a.substring(b))}`
            ),
            !0
          );
        }
        return await redirect(d.url), !0;
      }
    }
    return !1;
  },
  currCmd = new URL(window.location.href).searchParams.get("search") ?? "help";
switch (currCmd) {
  case "help":
    redirect(commandDocURL);
    break;
  default:
    bunnylol(currCmd)
      .then((a) => {
        !a &&
          COMMANDS.DEFAULT.searchurl &&
          redirect(
            `${COMMANDS.DEFAULT.searchurl}${encodeURIComponent(currCmd)}`
          );
      })
      .catch((a) => {
        console.log(a);
      });
}
