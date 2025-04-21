type FooterTitleProps = {
  children: React.ReactNode;
  className?: string;
};
export function BoldTitle({ children, className }: FooterTitleProps) {
  return <div className={`w-full ${className}`.trim()}>{children}</div>;
}
