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
    <div
      className={`max-w-[20rem] rounded-[0.7rem] rounded-t-[30px] md:max-w-[22rem] ${bgClass} md:mb-14 md:bg-transparent`}
    >
      <Image
        className={`h-[309.19px] w-full rounded-[1.75rem] border-b-2 border-b-white object-cover md:mb-2 lg:mb-6 ${imageClassName}`.trim()}
        width={imageWidth}
        height={imageHeigth}
        alt={imageAlt}
        src={imageURL}
      />
      <div
        className={`${bgClass} h-[26ch] rounded-b-[15px] pb-8 text-center md:rounded-[15px]`}
      >
        <h1
          className="pt-[10.23px] text-[1.57rem] font-medium text-white md:border-b-2 md:border-b-k_yellow_light md:py-2"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p
          className={`${bgClass} rounded-xl px-[22px] py-[7px] text-left text-[0.94rem] text-white md:py-[18px] lg:text-[1.313rem] lg:leading-[28.35px]`}
        >
          {summary}
        </p>
      </div>
    </div>
  );
}
