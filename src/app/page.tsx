import About from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import WorkExperience from "@/components/WorkExperienceSection";
import Image from "next/image";
import Provider from "./provider/Provider";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <WorkExperience />
    </>
  );
}
