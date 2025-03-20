import { ItalicTitle } from "@/components/general";
import { Button } from "@/components/ui/button";
import { Libre_Baskerville } from "next/font/google";

type FormButtonProps = {
  label: string;
  className?: string;
  onClick: () => void;
};

const baskervilleFont = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400"],
  style: "normal",
});

export default function FormButton({
  label,
  className,
  onClick,
}: FormButtonProps) {
  return (
    <Button
      className={`${baskervilleFont.className} w-6/12 rounded-none bg-k_brown text-[1rem] text-k_off_white ${className}`.trim()}
      onClick={onClick}
    >
      <ItalicTitle showDivider>{label}</ItalicTitle>
    </Button>
  );
}
