import Image from "next/image";
import home_1 from "@/../public/imgs/home_1.jpg";
import { BoldTitle } from "@/components/general";

export function FirstSection() {
  const responsiveCSS = "sm:text-2xl md:text-3xl md:p-12  ";
  const minResponsiveCssForSmallDevices =
    "vs:text-s vs:gap-[0.5rem] ms:text-[1.160rem]";

  return (
    <section>
      <Image
        alt="Homem negro com óculos conversa com mulher negra com óculos em frente ao computador"
        src={home_1}
        style={{ width: "100%", height: "auto" }}
      />
      <div
        className={`flex h-20 w-full flex-wrap items-center justify-center gap-3 bg-k_vivid_orange pl-1 pr-1 text-xl text-k_brown shadow-inner ${responsiveCSS} ${minResponsiveCssForSmallDevices}`}
      >
        <BoldTitle>Diversidade</BoldTitle>
        <span>•</span>
        <p className="vs:text-s ms:text-[1.160rem] text-xl sm:text-2xl md:text-3xl">
          Cuidado
        </p>
        <span>•</span>
        <BoldTitle>Acolhimento</BoldTitle>
      </div>
    </section>
  );
}
