type FooterTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function ItalicTitle({ children, className }: FooterTitleProps) {
  return (
    <div className={`font-normal italic leading-[45.9px] ${className}`.trim()}>
      {children}
    </div>
  );
}
