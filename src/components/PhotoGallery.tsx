import Icon from "@/components/ui/icon";

const PhotoGallery = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-5xl font-bold text-cinema-gold mb-4">
            📸 ФОТОГАЛЕРЕЯ
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Моменты со съёмочных площадок и творчество наших зрителей 🎨
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-cinema-gold/20">
            <div className="aspect-square overflow-hidden">
              <img
                src="https://cdn.poehali.dev/files/2db8109c-4fee-4542-9b96-a3fa43692237.png"
                alt="Жаба пледа"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <p className="text-white/70">Творчество наших зрителей</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-cinema-gold/20">
            <div className="aspect-square overflow-hidden">
              <img
                src="https://cdn.poehali.dev/files/5208716f-e288-4889-9596-649a1eb9d29e.png"
                alt="Королевский пудель"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <p className="text-white/70">Артистическое творчество</p>
            </div>
          </div>
        </div>

        {/* Telegram Invitation */}
        <div className="bg-gradient-to-r from-cinema-gold/10 to-blue-500/10 rounded-xl p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-500/20 p-4 rounded-full">
              <Icon name="Send" size={32} className="text-blue-400" />
            </div>
          </div>

          <h3 className="font-oswald text-3xl font-bold text-white mb-4">
            🎨 ПОДЕЛИТЕСЬ ТВОРЧЕСТВОМ!
          </h3>

          <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
            Присылайте ваши рисунки, поделки и творческие работы в наш Telegram
            канал. Лучшие работы попадут в нашу галерею!
          </p>

          <a
            href="https://t.me/ChuvachokProduction"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center space-x-3"
          >
            <Icon name="MessageCircle" size={20} />
            <span>Перейти в Telegram</span>
          </a>
        </div>

        {/* YouTube Subscription */}
        <div className="bg-gradient-to-r from-red-500/10 to-cinema-gold/10 rounded-xl p-8 text-center mt-8">
          <div className="flex justify-center mb-6">
            <div className="bg-red-500/20 p-4 rounded-full">
              <Icon name="Youtube" size={32} className="text-red-400" />
            </div>
          </div>

          <h3 className="font-oswald text-3xl font-bold text-white mb-4">
            🎬 ПОДПИШИТЕСЬ НА НАШ КАНАЛ!
          </h3>

          <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
            Помогите нам показать детское творчество! Подписывайтесь на наш
            YouTube канал и поддерживайте творческие проекты от детей.
          </p>

          <a
            href="https://youtube.com/@chuvachokproduction?si=H5OAOz3nmS1673l"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center space-x-3"
          >
            <Icon name="Youtube" size={20} />
            <span>Подписаться на канал</span>
          </a>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute left-4 top-1/4 w-6 h-32 bg-cinema-gold/10 hidden lg:block">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-full h-4 border-b border-cinema-gold/20" />
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
