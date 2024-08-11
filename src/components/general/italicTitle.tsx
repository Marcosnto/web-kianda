type FooterTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function ItalicTitle({ children, className }: FooterTitleProps) {
  return (
    <div className={`font-georgia italic tracking-wider ${className}`.trim()}>
      {children}
    </div>
  );
}
