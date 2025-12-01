import StagesAnimation from "./StagesAnimation";

const stages = [
  {
    number: 1,
    title: "Заключение договора.",
    side: "left" as const,
  },
  {
    number: 2,
    title: "Заполнение технического задания с подробным описанием пожеланий по будущему интерьеру.",
    side: "right" as const,
  },
  {
    number: 3,
    title: "Обмерные работы лазерным дальномером с фото/видеофиксацией текущего объекта.",
    side: "left" as const,
  },
  {
    number: 4,
    title: "Разработка планировочных решений в количестве 3-5 в зависимости от площади. Расположение всех предметов с учетом эргономики и функциональных зон.",
    side: "right" as const,
  },
  {
    number: 5,
    title: "Разработка 3D визуализаций по каждому помещению. (Наглядное представление того, как будет выглядеть интерьер после реализации под разными углами). Ключевой инструмент для понимания заказчиком результата.",
    side: "left" as const,
  },
  {
    number: 6,
    title: "Разработка комплекта чертежей со спецификацией чистовых отделочных материалов и мебели.",
    side: "right" as const,
  },
  {
    number: 7,
    title: "Предварительный просмотр проекта и согласование расположения розеток/выключателей.",
    side: "left" as const,
  },
  {
    number: 8,
    title: "Корректировка. *по необходимости",
    side: "right" as const,
  },
  {
    number: 9,
    title: "Сдача проекта и презентация виртуального тура (360).",
    side: "left" as const,
  },
];

const Stages = () => {
  return (
    <section className="w-full bg-[#0E0E0F] py-16 text-[#EAEAEA]">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold uppercase tracking-[0.15em] md:text-4xl lg:text-5xl">
          Этапы
        </h2>
        
        <StagesAnimation stages={stages} />
      </div>
    </section>
  );
};

export default Stages;

