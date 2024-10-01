import Image from "next/image";
import home_1 from "@/../public/imgs/home_1.jpg";
import { BoldTitle } from "@/components/general";

export function FirstSection() {
  const responsiveCSS = "sm:text-2xl md:text-3xl md:p-6";
  const minResponsiveCssForSmallDevices =
    "vs:text-s vs:gap-[0.5rem] ms:text-[1.160rem]";

  return (
    <section>
      <Image
        className="h-auto w-full object-cover md:h-[680px]"
        alt="Homem negro com óculos conversa com mulher negra com óculos em frente ao computador"
        src={home_1}
      />
      <div
        className={`flex h-20 w-full flex-wrap items-center justify-center gap-3 bg-k_vivid_orange px-1 text-xl text-k_brown shadow-inner ${responsiveCSS} ${minResponsiveCssForSmallDevices}`}
      >
        <BoldTitle>Diversidade</BoldTitle>
        <span>•</span>
        <p className="text-xl vs:text-s ms:text-[1.160rem] sm:text-2xl md:text-3xl">
          Cuidado
        </p>
        <span>•</span>
        <BoldTitle>Acolhimento</BoldTitle>
      </div>
    </section>
  );
}
