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
    <div className={`${className} flex w-full text-k_green_light hover:text-k_cinnamon`.trim()}>
      <Image
        className={`flex-shrink-0 object-cover lg:pr-0 ${imageClassName} rounded-[1.30rem] lg:rounded-[1.4rem] lg:pb-1`.trim()}
        width={imageWidth}
        height={imageHeigth}
        alt={imageAlt}
        src={imageURL}
      />
      <div
        className={`lg:pb flex flex-col justify-center md:mt-[6px] md:max-w-[673px] md:justify-start lg:pt-4 ${bodyClassName} lg:rounded-[1.4rem]`.trim()}
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

        <div className="mb-[6px] text-[10px] font-light italic md:text-[14px] xl:mb-[31px]">Coluna Raça</div>

        <Link href={url}>
          <BoldTitle className={`text-[20px] font-semibold md:text-[36px] 2xl:text-[41.82px] ${titleClassName}`.trim()}>
            <h1>{label}</h1>
          </BoldTitle>
        </Link>

        <p className={`text-[11px] font-semibold md:text-[20px] ${summaryClassName} xl:text-[1.313rem]`}>{summary}</p>
      </div>
    </div>
  );
}
