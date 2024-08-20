"use client";
import { BoldTitle } from "@/components/general";
import { useFifthSection } from "./fifth-section.hook";
import insta from "@/../public/imgs/insta.png";
import Image from "next/image";
import Link from "next/link";

export function FifthSection() {
  const { data } = useFifthSection();

  return (
    <section className="flex flex-col items-center gap-6 bg-[#606C38] pb-20 pt-10">
      <BoldTitle className="text-center text-[2.5rem] leading-[2.5rem] text-white">
        Kianda <br /> no #insta
      </BoldTitle>
      <div className="grid grid-cols-2 gap-3 pl-4 pr-4 sm:grid-cols-4 md:gap-1 lg:grid-cols-6">
        {data.length === 0 ? (
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
