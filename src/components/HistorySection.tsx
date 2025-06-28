import Icon from "@/components/ui/icon";

interface HistoryMilestone {
  year: string;
  title: string;
  description: string;
  isImportant?: boolean;
}

const historyMilestones: HistoryMilestone[] = [
  {
    year: "2022",
    title: "Основание студии",
    description: "Шура Волкова и Саша Рощин создают 'Чувачок Продакшн'",
    isImportant: true,
  },
  {
    year: "2022",
    title: "Первые проекты",
    description: "Выпуск дебютных короткометражных фильмов",
  },
  {
    year: "2023",
    title: "Расширение команды",
    description: "К студии присоединяются новые талантливые актёры",
  },
  {
    year: "2024",
    title: "Жаба Поедаба",
    description:
      "Запуск первого масштабного фильма студии - психологического триллера",
    isImportant: true,
  },
];

const HistorySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-cinema-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-cinema-gold mb-4">
            📜 История студии
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Невероятный путь от мечты к реальности — история о том, как смелость
            и творчество 🎨
            <br />
            <span className="text-cinema-gold font-medium">
              превращают юных мечтателей в настоящих кинематографистов 🎬
            </span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-cinema-gold/30"></div>

            {historyMilestones.map((milestone, index) => (
              <div
                key={index}
                className="relative flex items-start mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <div
                  className={`
                  relative z-10 w-16 h-16 rounded-full flex items-center justify-center
                  ${
                    milestone.isImportant
                      ? "bg-cinema-gold text-cinema-black"
                      : "bg-gray-700 text-cinema-gold border-2 border-cinema-gold/50"
                  }
                `}
                >
                  <Icon
                    name={milestone.isImportant ? "Star" : "Calendar"}
                    size={20}
                  />
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <div
                    className={`
                    p-6 rounded-lg 
                    ${
                      milestone.isImportant
                        ? "bg-cinema-gold/10 border border-cinema-gold/30"
                        : "bg-gray-800/50 border border-gray-700"
                    }
                  `}
                  >
                    <div className="flex items-center mb-2">
                      <span className="font-oswald text-2xl font-bold text-cinema-gold">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="font-oswald text-xl font-semibold text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {milestone.description}{" "}
                      {milestone.isImportant ? "🎯" : "🎪"}
                    </p>

                    {/* Убираем изображение Жабы Поедабы */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
