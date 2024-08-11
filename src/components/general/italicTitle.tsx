import { Libre_Baskerville } from "next/font/google";

type FooterTitleProps = {
  children: React.ReactNode;
  className?: string;
};

const baskervilleFont = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400"],
  style: "italic",
});

export function ItalicTitle({ children, className }: FooterTitleProps) {
  return (
    <div
      className={`${baskervilleFont.className} font-italic text-xl/7 tracking-wider ${className}`.trim()}
    >
      {children}
    </div>
  );
}
