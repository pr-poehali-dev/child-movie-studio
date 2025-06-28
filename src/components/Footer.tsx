import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-cinema-black border-t border-cinema-gold/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-cinema-gold rounded-full flex items-center justify-center">
                <Icon name="Film" size={20} className="text-cinema-black" />
              </div>
              <span className="font-oswald text-xl font-bold text-cinema-gold">
                Чувачок Продакшн
              </span>
            </div>
            <p className="text-white/70 mb-4">
              Детская киностудия полного цикла. Создаём качественный контент для
              молодого поколения.
            </p>
          </div>
        </div>

        <div className="border-t border-cinema-gold/20 mt-8 pt-8 text-center">
          <p className="text-white/50">
            © 2024 Чувачок Продакшн. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
