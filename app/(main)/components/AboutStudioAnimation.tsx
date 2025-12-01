"use client";

import { useEffect, useRef, useState } from "react";

type AboutStudioAnimationProps = {
  textContent: React.ReactNode;
  imageContent: React.ReactNode;
};

const AboutStudioAnimation = ({ textContent, imageContent }: AboutStudioAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#0E0E0F] text-[#EAEAEA]">
      <div className="flex min-h-[700px] flex-col md:flex-row md:items-stretch">
        {/* Левая часть - текст */}
        <div 
          className={`relative flex flex-1 flex-col justify-center px-6 py-20 md:px-12 md:py-24 lg:px-16 xl:px-20 transition-all duration-1000 ease-out ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mx-auto w-full max-w-2xl">
            {textContent}
          </div>
        </div>

        {/* Правая часть - изображение */}
        <div 
          className={`relative flex-1 overflow-hidden min-h-[500px] md:min-h-[700px] md:w-[45%] lg:w-[40%] transition-all duration-[1200ms] ease-out delay-300 ${
            isVisible 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-[0.96]"
          }`}
        >
          {imageContent}
        </div>
      </div>
    </section>
  );
};

export default AboutStudioAnimation;
