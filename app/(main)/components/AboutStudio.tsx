import Image from "next/image";
import AboutStudioAnimation from "./AboutStudioAnimation";

const AboutStudio = () => {
  const textContent = (
    <div className="space-y-8">
      {/* Заголовок */}
      <h1 
        className="text-4xl font-semibold leading-[1.1] md:text-5xl lg:text-6xl"
        style={{ letterSpacing: '-0.01em' }}
      >
        Профессиональный дизайн интерьеров: ваш комфорт — моя экспертиза.
      </h1>

      {/* Вступительный текст */}
      <p className="text-lg leading-relaxed text-[#EAEAEA]/90 md:text-xl">
        Привет! Я Кристина Зыль, дизайнер интерьеров с опытом более 10 лет. Создаю функциональные и стильные пространства для дома и бизнеса. Мое профильное образование — это надежный фундамент, а многолетний опыт — инструмент для воплощения ваших идей без потерь времени, нервов и бюджета.
      </p>

      {/* Список услуг */}
      <div className="space-y-5 pt-4">
        {[
          {
            title: "Анализ ваших потребностей",
            description: "Учитываю ваш образ жизни, привычки и мечты, чтобы интерьер работал именно на вас."
          },
          {
            title: "Детальный дизайн-проект",
            description: "Четкие чертежи, 3D-визуализация, подбор материалов и составление ведомостей. Минимизирую ошибки и переделки."
          },
          {
            title: "Контроль исполнения",
            description: "Слежу за соответствием проекта на всех этапах реализации."
          },
          {
            title: "Экономия ресурсов",
            description: "Оптимизирую расходы и сроки без потерь качества."
          }
        ].map((item, index) => (
          <div key={index} className="flex gap-4">
            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
              <div className="h-1.5 w-1.5 rounded-full bg-[#C7AFA2]" />
            </div>
            <div className="flex-1">
              <h3 className="mb-1.5 text-base font-semibold md:text-lg">{item.title}</h3>
              <p className="text-sm leading-relaxed text-[#EAEAEA]/75 md:text-base">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Кнопка */}
      <div className="pt-6">
        <button className="group relative border border-[#EAEAEA]/30 bg-transparent px-10 py-4 text-sm font-semibold uppercase tracking-[0.1em] transition-all duration-300 hover:border-[#C7AFA2] hover:bg-[#C7AFA2]/10">
          <span className="relative z-10">Подробнее</span>
          <div className="absolute inset-0 bg-[#C7AFA2]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </button>
      </div>
    </div>
  );

  const imageContent = (
    <div className="relative h-full w-full">
      {/* Изображение */}
      <div className="relative h-full w-full">
        <Image
          src="/about/designer.jpg"
          alt="Кристина Зыль - дизайнер интерьеров"
          fill
          className="object-cover object-center"
          sizes="(min-width: 768px) 45vw, 100vw"
          priority
        />
      </div>
      
      {/* Плавная градация затемнения слева */}
      <div 
        className="absolute left-0 top-0 z-10 hidden h-full w-[45%] bg-gradient-to-r from-[#0E0E0F] via-[#0E0E0F]/60 to-transparent md:block"
      />
      
      {/* Плавная градация затемнения справа */}
      <div 
        className="absolute right-0 top-0 z-10 hidden h-full w-[20%] bg-gradient-to-l from-[#0E0E0F]/80 via-[#0E0E0F]/40 to-transparent md:block"
      />
    </div>
  );

  return (
    <AboutStudioAnimation textContent={textContent} imageContent={imageContent} />
  );
};

export default AboutStudio;
