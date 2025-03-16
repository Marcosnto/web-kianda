import Image from "next/image";
import home_1 from "@/../public/imgs/home_1.png";
import KiandaLogo from "@/../public/imgs/logo_2.svg";
import useHeader from "@/components/header/header.hook";

export function FirstSection() {
  const { menuOptions } = useHeader();

  return (
    <section className="relative">
      <div className={`h-[1080px] bg-header-image bg-cover bg-center`}>
        <div className="bg-k_green_dark p-4 text-white opacity-[75%]">
          <menu className="flex w-full flex-row items-center justify-center gap-6 text-[28px] font-medium leading-[37.8px] text-white">
            {menuOptions.map((option) => (
              <li key={option.label}>{option.label}</li>
            ))}
          </menu>
        </div>
      </div>
      {/* <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center">
        <KiandaLogo alt="imagem svg escrita Kianda" className="fill-k_bronze" />
        <p className="text-[36.75px] font-light text-white">
          Tecer cuidado, promover acolhimento
        </p>
      </div> */}
    </section>
  );
}
