/* eslint-disable @next/next/no-img-element */
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
      className={`mb-[15px] flex w-full justify-between text-[18px] md:text-[24px] ${hasDivider} ${borderSelectedColor} text-start font-normal ${isItalic} ${className}`.trim()}
    >
      <span className="flex w-full justify-between">
        <span className="mt-[6px] text-[18px] md:text-[24px] lg:text-[34px]">{children}</span>
        <span className="mt-[8px]">
          {iconType === "completeMoon" ? (
            <img alt="half moon" src="/imgs/complete_moon.svg" />
          ) : (
            <span>
              <img className="md:hidden" alt="half moon" src="/imgs/half_moon_mobile.svg" />
              <img className="hidden xl:block" alt="half moon" src="/imgs/half_moon.svg" />
            </span>
          )}
        </span>
      </span>
    </div>
  );
}
