import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BoldTitle } from "../general";

export type CardType = {
  id?: string;
  label: string;
  author?: string;
  columnType?: string;
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
    columnType,
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
        className={`flex flex-col justify-center md:mt-[6px] md:max-w-[673px] md:justify-start lg:pt-4 ${bodyClassName} lg:rounded-[1.4rem]`.trim()}
      >
        {columnType && <div className="text-[14px] font-light italic md:text-[16px]">{columnType}</div>}

        <Link href={url}>
          <BoldTitle className={`text-[18px] font-semibold md:text-[28px] 2xl:text-[32px] ${titleClassName}`.trim()}>
            <h1>{label}</h1>
          </BoldTitle>
        </Link>

        {summary && (
          <p className={`text-[11px] font-semibold md:text-[20px] ${summaryClassName} xl:text-[1.313rem]`}>{summary}</p>
        )}
      </div>
    </div>
  );
}
