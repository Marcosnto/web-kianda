import { BoldTitle } from "../typography/boldTitle";

export function IntraPageHeader({ name }: { name: string }) {
  const responsiveCSS = "sm:text-2xl md:text-3xl md:p-6 xl:text-4xl";

  return (
    <div
      className={`lg:h-25 2xl:h-30 flex h-16 w-full items-center justify-center gap-4 bg-k_vivid_orange text-xl md:h-20 xl:h-28 ${responsiveCSS}`}
    >
      <BoldTitle>{name}</BoldTitle>
      <span>•</span>
      <p className="font-georgia text-xl ms:text-[1.160rem] sm:text-2xl md:text-2xl xl:text-3xl">
        {name}
      </p>
      <span>•</span>
      <BoldTitle>{name}</BoldTitle>
    </div>
  );
}
