import Image from "next/image";
import home_1 from "@/../public/imgs/home_1.jpg";
import { BoldTitle } from "@/components/general";

export function FirstSection() {
  const responsiveCSS =
    "sm:justify-center sm:gap-8 sm:text-2xl lg:p-10 lg:text-3xl";

  return (
    <section>
      <Image
        alt="Homem negro com óculos conversa com mulher negra com óculos em frente ao computador"
        src={home_1}
        style={{ width: "100%", height: "auto" }}
      />
      <div
        className={`flex h-20 w-full items-center justify-between bg-k_vivid_orange pl-6 pr-6 text-lg text-k_brown shadow-inner ${responsiveCSS}`}
      >
        <BoldTitle>Diversidade</BoldTitle>
        <span>•</span>
        <p className="text-xl sm:text-2xl lg:text-3xl">Cuidado</p>
        <span>•</span>
        <BoldTitle>Acolhimento</BoldTitle>
      </div>
    </section>
  );
}
