import HeroSection from "@/app/(main)/sections/HeroSection";
import ProjectShowcase from "@/app/(main)/components/ProjectShowcase";
import Stages from "@/app/(main)/components/Stages";
import AboutStudio from "@/app/(main)/components/AboutStudio";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#0E0E0F] text-[#EAEAEA]">
      <HeroSection />
      <ProjectShowcase />
      <Stages />
      <AboutStudio />
    </main>
  );
}
