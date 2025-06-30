import React, { Suspense } from "react";
import HeaderClientMenu from "./components/HeaderClientMenu";

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <HeaderClientMenu />
      </Suspense>
      {children}
    </>
  );
}
