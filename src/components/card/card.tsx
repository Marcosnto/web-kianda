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
  backgroundColor?: "greenDark" | "greenLight" | "cinnamon" | "orange";
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
    <div
      className={`${className} flex text-k_green_light hover:text-k_cinnamon`.trim()}
    >
      <Image
        className={`object-cover pr-[9px] lg:pr-0 ${imageClassName} rounded-[1.30rem] lg:rounded-[1.4rem] lg:pb-1`.trim()}
        width={imageWidth}
        height={imageHeigth}
        alt={imageAlt}
        src={imageURL}
      />
      <span
        className={`flex flex-col lg:pb-4 lg:pt-4 ${bodyClassName} lg:rounded-[1.4rem]`.trim()}
      >
        {/* <span className="mb-[1.938rem] flex">
          {author && (
            <span className={`hidden`.trim()}>Por {author} em&nbsp;</span>
          )}
          {createdData && (
            <time dateTime="2022-10-10" className={`hidden`.trim()}>
              {String(
                createdData.getDate() +
                  "/" +
                  createdData.getMonth() +
                  "/" +
                  createdData.getFullYear(),
              )}
            </time>
          )}
        </span> */}

        <span className="mb-[6px] text-[10px] italic md:text-[14px] lg:mb-[2px]">
          Coluna Raça
        </span>

        <Link href={url}>
          <BoldTitle
            className={`text-[20px] font-semibold md:text-[26px] lg:line-clamp-2 lg:text-[1.5rem] xl:text-[2.125rem] ${titleClassName}`.trim()}
          >
            <h1>{label}</h1>
          </BoldTitle>
        </Link>

        <p
          className={`line-clamp-3 text-[11px] font-semibold md:text-[20px] ${summaryClassName} lg:text-[0.8rem] xl:text-[1.313rem]`}
        >
          {summary}
        </p>
      </span>
    </div>
  );
}
