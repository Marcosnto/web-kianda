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
  imageClassname?: string;
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
    imageClassname = "w-full h-auto",
  } = props;

  return (
    <div className={`mb-8 flex flex-col gap-6 ${className}`.trim()}>
      <Image
        className={`${imageClassname}`.trim()}
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
      <p>{summary}</p>
    </div>
  );
}
