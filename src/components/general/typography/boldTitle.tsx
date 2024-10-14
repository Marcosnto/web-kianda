import { Syne } from "next/font/google";

type FooterTitleProps = {
  children: React.ReactNode;
  className?: string;
};

const syneFont = Syne({
  subsets: ["latin"],
});

export function BoldTitle({ children, className }: FooterTitleProps) {
  return (
    <div
      className={`${syneFont.className} break-words font-bold tracking-wider ${className}`.trim()}
    >
      {children}
    </div>
  );
}
