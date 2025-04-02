import Image from "next/image";
import home_1 from "@/../public/imgs/home_1.png";
import KiandaLogo from "@/../public/imgs/logo_2.svg";
import useHeader from "@/components/header/header.hook";

export function FirstSection() {
  const { menuOptions } = useHeader();

  return (
    <section className="relative mb-[22px]">
      <div
        className={`mx-4 h-[400px] rounded-xl bg-header-image_mobile bg-cover bg-center md:h-[936px] lg:h-[1080px] lg:bg-header-image lg:bg-cover`}
      >
        <div className="hidden bg-k_green_dark p-4 text-white opacity-[75%] lg:block">
          <menu className="flex w-full flex-row items-center justify-center gap-6 text-[28px] font-medium leading-[37.8px] text-white">
            {menuOptions.map((option) => (
              <li key={option.label}>{option.label}</li>
            ))}
          </menu>
        </div>
      </div>
    </section>
  );
}
