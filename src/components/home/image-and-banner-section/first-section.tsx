import useHeader from "@/components/header/header.hook";
import HomePageSection from "@/components/home-page-section/home-page-section";

export function FirstSection() {
  const { menuOptions, moveToSection } = useHeader();

  return (
    <>
      <HomePageSection className="mb-[21px] lg:hidden 2xl:hidden">
        <div
          className={`h-[510px] w-full rounded-[30px] bg-header-image_mobile bg-cover bg-center sm:h-[836px] sm:max-w-[600px] md:h-[936px] md:max-w-full md:bg-header-image_medium`}
        />
      </HomePageSection>
      <section className="mb-10 hidden justify-center lg:relative lg:flex">
        <div className={`mx-0 h-[890px] w-full bg-header-image bg-cover bg-center sm:h-[836px] xl:h-[1080px]`}>
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
    </>
  );
}
