import Image from "next/image";
import home_1 from "@/../public/imgs/home_1.jpg";
import BoldTitle from "@/components/general/boldTitle";

export default function HomeFirstSection() {
  return (
    <div>
      <Image
        alt="Homem negro com óculos conversa com mulher negra com óculos em frente ao computador"
        src={home_1}
        style={{ width: "100%", height: "auto" }}
      />
      <div className="bg-k_vivid_orange flex h-20 w-full items-center justify-between pl-6 pr-6 text-lg text-k_brown shadow-inner">
        <BoldTitle>Diversidade</BoldTitle>
        <span>•</span>
        <p className="text-xl">Cuidado</p>
        <span>•</span>
        <BoldTitle>Acolhimento</BoldTitle>
      </div>
    </div>
  );
}
