import HeroSection from "@/app/(main)/sections/HeroSection";
import ProjectShowcase from "@/app/(main)/components/ProjectShowcase";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#0E0E0F] text-[#EAEAEA]">
      <HeroSection />
      <ProjectShowcase />
    </main>
  );
}
