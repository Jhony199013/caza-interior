import Image from "next/image";
import AboutStudioAnimation from "./AboutStudioAnimation";

const AboutStudio = () => {
  const textContent = (
    <div className="w-full space-y-6">
              {/* Заголовок */}
              <h1 
                className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl"
                style={{ letterSpacing: '-0.01em' }}
              >
                Профессиональный дизайн интерьеров: ваш комфорт — моя экспертиза.
              </h1>

              {/* Вступительный текст */}
              <div className="space-y-4 text-base leading-relaxed md:text-lg">
                <p>
                  Привет! Я Кристина Зыль, дизайнер интерьеров с опытом более 10 лет. Создаю функциональные и стильные пространства для дома и бизнеса. Мое профильное образование — это надежный фундамент, а многолетний опыт — инструмент для воплощения ваших идей без потерь времени, нервов и бюджета.
                </p>
              </div>

              {/* Список услуг */}
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center text-[#C7AFA2]">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Анализ ваших потребностей</h3>
                    <p className="text-sm leading-relaxed text-[#EAEAEA]/80 md:text-base">
                      Учитываю ваш образ жизни, привычки и мечты, чтобы интерьер работал именно на вас.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center text-[#C7AFA2]">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Детальный дизайн-проект</h3>
                    <p className="text-sm leading-relaxed text-[#EAEAEA]/80 md:text-base">
                      Четкие чертежи, 3D-визуализация, подбор материалов и составление ведомостей. Минимизирую ошибки и переделки.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center text-[#C7AFA2]">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Контроль исполнения</h3>
                    <p className="text-sm leading-relaxed text-[#EAEAEA]/80 md:text-base">
                      Слежу за соответствием проекта на всех этапах реализации.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center text-[#C7AFA2]">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Экономия ресурсов</h3>
                    <p className="text-sm leading-relaxed text-[#EAEAEA]/80 md:text-base">
                      Оптимизирую расходы и сроки без потерь качества.
                    </p>
                  </div>
                </div>
              </div>

              {/* Кнопка */}
              <div className="mt-10">
                <button className="border border-[#EAEAEA] bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-colors hover:bg-[#EAEAEA] hover:text-[#0E0E0F]">
                  Подробнее
                </button>
              </div>
            </div>
  );

  const imageContent = (
    <>
      {/* Изображение */}
      <div className="relative h-full w-full">
        <Image
          src="/about/designer.jpg"
          alt="Кристина Зыль - дизайнер интерьеров"
          fill
          className="object-cover object-center md:object-[70%_center]"
          sizes="(min-width: 768px) 50vw, 100vw"
          priority
        />
        {/* Затемнение фото */}
        <div className="absolute inset-0 bg-[#0E0E0F]/30" />
        {/* Легкое затемнение для глубины */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0E0E0F]/20" />
      </div>
      
      {/* Градация затемнения слева на фото - только на десктопе */}
      <div 
        className="absolute left-0 top-0 z-20 hidden h-full w-[50%] md:block"
        style={{
          background: 'linear-gradient(to bottom right, rgba(14, 14, 15, 0.95) 0%, rgba(14, 14, 15, 0.85) 20%, rgba(14, 14, 15, 0.7) 40%, rgba(14, 14, 15, 0.5) 60%, rgba(14, 14, 15, 0.3) 80%, transparent 100%)',
          clipPath: 'polygon(0 0, 50% 0, 30% 100%, 0 100%)',
        }}
      />
      
      {/* Дополнительная градация затемнения слева */}
      <div 
        className="absolute left-0 top-0 z-20 hidden h-full w-[40%] bg-gradient-to-r from-[#0E0E0F] via-[#0E0E0F]/80 to-transparent md:block"
      />
    </>
  );

  return (
    <AboutStudioAnimation textContent={textContent} imageContent={imageContent} />
  );
};

export default AboutStudio;

