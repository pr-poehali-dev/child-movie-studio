import Icon from "@/components/ui/icon";

const projects = [
  {
    title: "Жаба поедаба",
    genre: "Триллер",
    description:
      "Психологический триллер о загадочных событиях в маленьком городке",
    year: "2024",
    status: "Завершён",
    trailerUrl: "https://youtu.be/lWK00Fb6WRk?si=-NLfDs5T4lo3RepK",
  },
  {
    title: "Граф Табуреткин",
    genre: "Комедия",
    description: "Короткометражная комедия о приключениях эксцентричного графа",
    year: "2025",
    status: "Завершён",
    trailerUrl: "https://youtu.be/8WZORFCMgkM?si=BJ1ZuY_KO2LahMhb",
  },
  {
    title: "Король фон Чарли",
    genre: "Комедийный сериал",
    description: "Весёлые приключения королевского пуделя и его друзей",
    year: "2024",
    status: "1 сезон",
    trailerUrl: "https://youtu.be/1_x2crH6r8U?si=Niara-4NQ64-IUIh",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-5xl font-bold text-cinema-gold mb-4">
            НАШИ ПРОЕКТЫ
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Создаём незабываемые истории для юного поколения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-cinema-gray/50 rounded-lg p-6 hover:cinema-glow transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-cinema-gold text-sm font-medium px-3 py-1 bg-cinema-gold/20 rounded-full">
                  {project.genre}
                </span>
                <span className="text-white/70 text-sm">{project.year}</span>
              </div>

              <h3 className="font-oswald text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-white/80 text-sm mb-6">
                {project.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-cinema-gold text-sm font-medium">
                  {project.status}
                </span>
                {project.trailerUrl ? (
                  <a
                    href={project.trailerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Icon name="Play" size={16} />
                    <span className="text-sm font-medium">Трейлер</span>
                  </a>
                ) : (
                  <button className="flex items-center space-x-2 text-white hover:text-cinema-gold transition-colors">
                    <span className="text-sm">Подробнее</span>
                    <Icon name="ArrowRight" size={16} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative film strip */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-40 bg-cinema-gold/10 hidden xl:block">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-full h-4 border-b border-cinema-gold/20" />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
