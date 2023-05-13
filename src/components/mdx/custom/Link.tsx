import clsx from "clsx";
import NextLink from "next/link";

import { GithubIcon } from "@/components/icons";

import { urlType } from "@/helpers/mdx";

import type { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

type Props = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export function Link({ children, href }: Props) {
  if (!href) {
    return <span>{children}</span>;
  }

  const type = urlType(href);

  switch (type) {
    case "external":
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer nofollow"
          className={clsx("link")}
        >
          {children}
          <GithubIcon props={{}} anoth={{}} />
        </a>
      );
    case "mail":
      return (
        <a href={href} className={clsx("link")}>
          <GithubIcon props={{}} anoth={{}} />
          {children}
        </a>
      );
    case "hash":
      return (
        <a href={href} className={clsx("link")}>
          {children}
        </a>
      );
    default:
      return (
        <NextLink href={href} className={clsx("link")}>
          {children}
        </NextLink>
      );
  }
}
