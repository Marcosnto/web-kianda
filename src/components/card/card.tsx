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
        className={`${imageClassName}`.trim()}
        alt={imageAlt}
        src={imageURL}
      />
      {createdData && (
        <span className={`${bodyClassName}`.trim()}>
          {String(
            createdData.getDate() +
              "/" +
              createdData.getMonth() +
              "/" +
              createdData.getFullYear(),
          )}
        </span>
      )}
      <span className={`flex flex-col gap-2 ${bodyClassName}`.trim()}>
        <Link href={url}>
          <BoldTitle className="text-[1.6875rem] leading-10">
            <h1>{label}</h1>
          </BoldTitle>
        </Link>
      </span>
      <p className={`${summaryClassName}`}>{summary}</p>
      {showFooterLine && <hr className="mb-2 ml-2 mr-2 border-stone-500" />}
    </div>
  );
}
