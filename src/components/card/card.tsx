"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BoldTitle } from "../general";

type CardType = {
  id?: string;
  label: string;
  summary: string;
  imageURL: string | StaticImageData;
  imageAlt: string;
  url?: URL;
  createdData?: Date;
  className?: string;
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
  } = props;

  return (
    <div className={`w-80 ${className}`.trim()}>
      <Image
        className="mb-7"
        alt={imageAlt}
        src={imageURL}
        // style={{ width: "100%", height: "auto" }}
      />
      {createdData && <span>{String(createdData)}</span>}
      <Link href={url}>
        <BoldTitle className="mb-4 text-[1.6875rem] leading-10">
          <h1>{label}</h1>
        </BoldTitle>
      </Link>
      <p>{summary}</p>
    </div>
  );
}
