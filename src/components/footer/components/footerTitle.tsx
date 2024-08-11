import { Syne } from "next/font/google";

type FooterTitleProps = {
  children: React.ReactNode;
  className?: string;
};

const syneFont = Syne({
  subsets: ["latin"],
});

export default function FooterTitle({ children, className }: FooterTitleProps) {
  return (
    <div
      className={`${syneFont.className} text-xl/7 font-bold tracking-wider ${className}`.trim()}
    >
      {children}
    </div>
  );
}
