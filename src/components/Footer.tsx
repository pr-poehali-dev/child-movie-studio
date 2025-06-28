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

          {/* Social Links */}
          <div className="text-center">
            <h3 className="font-oswald text-lg font-bold text-cinema-gold mb-4">
              ПРИСОЕДИНЯЙТЕСЬ К НАМ
            </h3>
            <a
              href="https://t.me/ChuvachokProduction"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 px-6 py-3 rounded-lg transition-colors"
            >
              <Icon name="MessageCircle" size={20} />
              <span>Telegram канал</span>
            </a>
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
