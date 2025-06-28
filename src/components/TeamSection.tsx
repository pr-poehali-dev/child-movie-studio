import Icon from "@/components/ui/icon";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  isFounder?: boolean;
}

const teamMembers: TeamMember[] = [
  {
    name: "Волкова Шура",
    role: "Основатель, режиссёр, актриса",
    description: "Творческий лидер студии, воплощает идеи в жизнь",
    isFounder: true,
  },
  {
    name: "Рощин Саша",
    role: "Основатель, актёр",
    description: "Сооснователь студии, талантливый актёр",
    isFounder: true,
  },
  {
    name: "Миша Горковенко",
    role: "Актёр, будущий режиссёр",
    description: "Перспективный актёр с режиссёрскими амбициями",
  },
  {
    name: "Влад Горковенко",
    role: "Актёр",
    description: "Брат Миши, яркий актёр команды",
  },
  {
    name: "Тимофей Щур",
    role: "Оператор, актёр",
    description: "Самый старший участник, мастер операторского искусства",
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-cinema-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-4">
            Наша команда
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Талантливые мечтатели, которые превращают идеи в незабываемые
            истории.
            <br />
            <span className="text-cinema-gold font-medium">
              Наша страсть к кино — это топливо для создания шедевров!
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-cinema-black border border-cinema-gold/20 rounded-lg p-6 hover:border-cinema-gold/40 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-cinema-gold/10 rounded-full flex items-center justify-center group-hover:bg-cinema-gold/20 transition-colors">
                  <Icon name="User" size={24} className="text-cinema-gold" />
                  {member.isFounder && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-cinema-gold rounded-full flex items-center justify-center">
                      <Icon
                        name="Crown"
                        size={12}
                        className="text-cinema-black"
                      />
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-oswald text-xl font-semibold text-white">
                    {member.name}
                  </h3>
                  {member.isFounder && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cinema-gold/20 text-cinema-gold">
                      Основатель
                    </span>
                  )}
                </div>
              </div>

              <p className="text-cinema-gold font-medium mb-2">{member.role}</p>
              <p className="text-white/70 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
