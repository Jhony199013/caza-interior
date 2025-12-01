"use client";

import { useEffect, useRef, useState } from "react";

type Stage = {
  number: number;
  title: string;
  side: "left" | "right";
};

type StagesAnimationProps = {
  stages: Stage[];
};

const StagesAnimation = ({ stages }: StagesAnimationProps) => {
  const [visibleStages, setVisibleStages] = useState<Set<number>>(new Set());
  const [lineProgress, setLineProgress] = useState(0);
  const [maxLineHeight, setMaxLineHeight] = useState(0);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastStageRef = useRef<HTMLDivElement | null>(null);

  // Функция для вычисления высоты линии до центра последнего видимого кружка
  const calculateLineHeight = (currentVisibleStages: Set<number>) => {
    if (!containerRef.current) return;
    
    const containerHeight = containerRef.current.offsetHeight;
    if (containerHeight === 0) return;
    
    // Находим последний видимый этап
    const visibleIndices = Array.from(currentVisibleStages).sort((a, b) => a - b);
    const lastVisibleIndex = visibleIndices.length > 0 ? visibleIndices[visibleIndices.length - 1] : -1;
    
    if (lastVisibleIndex >= 0 && stageRefs.current[lastVisibleIndex]) {
      const lastVisibleStage = stageRefs.current[lastVisibleIndex];
      const lastStageOffsetTop = lastVisibleStage.offsetTop;
      const lastStageHeight = lastVisibleStage.offsetHeight;
      
      // Вычисляем позицию центра последнего видимого кружка
      const lastCircleCenter = lastStageOffsetTop + (lastStageHeight / 2);
      
      // Вычисляем процент от общей высоты контейнера
      const progress = (lastCircleCenter / containerHeight) * 100;
      setLineProgress(Math.min(progress, 100));
    } else {
      setLineProgress(0);
    }
  };

  // Функция для вычисления максимальной высоты линии (до центра последнего кружка)
  const calculateMaxLineHeight = () => {
    if (!containerRef.current || !lastStageRef.current) return;
    
    const containerHeight = containerRef.current.offsetHeight;
    if (containerHeight === 0) return;
    
    const lastStageOffsetTop = lastStageRef.current.offsetTop;
    const lastStageHeight = lastStageRef.current.offsetHeight;
    
    // Вычисляем позицию центра последнего кружка
    const lastCircleCenter = lastStageOffsetTop + (lastStageHeight / 2);
    
    // Вычисляем процент от общей высоты контейнера
    const maxHeight = (lastCircleCenter / containerHeight) * 100;
    setMaxLineHeight(Math.min(maxHeight, 100));
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stageRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleStages((prev) => {
                const newSet = new Set(prev);
                newSet.add(index);
                
                // Пересчитываем высоту линии до центра последнего видимого этапа
                setTimeout(() => {
                  calculateLineHeight(newSet);
                }, 100);
                
                return newSet;
              });
            } else {
              setVisibleStages((prev) => {
                const newSet = new Set(prev);
                newSet.delete(index);
                
                // Пересчитываем высоту линии после удаления этапа
                setTimeout(() => {
                  calculateLineHeight(newSet);
                }, 100);
                
                return newSet;
              });
            }
          });
        },
        {
          threshold: 0.4,
          rootMargin: "0px 0px -150px 0px",
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    // Пересчитываем при изменении размера окна
    const handleResize = () => {
      calculateMaxLineHeight();
      setVisibleStages((prev) => {
        setTimeout(() => {
          calculateLineHeight(prev);
        }, 50);
        return prev;
      });
    };
    
    window.addEventListener('resize', handleResize);
    
    // Первоначальный расчет максимальной высоты линии
    const initTimer = setTimeout(() => {
      calculateMaxLineHeight();
      setVisibleStages((prev) => {
        setTimeout(() => {
          calculateLineHeight(prev);
        }, 50);
        return prev;
      });
    }, 200);
    
    return () => {
      observers.forEach((observer) => observer.disconnect());
      window.removeEventListener('resize', handleResize);
      clearTimeout(initTimer);
    };
  }, [stages.length]);

  return (
    <div ref={containerRef} className="relative">
      {/* Фоновая линия (статичная) - доходит только до центра последнего кружка */}
      <div
        className="absolute left-1/2 top-0 w-0.5 -translate-x-1/2 bg-[#c7afa2]/20 transition-all duration-1000 ease-out md:left-1/2"
        style={{
          height: maxLineHeight > 0 ? `${maxLineHeight}%` : '100%',
        }}
      />
      
      {/* Анимированная линия прогресса - продвигается по мере появления карточек */}
      <div
        className="absolute left-1/2 top-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#c7afa2] to-[#c7afa2]/60 transition-all duration-1000 ease-out md:left-1/2"
        style={{
          height: `${lineProgress}%`,
          boxShadow: "0 0 8px rgba(199, 175, 162, 0.4)",
        }}
      />
      
      {/* Этапы */}
      <div className="space-y-10 md:space-y-14 pb-12">
        {stages.map((stage, index) => {
          const isVisible = visibleStages.has(index);
          const isLeft = stage.side === "left";
          const isLast = index === stages.length - 1;

          return (
            <div
              key={stage.number}
              ref={(el) => {
                stageRefs.current[index] = el;
                if (isLast) {
                  lastStageRef.current = el;
                }
              }}
              className={`group relative flex items-center ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Карточка с текстом */}
              <div
                className={`w-full transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-x-0 translate-y-0"
                    : `opacity-0 ${
                        isLeft
                          ? "-translate-x-12 translate-y-8"
                          : "translate-x-12 translate-y-8"
                      }`
                } ${isLeft ? "md:w-[45%] md:pr-8" : "md:w-[45%] md:pl-8"}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="rounded-lg border border-[#c7afa2]/20 bg-[#1a1a1c]/40 p-4 backdrop-blur-sm transition-all duration-300 hover:border-[#c7afa2]/40 hover:bg-[#1a1a1c]/60 hover:shadow-lg hover:shadow-[#c7afa2]/10 md:p-5">
                  <p className="text-sm leading-relaxed text-[#EAEAEA]/90 md:text-base lg:text-lg">
                    {stage.title}
                  </p>
                </div>
              </div>

              {/* Круг с номером - улучшенный дизайн */}
              <div
                className={`absolute left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#c7afa2] bg-[#0E0E0F] shadow-lg shadow-[#c7afa2]/20 transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-50"
                }`}
                style={{ 
                  transitionDelay: `${index * 80 + 200}ms`,
                }}
              >
                {/* Внутренний круг с градиентом */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#c7afa2]/20 to-transparent" />
                <span className="relative text-lg font-bold text-[#c7afa2] md:text-xl">
                  {stage.number}
                </span>
                
                {/* Пульсирующее кольцо при появлении */}
                {isVisible && (
                  <div className="absolute inset-0 animate-ping rounded-full border-2 border-[#c7afa2] opacity-20" />
                )}
              </div>

              {/* Пустое место для симметрии */}
              <div className={`hidden md:block ${isLeft ? "md:w-[45%] md:pl-8" : "md:w-[45%] md:pr-8"}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StagesAnimation;

