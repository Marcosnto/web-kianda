type FooterTitleProps = {
  children: React.ReactNode;
  className?: string;
};
export function BoldTitle({ children, className }: FooterTitleProps) {
  return <div className={`break-words ${className}`.trim()}>{children}</div>;
}
