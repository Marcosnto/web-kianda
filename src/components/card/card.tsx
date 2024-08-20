"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BoldTitle } from "../general";

export type CardType = {
  id?: string;
  label: string;
  summary: string;
  imageURL: string | StaticImageData;
  imageAlt: string;
  url?: URL;
  createdData?: Date;
  className?: string;
  bodyClassName?: string;
  imageClassName?: string;
  summaryClassName?: string;
  showFooterLine?: boolean;
};

export function Card(props: CardType) {
  const {
    id,
    label,
    summary,
    imageAlt,
    imageURL,
    url = "",
    createdData,
    className = "",
    bodyClassName = "",
    imageClassName = "w-full h-auto",
    summaryClassName = "",
    showFooterLine = false,
  } = props;

  return (
    <div className={`mb-8 flex flex-col gap-6 ${className}`.trim()}>
      <Image
        className={`object-cover ${imageClassName}`.trim()}
        alt={imageAlt}
        src={imageURL}
      />
      <span
        className={`flex max-w-none flex-col gap-2 md:max-w-[41ch] ${bodyClassName}`.trim()}
      >
        {createdData && (
          <time
            dateTime="2022-10-10"
            className={`block text-xs text-k_brown`.trim()}
          >
            {String(
              createdData.getDate() +
                "/" +
                createdData.getMonth() +
                "/" +
                createdData.getFullYear(),
            )}
          </time>
        )}

        <Link href={url}>
          <BoldTitle className="text-[1.6875rem] leading-10">
            <h1>{label}</h1>
          </BoldTitle>
        </Link>

        <p className={`${summaryClassName}`}>{summary}</p>

        {showFooterLine && <hr className="mb-6 border-stone-500 opacity-35" />}
      </span>
    </div>
  );
}
