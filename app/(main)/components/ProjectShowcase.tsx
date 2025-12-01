import Image from "next/image";

const projects = [
  {
    title: "Москва",
    city: "Москва, Россия",
    year: "2024",
    image: "/photos_main/Height.jpg",
  },
  {
    title: "Санкт-Петербург",
    city: "Санкт-Петербург, Россия",
    year: "2023",
    image: "/photos_main/Munchen.png",
  },
  {
    title: "Сочи",
    city: "Сочи, Россия",
    year: "2025",
    image: "/photos_main/Reply.png",
  },
  {
    title: "Казань",
    city: "Казань, Россия",
    year: "2022",
    image: "/photos_main/Home Alone.png",
  },
];

const ProjectShowcase = () => {
  return (
    <section className="w-full bg-[#0E0E0F] pt-16 text-[#EAEAEA]">
      <div className="grid grid-cols-1 gap-y-24 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.title} className="flex flex-col">
            <div className="group relative w-full overflow-hidden aspect-video">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-black/30 transition duration-700 ease-in-out group-hover:bg-black/55" />
            </div>
            <div className="mt-4 flex flex-col gap-1 pl-[50px]">
              <h4 className="text-2xl font-bold uppercase tracking-[0.15em] md:text-3xl">
                {project.title}
              </h4>
              <p className="text-base font-medium text-[#EAEAEA]/80 md:text-lg">
                {project.year} · {project.city}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;

