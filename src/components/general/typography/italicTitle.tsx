import CompleteMoon from "@/../public/imgs/complete_moon.svg";
import HalfMoon from "@/../public/imgs/half_moon.svg";

type FooterTitleProps = {
  children: React.ReactNode;
  iconType: "completeMoon" | "halfMoon";
  className?: string;
};

export function ItalicTitle({
  children,
  className,
  iconType,
}: FooterTitleProps) {
  return (
    <div
      className={`mt-[60px] flex w-[95%] justify-between border-t-2 border-k_green_dark pb-7 text-start text-[34px] font-normal italic leading-[45.9px] ${className}`.trim()}
    >
      <span className="mt-4">{children}</span>
      <span>
        {iconType === "completeMoon" ? <CompleteMoon /> : <HalfMoon />}
      </span>
    </div>
  );
}
