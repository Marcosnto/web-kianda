"use client";
import { ForthSection, SecondSection, ThirdSection, CoursesAndClasses, FirstSection } from "@/components/home";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <main className="">
        <FirstSection />
        <SecondSection />
        {/* <CoursesAndClasses /> */}
        <ThirdSection />
        <ForthSection />
      </main>
    </Suspense>
  );
}
