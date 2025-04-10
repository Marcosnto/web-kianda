"use client";
import {
  ForthSection,
  SecondSection,
  ThirdSection,
  CoursesAndClasses,
} from "@/components/home";

export default function Home() {
  return (
    <main className="">
      <SecondSection />
      <CoursesAndClasses />
      <ThirdSection />
      <ForthSection />
    </main>
  );
}
