import Image from "next/image";
import home_1 from "@/../public/imgs/home_1.png";
import KiandaLogo from "@/../public/imgs/logo_2.svg";
import useHeader from "@/components/header/header.hook";

export function FirstSection() {
  const { menuOptions } = useHeader();

  return (
    <section className="lg relative mb-[22px]">
      <div
        className={`mx-4 h-[400px] rounded-xl bg-header-image_mobile bg-cover bg-center md:h-[936px] lg:mx-0 lg:h-[890px] lg:rounded-none lg:bg-header-image lg:bg-cover xl:h-[1080px]`}
      >
        <div
          className="hidden p-4 lg:block"
          style={{ backgroundColor: "rgba(40, 54, 24, 0.5)" }}
        >
          <menu className="flex w-full flex-row items-center justify-center gap-6 font-medium leading-[37.8px] text-white opacity-[100%] lg:text-[20px] xl:text-[28px]">
            {menuOptions.map((option) => (
              <li key={option.label}>{option.label}</li>
            ))}
          </menu>
        </div>
      </div>
    </section>
  );
}
