import CompleteMoon from "@/../public/imgs/complete_moon.svg";
import HalfMoon from "@/../public/imgs/half_moon.svg";

type FooterTitleProps = {
  children?: React.ReactNode;
  iconType?: "completeMoon" | "halfMoon";
  italic?: boolean;
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
  italic = true,
}: FooterTitleProps) {
  const hasDivider = showDivider ? "border-t-[1px] md:border-t-[1.5px] lg:border-t-[3px]" : "border-none";
  const borderSelectedColor = `border-${borderColor}`;
  const isItalic = italic ? "italic" : "";

  return (
    <div
      className={`mb-[28px] flex w-full justify-between text-[18px] md:text-[24px] ${hasDivider} ${borderSelectedColor} text-start font-normal ${isItalic} ${className}`.trim()}
    >
      <span className="flex w-full justify-between">
        <span className="mt-[6px] text-[18px] md:text-[24px] lg:text-[34px]">{children}</span>
        <span className="mr-[6px] mt-[8px]">
          {iconType === "completeMoon" ? (
            <CompleteMoon />
          ) : (
            <HalfMoon
              className="h-[12px] w-[23px] 2xl:h-[16px] 2xl:w-[29px]"
              viewBox="0 0 29 16"
              xmlns="http://www.w3.org/2000/svg"
            />
          )}
        </span>
      </span>
    </div>
  );
}
