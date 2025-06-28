import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cinema-black/90 backdrop-blur-sm border-b border-cinema-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img
              src="https://cdn.poehali.dev/files/a00ffbc6-52f0-4101-afb6-ed98ac67d41d.jpeg"
              alt="Чувачок Продакшн"
              className="w-8 h-8 object-contain rounded"
            />
            <span className="font-oswald text-xl font-bold text-cinema-gold">
              Чувачок Продакшн
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
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
