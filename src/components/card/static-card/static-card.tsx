import Image, { StaticImageData } from "next/image";

export type StaticCardType = {
  id?: string;
  title: string;
  summary: string;
  imageURL: string | StaticImageData;
  imageClassName?: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeigth?: number;
  //change this type to be mandatory
  backgroundColor?: "greenDark" | "greenLight" | "cinnamon" | "orange";
};

const colorMap = {
  greenDark: "bg-k_green_dark",
  greenLight: "bg-k_green_light",
  cinnamon: "bg-k_cinnamon",
  orange: "bg-k_orange",
};

export default function StaticCard({
  title,
  summary,
  imageClassName,
  imageAlt,
  imageURL,
  imageHeigth,
  imageWidth,
  backgroundColor = "greenDark",
}: StaticCardType) {
  const bgClass = colorMap[backgroundColor];

  return (
    <div className="w-full max-w-[396px] md:w-[350px]">
      <Image
        className={`mb-[6px] h-[294px] max-h-[362px] rounded-[1.75rem] object-cover sm:h-[362px] md:mb-2 md:h-[320px] lg:mb-6 ${imageClassName}`.trim()}
        width={imageWidth}
        height={imageHeigth}
        alt={imageAlt}
        src={imageURL}
      />
      <div className={`${bgClass} rounded-[15px] text-center md:rounded-[15px]`}>
        <h1
          className="border-b-2 border-b-k_yellow_light py-2 pt-[10.23px] text-[1.57rem] font-medium leading-7 text-white"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p
          className={`${bgClass} h-[18ch] rounded-xl px-[22px] py-[7px] text-left text-[0.94rem] font-normal text-white sm:h-[20ch] md:py-[18px] lg:h-[21ch] lg:text-[1.313rem] 2xl:h-[22ch]`}
        >
          {summary}
        </p>
      </div>
    </div>
  );
}
