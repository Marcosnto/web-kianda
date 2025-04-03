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
    <section id={id} className={`px-[16px] ${className}`.trim()}>
      {children}
    </section>
  );
}
