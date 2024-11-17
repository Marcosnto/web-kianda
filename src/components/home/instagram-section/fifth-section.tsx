/* eslint-disable @next/next/no-img-element */
import { BoldTitle } from "@/components/general";
import { useFifthSection } from "./fifth-section.hook";
import insta from "@/../public/imgs/insta.png";
import Image from "next/image";
import Link from "next/link";

export function FifthSection() {
  const { data } = useFifthSection();

  if (!data) {
    return <h1>error</h1>;
  }

  return (
    <section
      className="flex flex-col items-center gap-6 bg-[#283618] pb-20 pt-10"
      id="socialMedias"
    >
      <BoldTitle className="text-center text-[2.5rem] leading-[2.5rem] text-k_bronze">
        Kianda <br /> no #insta!
      </BoldTitle>
      <div className="grid grid-cols-2 gap-3 pl-2 pr-2 sm:grid-cols-4 sm:pl-4 sm:pr-4 md:gap-1 lg:grid-cols-6">
        {data?.length === 0 ? (
          <Image alt="alt" src={insta} quality={100} />
        ) : (
          data.map((item, index) => (
            <Link
              className={`${index > 5 ? "hidden sm:inline" : "inline"}`}
              key={item.id}
              href={item.permalink}
              target="_blank"
            >
              <div className="h-[262px] max-w-[266px]">
                <img
                  className="h-full w-full object-cover"
                  alt="Instagram image"
                  src={
                    item.media_type === "VIDEO"
                      ? item.thumbnail_url
                      : item.media_url
                  }
                />
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}
