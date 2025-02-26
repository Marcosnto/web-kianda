type FooterTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function ItalicTitle({ children, className }: FooterTitleProps) {
  return (
    <div
      className={`mt-[60px] w-[95%] border-t-2 border-k_green_dark p-7 text-start text-[34px] font-normal italic leading-[45.9px] ${className}`.trim()}
    >
      {children}
    </div>
  );
}
