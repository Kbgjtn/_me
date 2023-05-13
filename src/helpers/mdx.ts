import slug from "slug";
import type { ReactElement, ReactNode } from "react";

export const getSlug = (children: ReactNode) => {
  if (typeof children === "string") {
    return slug(children);
  }

  return "";
};

export const urlType = (url: string) => {
  if (["/"].includes(url[0])) {
    return "internal";
  }

  if (["#"].includes(url[0])) {
    return "hash";
  }

  if (url.indexOf("mailto") === 0) {
    return "mail";
  }

  return "external";
};

export const formatLang = (
  lang: string,
  title?: string
): {
  language: string;
  icon: ReactElement | string;
} => {
  let language = lang;
  let icon = "<p>file </p>";

  switch (lang) {
    case "js":
    case "javascript":
      language = "JavaScript";
      icon = "<p>js </p>";
      break;
    case "ts":
    case "typescript":
      language = "TypeScript";
      icon = "<p>ts </p>";
      break;
    case "jsx":
      language = "JavaScript React";
      icon = "<p>reactions </p>";
      break;
    case "tsx":
      language = "TypeScript React";
      icon = "<p>react</p>";
      break;
    case "html":
      language = "HTML";
      icon = "<p>html</p>";
      break;
    case "css":
      language = "CSS";
      icon = "<p>css</p>";
      break;
    case "bash":
    case "cmd":
      language = "Terminal";
      break;
    case "json":
      language = "JSON";
      break;
    case "":
      language = "Plain Text";
      break;
    default:
      break;
  }

  switch (title) {
    case "tailwind.config.js":
      icon = "<p>tailwind</p>";
      break;
    case "package.json":
      icon = "<p>package.json</p>";
      break;
    case "npm":
      icon = "<p>npm</p>";
      break;
    case "pnpm":
      icon = "<p>pnpm</p>";
      break;
    case "yarn":
      icon = "<p>yarn</p>";
      break;
    default:
      break;
  }

  return { language, icon };
};
