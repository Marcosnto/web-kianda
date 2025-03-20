import CompleteMoon from "@/../public/imgs/complete_moon.svg";
import HalfMoon from "@/../public/imgs/half_moon.svg";

type FooterTitleProps = {
  children: React.ReactNode;
  iconType?: "completeMoon" | "halfMoon";
  showDivider?: boolean;
  className?: string;
};

export function ItalicTitle({
  children,
  className,
  showDivider,
  iconType,
}: FooterTitleProps) {
  const hasDivider = showDivider ? "border-t-[1px]" : "border-none";
  return (
    <div
      className={`flex w-full justify-between ${hasDivider} border-k_green_dark border-white text-start font-normal italic ${className}`.trim()}
    >
      <span className="flex w-full justify-between">
        <span className="mt-[6px] text-[18px]">{children}</span>
        <span className="mr-[6px] mt-[8px]">
          {iconType === "completeMoon" ? <CompleteMoon /> : <HalfMoon />}
        </span>
      </span>
    </div>
  );
}
