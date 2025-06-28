import Icon from "@/components/ui/icon";

const projects = [
  {
    title: "Жаба поедаба",
    genre: "Триллер",
    description:
      "Психологический триллер о загадочных событиях в маленьком городке",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
    year: "2024",
    status: "В производстве",
  },
  {
    title: "Граф Табуреткин",
    genre: "Комедия",
    description: "Короткометражная комедия о приключениях эксцентричного графа",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    year: "2023",
    status: "Завершён",
  },
  {
    title: "Король фон Чарли",
    genre: "Комедийный сериал",
    description: "Весёлые приключения королевского пуделя и его друзей",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=600&fit=crop",
    year: "2024",
    status: "1 сезон",
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
              className="group relative bg-cinema-gray/50 rounded-lg overflow-hidden hover:cinema-glow transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cinema-black via-transparent to-transparent opacity-80" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-cinema-gold text-sm font-medium px-3 py-1 bg-cinema-gold/20 rounded-full">
                    {project.genre}
                  </span>
                  <span className="text-white/70 text-sm">{project.year}</span>
                </div>

                <h3 className="font-oswald text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-white/80 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-cinema-gold text-sm font-medium">
                    {project.status}
                  </span>
                  <button className="flex items-center space-x-2 text-white hover:text-cinema-gold transition-colors">
                    <span className="text-sm">Подробнее</span>
                    <Icon name="ArrowRight" size={16} />
                  </button>
                </div>
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
