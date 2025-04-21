type FooterTitleProps = {
  children: React.ReactNode;
  className?: string;
};
export function BoldTitle({ children, className }: FooterTitleProps) {
  return <h1 className={`w-full font-semibold ${className}`.trim()}>{children}</h1>;
}
