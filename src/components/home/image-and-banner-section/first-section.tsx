import useHeader from "@/components/header/header.hook";

export function FirstSection() {
  const { menuOptions, moveToSection } = useHeader();

  return (
    <section className="mb-10 lg:relative">
      <div
        className={`mx-4 h-[400px] rounded-xl bg-header-image_mobile bg-cover bg-center md:h-[936px] lg:mx-0 lg:h-[890px] lg:rounded-none lg:bg-header-image lg:bg-cover xl:h-[1080px]`}
      >
        <div className="hidden p-4 lg:block" style={{ backgroundColor: "rgba(40, 54, 24, 0.5)" }}>
          <nav className="flex w-full flex-row items-center justify-center gap-6 font-medium text-white opacity-[100%] lg:text-[20px] xl:text-[28px]">
            {menuOptions.map((option) => (
              <a href={option.path} key={option.path} onClick={(e) => moveToSection(option.path, false, e)}>
                {option.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
