import React from "react";

export default function HomePageSection({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`px-[16px] 2xl:flex 2xl:justify-center 2xl:px-[83px] ${className}`.trim()}>
      <div className="w-full max-w-[1741px]">{children}</div>
    </section>
  );
}
