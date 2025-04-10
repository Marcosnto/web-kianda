import KiandaLogo from "@/../public/imgs/kianda_name.svg";

export function FirstSection() {
  return (
    <section className="lg:relative lg:mb-[22px]">
      <span className="flex items-center justify-center md:h-[72px] md:w-[357px]">
        <KiandaLogo
          alt="imagem svg escrita Kianda"
          className="scale-[0.59] fill-k_bronze md:scale-150"
        />
      </span>
    </section>
  );
}
