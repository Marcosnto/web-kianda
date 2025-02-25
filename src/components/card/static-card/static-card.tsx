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
    <div className={`max-w-[24.75rem]`}>
      <Image
        className={`mb-6 rounded-[1.75rem] object-cover ${imageClassName}`.trim()}
        width={imageWidth}
        height={imageHeigth}
        alt={imageAlt}
        src={imageURL}
      />
      <div
        className={`${bgClass} mb-[0.125rem] h-[37ch] w-[396px] rounded-xl text-center`}
      >
        <h1
          className="border-b-2 border-b-white pt-[11.6px] text-[2.25rem] text-white"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p
          className={`${bgClass} rounded-xl px-[17px] py-[24.58px] text-left text-[1.313rem] leading-[28.35px] text-white`}
        >
          {summary}
        </p>
      </div>
    </div>
  );
}
