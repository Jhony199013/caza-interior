const HeroTitles = () => {
  return (
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
  );
};

export default HeroTitles;




