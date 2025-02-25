import Image from "next/image";
import home_1 from "@/../public/imgs/home_1.jpg";
import { BoldTitle } from "@/components/general";

export function FirstSection() {
  return (
    <section>
      <Image
        className="h-auto w-full object-cover md:max-h-[680px]"
        alt="Mulheres negras conversando em uma mesa em um escritório"
        src={home_1}
      />
    </section>
  );
}
