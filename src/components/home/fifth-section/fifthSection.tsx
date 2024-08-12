"use client";
import { BoldTitle } from "@/components/general";
import { useFifthSection } from "./fifthSection.hook";
import insta from "@/../public/imgs/insta.png";
import Image from "next/image";

export function FifthSection() {
  const {} = useFifthSection();

  return (
    <section className="flex flex-col items-center gap-6 bg-[#606C38] pb-20 pt-10">
      <BoldTitle className="text-center text-[2.5rem] leading-[2.5rem] text-white">
        Kianda <br /> no #insta
      </BoldTitle>
      <Image alt="alt" src={insta} quality={100} />
    </section>
  );
}
