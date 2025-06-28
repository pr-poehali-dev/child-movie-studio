import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cinema-black/90 backdrop-blur-sm border-b border-cinema-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-cinema-gold rounded-full flex items-center justify-center">
              <Icon name="Film" size={20} className="text-cinema-black" />
            </div>
            <span className="font-oswald text-xl font-bold text-cinema-gold">
              Чувачок Продакшн
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-cinema-gold hover:text-white transition-colors font-medium"
            >
              Главная
            </a>
            <a
              href="/history"
              className="text-white hover:text-cinema-gold transition-colors"
            >
              История
            </a>
            <a
              href="/team"
              className="text-white hover:text-cinema-gold transition-colors"
            >
              Участники
            </a>
            <a
              href="/films"
              className="text-white hover:text-cinema-gold transition-colors"
            >
              Фильмы
            </a>
            <a
              href="/news"
              className="text-white hover:text-cinema-gold transition-colors"
            >
              Новости
            </a>
            <a
              href="https://youtube.com/@chuvachokproduction?si=H5OAOz3nmS1673lK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cinema-gold transition-colors flex items-center space-x-1"
            >
              <Icon name="Youtube" size={16} />
              <span>YouTube</span>
            </a>
          </nav>

          <button className="md:hidden text-cinema-gold">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
