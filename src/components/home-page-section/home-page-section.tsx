import React from "react";

export default function HomePageSection({
  id,
  className,
  children,
  mobilePadding = "px-[16px]",
}: {
  id?: string;
  className?: string;
  mobilePadding?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`${mobilePadding} md:px-[28px] 2xl:flex 2xl:justify-center 2xl:px-[61px] ${className}`.trim()}
    >
      <div className="w-full max-w-[1741px]">{children}</div>
    </section>
  );
}
