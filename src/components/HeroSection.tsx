import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden film-grain">
      {/* Background chains */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-20 chain-link"
            style={{
              left: `${15 + i * 10}%`,
              top: `${20 + (i % 2) * 30}%`,
              transform: `rotate(${-20 + i * 5}deg)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-cinema-gold/10 rounded-full cinema-glow mb-6">
            <Icon name="Film" size={48} className="text-cinema-gold" />
          </div>
        </div>

        <h1 className="font-oswald text-6xl md:text-8xl font-bold text-cinema-gold mb-6 animate-fade-in-up">
          ЧУВАЧОК
          <br />
          <span className="text-white">ПРОДАКШН</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/80 mb-12 animate-fade-in-up">
          Детская киностудия полного цикла
          <br />
          <span className="text-cinema-gold font-medium">
            Создаём кино с душой
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up">
          <button className="bg-cinema-gold text-cinema-black px-8 py-4 rounded-lg font-semibold hover:bg-white transition-colors cinema-glow">
            Смотреть фильмы
          </button>
          <button className="border-2 border-cinema-gold text-cinema-gold px-8 py-4 rounded-lg font-semibold hover:bg-cinema-gold hover:text-cinema-black transition-colors">
            О студии
          </button>
        </div>
      </div>

      {/* Film reels decoration */}
      <div className="absolute top-20 right-20 w-16 h-16 border-4 border-cinema-gold/30 rounded-full animate-film-roll hidden lg:block">
        <div className="w-full h-full border-2 border-cinema-gold/20 rounded-full"></div>
      </div>
      <div
        className="absolute bottom-32 left-16 w-12 h-12 border-4 border-cinema-gold/20 rounded-full animate-film-roll hidden lg:block"
        style={{ animationDirection: "reverse", animationDuration: "15s" }}
      >
        <div className="w-full h-full border-2 border-cinema-gold/10 rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;
