import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BoldTitle } from "../general";

export type CardType = {
  id?: string;
  label: string;
  author?: string;
  summary: string;
  imageURL: string | StaticImageData;
  imageAlt: string;
  url?: string;
  createdData?: Date;
  className?: string;
  bodyClassName?: string;
  imageClassName?: string;
  titleClassName?: string;
  summaryClassName?: string;
  showFooterLine?: boolean;
  imageWidth?: number;
  imageHeigth?: number;
};

export function Card(props: CardType) {
  const {
    label,
    author,
    summary,
    imageAlt,
    imageURL,
    url = "",
    createdData,
    className = "",
    bodyClassName = "",
    imageClassName = "w-full h-auto",
    titleClassName = "",
    summaryClassName = "",
    imageWidth = 800,
    imageHeigth = 600,
  } = props;

  return (
    <div className={`${className}`.trim()}>
      <Image
        className={`object-cover ${imageClassName}`.trim()}
        width={imageWidth}
        height={imageHeigth}
        alt={imageAlt}
        src={imageURL}
      />
      <span className={`flex flex-col gap-4 pb-4 pt-4 ${bodyClassName}`.trim()}>
        <span className="flex">
          {author && (
            <span className={`block text-xs text-k_brown`.trim()}>
              Por {author} em&nbsp;
            </span>
          )}
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
        </span>

        <Link href={url}>
          <BoldTitle
            className={`line-clamp-2 text-[1.6875rem] leading-7 ${titleClassName}`.trim()}
          >
            <h1>{label}</h1>
          </BoldTitle>
        </Link>

        <p className={`line-clamp-3 ${summaryClassName}`}>{summary}</p>
      </span>
    </div>
  );
}
