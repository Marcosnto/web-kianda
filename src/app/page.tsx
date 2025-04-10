"use client";
import {
  ForthSection,
  SecondSection,
  ThirdSection,
  CoursesAndClasses,
  FirstSection,
} from "@/components/home";

export default function Home() {
  return (
    <main className="">
      <FirstSection />
      <SecondSection />
      <CoursesAndClasses />
      <ThirdSection />
      <ForthSection />
    </main>
  );
}
