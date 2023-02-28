// @flow strict

export const commandDocURL =
  "https://github.com/torrancecui/bozolol/tree/master/src";

export type CommandType = {|
  name: string,
  url: string,
  searchurl?: string,
|};

export type CommandNames =
  | "fb"
  | "ig"
  | "tw"
  | "r"
  | "l"
  | "g"
  | "gm"
  | "gd"
  | "cal"
  | "gh"
  | "yt"
  | "nfx"
  | "chase"
  | "fidelity"
  | "marcus"
  | "DEFAULT";

export type CommandDataTableType = {|
  name: string,
  url: string,
  command: CommandNames,
|};

export type ColumnDataTableType = {|
  data: string,
  title: string,
|};

export const COMMANDS: { [CommandNames]: CommandType } = {
  bozo: {
    name: "bozolol",
    url: "https://github.com/torrancecui/bozolol/tree/master/src",
  },
  // SOCIAL MEDIA
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
  l: {
    name: "Linkedin",
    url: "https://linkedin.com/",
  },
  // GOOGLE
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
  // FINANCES
  chase: {
    name: "Chase",
    url: "https://www.chase.com/",
  },
  fidelity: {
    name: "Fidelity",
    url: "https://www.chase.com/",
  },
  marcus: {
    name: "Marcus",
    url: "https://www.marcus.com/us/en/dashboard",
  },
  // OTHER
  az: {
    name: "Amazon",
    url: "https://www.amazon.com/",
    searchurl: "https://www.amazon.com/s?k=",
  },
  gh: {
    name: "GitHub",
    url: "https://github.com/",
    searchurl: "https://www.github.com/search?q=",
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
  // DEFAULT
  DEFAULT: {
    name: "Default - Google Search",
    url: "https://google.com/",
    searchurl: "https://www.google.com/search?q=",
  },
};
