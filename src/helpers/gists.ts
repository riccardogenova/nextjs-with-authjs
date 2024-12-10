/** @format */

import { IS_PRODUCTION } from "../constants/general";
import { Gist, GistParsed } from "../declarations/github.gist";
import { asyncForEach } from "./asyncForEach";

export const utilityGetExtension = (filename: string) => {
  const temp = filename.split(".");
  const extension = temp[temp.length - 1];
  return extension as TExtension;
};

export const mapExtensionTags: { [key: TExtension]: Array<string> } = {
  "c++": ["cpp"],
  "h++": ["cpp"],
  aspx: ["ASP.NET"],
  bal: ["ballerina"],
  bashrc: ["bash"],
  bat: ["batchfile"],
  c: ["c"],
  cc: ["cpp"],
  clj: ["clojure"],
  cmd: ["batchfile"],
  cpp: ["cpp"],
  cs: ["csharp"],
  css: ["css"],
  cxx: ["cpp"],
  dart: ["dart"],
  diff: ["diff"],
  Dockerfile: ["docker"],
  edn: ["edn"],
  elm: ["elm"],
  ex: ["elixir"],
  fsx: ["F#"],
  go: ["go"],
  graphql: ["graphql"],
  h: ["c", "cpp"],
  hh: ["cpp"],
  hpp: ["cpp"],
  hs: ["haskell"],
  htaccess: ["apacheconf"],
  html: ["html"],
  hxx: ["cpp"],
  java: ["java"],
  js: ["javascript"],
  jsx: ["reactjs"],
  kql: ["kusto"],
  kt: ["kotlin"],
  kts: ["kotlin"],
  lua: ["lua"],
  php: ["php"],
  pony: ["pony"],
  ps1: ["powershell"],
  py: ["python"],
  r: ["r"],
  rb: ["ruby"],
  rs: ["rust"],
  sass: ["sass", "css"],
  scala: ["scala"],
  scss: ["scss", "css"],
  sol: ["solidity"],
  sql: ["sql"],
  swift: ["swift"],
  toml: ["toml"],
  ts: ["typescript"],
  tsx: ["reactjs"],
  vbs: ["vbscript"],
  vue: ["vue"],
  yml: ["yaml"],
  zig: ["zig"],
  zshrc: ["bash"],
};

export const validExtensions = [
  "c++",
  "h++",
  "aspx",
  "bashrc",
  "bat",
  "cc",
  "cmd",
  "cpp",
  "cs",
  "css",
  "csv",
  "cxx",
  "dart",
  "diff",
  "Dockerfile",
  "elm",
  "ex",
  "fsx",
  "go",
  "h",
  "hh",
  "hpp",
  "hs",
  "htaccess",
  "html",
  "hxx",
  "java",
  "js",
  "jsx",
  "kt",
  "markdown",
  "md",
  "php",
  "pony",
  "ps1",
  "py",
  "rb",
  "rs",
  "sass",
  "json",
  "scss",
  "sol",
  "sql",
  "swift",
  "toml",
  "ts",
  "tsx",
  "vbs",
  "vue",
  "yaml",
  "yml",
  "zshrc",
  "clj",
  "bal",
  "lua",
  "c",
  "zig",
  "r",
  "edn",
  "kql",
  "graphql",
  "kts",
  "http",
  "scala",
];

const keywords = [
  "github",
  "discord",
  "angular",
  "angularjs",
  "angularjs",
  "apache cordova",
  "axios",
  "chakra",
  "createjs",
  "d3",
  "easeljs",
  "express",
  "flutter",
  "gatsby",
  "highchart",
  "jquery",
  "next.js",
  "nextjs",
  "ngrx",
  "node.js",
  "nodejs",
  "phonegap",
  "react native",
  "react-native",
  "react-native",
  "redux",
  "vue.js",
  "vue",
  "vuejs",
  "xamarin",
  "xcode",
] as const;

export type TExtension = (typeof validExtensions)[number];

export const utilityHasValidExtension = (filename: string, lang?: string) => {
  const extension = utilityGetExtension(filename);
  const language = validExtensions.includes(extension);
  if (!language && !IS_PRODUCTION && !!lang)
    console.warn(`ATTENTION: Extension file ${extension} (${lang}) not recognized`);
  return language ? !!language : false;
};

export const utilityCalculateTagsFromExtension = (extension: TExtension): Array<string> => {
  if (mapExtensionTags[extension]) return mapExtensionTags[extension];
  else return [];
};

export const utilityCalculateTagsFromContain = (description: string) => {
  const tags = [];
  for (let i = 0; i < keywords.length; i++) {
    if (description.includes(keywords[i])) tags.push(keywords[i]);
  }

  return tags;
};

export const utilityCalculateTagsFromGist = (gist: Gist) => {
  const file = Object.values(gist.files)[0];
  const { filename } = file;
  const extension = utilityGetExtension(filename);
  const tagsBasedOnExtensions = utilityCalculateTagsFromExtension(extension);
  const tagsBasedOnContains = gist.description
    ? utilityCalculateTagsFromContain(gist.description.toLowerCase())
    : [];
  return [...new Set([...tagsBasedOnExtensions, ...tagsBasedOnContains])];
};

export const utilityGistHasBaseInfo = (gist: Gist) => {
  const file = Object.values(gist.files)[0];
  const { filename, language } = file;
  const hasBaseInfo = !!language;
  const hasValidExtension = utilityHasValidExtension(filename, language);
  // const isNotBannedUser = !bannedUsers.includes(gist.owner.login);
  return hasBaseInfo && hasValidExtension;
};

export const utilityFormatGitHubGist = (gist: Gist, verified?: boolean) => {
  const file = Object.values(gist.files)[0];
  const { filename, type, language, size, raw_url } = file;
  const newGist = {
    idGithub: gist.id,
    title: gist.description || "-",
    description: gist.description || "-",
    private: !gist.public,
    avatar_url: gist.owner.avatar_url,
    tags: utilityCalculateTagsFromGist(gist),
    filename,
    type,
    language: language ? language.toLowerCase() : language,
    size,
    raw_url,
    createdAt: gist.created_at,
    lastUpdate: gist.created_at,
    likes: [],
  };
  // @ts-ignore
  if (!verified) newGist.username = gist.owner.login;
  return newGist;
};

export const utilityParseExternalGist = async (gists: Array<Gist>): Promise<Array<GistParsed>> => {
  try {
    const filteredGists = gists.filter(utilityGistHasBaseInfo);
    const formattedGist = filteredGists.map((gist: Gist) => utilityFormatGitHubGist(gist));
    const gistParsed: Array<GistParsed> = [];

    await asyncForEach(formattedGist, async (gist) => {
      const response = await fetch(gist.raw_url);
      const raw = await response.text();
      const newTags = utilityCalculateTagsFromContain(raw.toLowerCase());
      //   const html = parseHTML
      //     ? await Axios.post(`/api/gists/parse`, { raw, language: gist.language }).then(
      //         (res) => res.data
      //       )
      //     : "";
      const { ...rest } = gist;
      //   @ts-ignore
      gistParsed.push({
        ...rest,
        tags: [...new Set([...gist.tags, ...newTags])],
        raw,
        html: "",
      });
    });

    return gistParsed;
  } catch (error) {
    return [];
  }
};
