import {
	CheckCircleIcon,
	ClipboardIcon,
	ExternalLink,
} from "@/components/icons";
import clsx from "clsx";
import React, { memo, useCallback } from "react";

type CodeHeaderProps = {
	isCopied: boolean;
	code: string | null | undefined;
	title: string | undefined;
	onCopy: () => void;
};

export const CodeHeader = memo<CodeHeaderProps>(
	({ onCopy, isCopied, code, title }) => {
		return (
			<header className={clsx("mdx-header")}>
				<div className={clsx("flex items-center justify-start")}>
					<div className={clsx("")}>
						<div className={clsx("")}></div>
						<div className={clsx("")}></div>
						<div className={clsx("")}></div>
					</div>

					<p data-codeTitle className={clsx("")}>
						{title}
					</p>
				</div>

				<div className={clsx("")}>
					<button className={clsx("")} onClick={onCopy}>
						<span className={clsx("")}>
							{isCopied ? "copied!" : "failed copy!"}
						</span>
						{isCopied ? (
							<CheckCircleIcon />
						) : (
							<ClipboardIcon className={clsx("")} />
						)}
					</button>
				</div>
			</header>
		);
	}
);

CodeHeader.displayName = "CodeHeader";
