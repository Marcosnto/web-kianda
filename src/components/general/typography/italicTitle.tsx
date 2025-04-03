import CompleteMoon from "@/../public/imgs/complete_moon.svg";
import HalfMoon from "@/../public/imgs/half_moon.svg";

type FooterTitleProps = {
  children?: React.ReactNode;
  iconType?: "completeMoon" | "halfMoon";
  showDivider?: boolean;
  borderColor?: string;
  className?: string;
};

export function ItalicTitle({
  children,
  className,
  showDivider,
  borderColor = "black",
  iconType,
}: FooterTitleProps) {
  const hasDivider = showDivider
    ? "border-t-[1px] md:border-t-[1.5px] lg:border-t-[3px]"
    : "border-none";
  const borderSelectedColor = `border-${borderColor}`;
  return (
    <div
      className={`mb-[12px] flex w-full justify-between ${hasDivider} ${borderSelectedColor} text-start font-normal italic lg:mb-[50px] ${className}`.trim()}
    >
      <span className="flex w-full justify-between">
        <span className="mt-[6px] text-[18px] md:text-[24px] lg:text-[34px]">
          {children}
        </span>
        <span className="mr-[6px] mt-[8px]">
          {iconType === "completeMoon" ? <CompleteMoon /> : <HalfMoon />}
        </span>
      </span>
    </div>
  );
}
