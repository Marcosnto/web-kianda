import Link from "next/link";

export default function SocialMediaIcon({
  link,
  children,
}: {
  link: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={link}>
      <span className="flex h-[29.24px] w-[29.24px] items-center justify-center gap-2 rounded-sm bg-k_green_light lg:h-[75px] lg:w-[75px] lg:bg-black">
        {children}
      </span>
    </Link>
  );
}
