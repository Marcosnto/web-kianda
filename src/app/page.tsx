"use client";
import {
  FirstSection,
  ForthSection,
  SecondSection,
  ThirdSection,
  CoursesAndClasses,
} from "@/components/home";

export default function Home() {
  return (
    <main className="">
      {/* <FirstSection /> */}
      <SecondSection />
      <CoursesAndClasses />
      <ThirdSection />
      <ForthSection />
    </main>
  );
}
