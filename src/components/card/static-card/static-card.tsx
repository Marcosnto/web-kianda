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
      className={`h-[62ch] max-w-[20rem] rounded-[0.7rem] rounded-t-[30px] ${bgClass}`}
    >
      <Image
        className={`h-[309.19px] rounded-[1.75rem] border-b-2 border-b-white object-cover lg:mb-6 ${imageClassName}`.trim()}
        width={imageWidth}
        height={imageHeigth}
        alt={imageAlt}
        src={imageURL}
      />
      <div className={`${bgClass} rounded-b-[15px] pb-8 text-center`}>
        <h1
          className="pt-[10.23px] text-[1.57rem] font-medium text-white lg:border-b-2 lg:border-b-white"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p
          className={`${bgClass} rounded-xl px-[22px] py-[7px] text-left text-[0.94rem] text-white lg:text-[1.313rem] lg:leading-[28.35px]`}
        >
          {summary}
        </p>
      </div>
    </div>
  );
}
