import clsx from "clsx";
import NextImage from "next/image";
import { memo } from "react";

type ImageProps = {
  readonly src: string;
  readonly alt: string;
  readonly width?: string | number;
  readonly height?: string | number;
};

const EXTERNAL_IMAGE_PATTERN = /\http/;

export const Image = memo(
  ({ src, alt, width = "100%", height }: ImageProps) => {
    return (
      <div
        className={clsx(
          "flex relative items-center content-center",
          "w-auto h-auto mx-16 my-0"
        )}
      >
        {EXTERNAL_IMAGE_PATTERN.test(src) ? (
          <div
            style={{ backgroundImage: `url(${src})` }}
            className={clsx(
              "absolute -inset-8 z-[-1] rounded-[20%] bg-[length:180%_180%] bg-center opacity-25 blur-2xl",
              "hidden", // disable immersive on light mode
              "dark:block"
            )}
          />
        ) : (
          <NextImage
            className={clsx("max-w-full")}
            src={src}
            alt={alt}
            width={width as number}
            height={height as number}
            loading="lazy"
            decoding="async"
            placeholder="blur"
          />
        )}
      </div>
    );
  }
);

Image.displayName = "Image";
