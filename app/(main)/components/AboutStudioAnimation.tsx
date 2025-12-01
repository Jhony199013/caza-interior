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
          // Запускаем анимацию при входе в viewport и сбрасываем при выходе
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
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
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-[#0E0E0F] text-[#EAEAEA]">
      <div className="relative flex min-h-[600px] flex-col md:flex-row md:items-stretch">
        {/* Левая часть - текст с анимацией, ближе к центру */}
        <div 
          className={`relative z-10 flex flex-1 flex-col justify-center bg-[#0E0E0F] py-16 pl-6 pr-6 md:py-24 md:pl-8 md:pr-4 lg:pl-12 lg:pr-6 xl:pl-16 xl:pr-8 transition-all duration-1000 ease-out ${
            isVisible 
              ? "opacity-100 translate-x-0" 
              : "opacity-0 -translate-x-12"
          }`}
        >
          <div className="mx-auto w-full max-w-2xl">
            {textContent}
          </div>
        </div>

        {/* Правая часть - изображение с анимацией */}
        <div 
          className={`relative flex-1 overflow-hidden bg-[#1A1A1C] min-h-[400px] md:max-w-[50%] lg:max-w-[45%] transition-all duration-[1500ms] ease-in-out delay-500 ${
            isVisible 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-[0.98]"
          }`}
        >
          {imageContent}
        </div>
      </div>
    </section>
  );
};

export default AboutStudioAnimation;

