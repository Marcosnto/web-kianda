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
    <div className="w-[321px] md:w-[350px] lg:w-[396px]">
      <Image
        className={`mb-[6px] h-[294px] rounded-[1.75rem] object-cover sm:h-[362px] md:mb-2 md:h-[320px] lg:mb-6 lg:h-[362px] ${imageClassName}`.trim()}
        width={imageWidth}
        height={imageHeigth}
        alt={imageAlt}
        src={imageURL}
      />
      <div className={`${bgClass} h-[226px] rounded-[15px] text-center md:rounded-[15px] lg:h-[299px]`}>
        <h1
          className="] border-b-2 border-b-k_yellow_light pb-[12.5px] pt-[11.77px] text-[25px]/[25px] font-normal text-white md:text-[30px]/[35px] xl:text-[36.55px]"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p
          className={`${bgClass} rounded-xl px-[15px] py-[7px] text-left text-[0.94rem] font-light text-white md:py-[18px] lg:text-[21.5px]`}
        >
          {summary}
        </p>
      </div>
    </div>
  );
}
