"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const HeroSection = () => {
  const [showPhotos, setShowPhotos] = useState(false);
  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const playVideo = async () => {
    if (videoRef.current) {
      try {
        await videoRef.current.play();
      } catch (error) {
        // Игнорируем ошибки автовоспроизведения
        // Браузер может блокировать автовоспроизведение
        console.log("Video autoplay prevented:", error);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      
      // Начинаем показывать фото за 1 секунду до окончания видео
      if (duration - currentTime <= 1 && !showPhotos) {
        setShowPhotos(true);
      }
    }
  };

  const handleVideoEnd = () => {
    // Видео уже скрыто, фото уже показываются
  };

  const handleCanPlay = () => {
    // Пытаемся воспроизвести видео после загрузки
    playVideo();
  };

  useEffect(() => {
    // Пытаемся воспроизвести видео при монтировании компонента
    playVideo();
  }, []);

  useEffect(() => {
    let rafId: number | null = null;
    let hideTimer: ReturnType<typeof setTimeout> | null = null;
    let resetTimer: ReturnType<typeof setTimeout> | null = null;

    if (showPhotos) {
      rafId = requestAnimationFrame(() => {
        setIsZoomedIn(true);
      });

      hideTimer = setTimeout(() => {
        setShowPhotos(false);
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(() => undefined);
        }
      }, 4500); // время показа фото
    } else {
      resetTimer = setTimeout(() => {
        setIsZoomedIn(false);
      }, 2600); // ждём пока фото полностью исчезнут
    }

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      if (hideTimer) {
        clearTimeout(hideTimer);
      }
      if (resetTimer) {
        clearTimeout(resetTimer);
      }
    };
  }, [showPhotos]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0E0E0F]">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          muted
          playsInline
          loop={false}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleVideoEnd}
          onCanPlay={handleCanPlay}
          className={`h-full w-full object-cover contrast-[0.75] transition-opacity duration-[2500ms] ease-in-out ${
            showPhotos ? "opacity-0" : "opacity-90"
          }`}
          style={{
            filter: "brightness(0.7) contrast(0.85) grayscale(60%) saturate(35%)",
          }}
        >
          <source src="/caza_video/hero-motion.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        className={`absolute inset-0 bg-[rgba(14,14,15,0.4)] transition-opacity duration-[2500ms] ease-in-out ${
          showPhotos ? "opacity-0" : "opacity-100"
        }`}
      />
      
      {/* Фото - плавно появляются */}
      <div
        className={`absolute inset-0 z-20 flex items-center justify-center gap-2 px-2 md:gap-4 md:px-4 transition-opacity duration-[2500ms] ease-in-out ${
          showPhotos ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Левая фото - скрыта на мобильных */}
        <div className="hidden md:block h-full w-1/3 overflow-hidden">
          <div className={`h-full w-full transform transition-transform duration-[2500ms] ease-out ${
            isZoomedIn ? "scale-[1.08]" : "scale-90"
          }`}>
            <Image
              src="/photos_hero/1_slide/11.jpg"
              alt="Hero photo 1"
              width={400}
              height={800}
              className="h-full w-full object-cover opacity-90"
              style={{
                filter: "brightness(0.7) contrast(0.75) grayscale(60%) saturate(35%)",
              }}
              priority
            />
          </div>
        </div>
        
        {/* Центральная фото - всегда видна */}
        <div className="h-full w-full md:w-1/3 overflow-hidden">
          <div className={`h-full w-full transform transition-transform duration-[2500ms] ease-out ${
            isZoomedIn ? "scale-[1.12] md:scale-[1.18]" : "scale-90"
          }`}>
            <Image
              src="/photos_hero/1_slide/18.jpg"
              alt="Hero photo 2"
              width={400}
              height={800}
              className="h-full w-full object-cover opacity-90"
              style={{
                filter: "brightness(0.7) contrast(0.75) grayscale(60%) saturate(35%)",
              }}
              priority
            />
          </div>
        </div>
        
        {/* Правая фото - скрыта на мобильных */}
        <div className="hidden md:block h-full w-1/3 overflow-hidden">
          <div className={`h-full w-full transform transition-transform duration-[2500ms] ease-out ${
            isZoomedIn ? "scale-[1.08]" : "scale-90"
          }`}>
            <Image
              src="/photos_hero/1_slide/58.jpg"
              alt="Hero photo 3"
              width={400}
              height={800}
              className="h-full w-full object-cover opacity-90"
              style={{
                filter: "brightness(0.7) contrast(0.75) grayscale(60%) saturate(35%)",
              }}
              priority
            />
          </div>
        </div>
      </div>
      
      {/* Заголовки внизу - всегда видимы */}
      <div className="absolute bottom-0 left-0 right-0 z-30 flex flex-col items-center justify-center gap-3 px-4 pb-6 md:gap-6 md:pb-12">
        <h1 
          className="animate-fade-in text-center text-2xl font-semibold leading-tight text-[#EAEAEA] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          style={{ letterSpacing: '-0.01em' }}
        >
          Авторский дизайн интерьера в Санкт-Петербурге
        </h1>
        <h2 className="animate-fade-in-delayed text-center text-base font-normal leading-relaxed text-[#EAEAEA]/90 sm:text-lg md:text-xl lg:text-2xl">
          Каждый проект - отражение Вашей жизни и характера
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
