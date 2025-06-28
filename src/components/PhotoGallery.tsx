import Icon from "@/components/ui/icon";

const PhotoGallery = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-5xl font-bold text-cinema-gold mb-4">
            ФОТОГАЛЕРЕЯ
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Моменты со съёмочных площадок и творчество наших зрителей
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="aspect-square bg-cinema-gray/30 rounded-lg overflow-hidden hover:cinema-glow transition-all duration-300 group"
            >
              <img
                src={`https://images.unsplash.com/photo-${1500000000000 + index * 1000000}?w=400&h=400&fit=crop&crop=faces`}
                alt={`Галерея ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Telegram Invitation */}
        <div className="bg-gradient-to-r from-cinema-gold/10 to-blue-500/10 rounded-xl p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-500/20 p-4 rounded-full">
              <Icon name="Send" size={32} className="text-blue-400" />
            </div>
          </div>

          <h3 className="font-oswald text-3xl font-bold text-white mb-4">
            ПОДЕЛИТЕСЬ ТВОРЧЕСТВОМ!
          </h3>

          <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
            Присылайте ваши рисунки, поделки и творческие работы в наш Telegram
            канал. Лучшие работы попадут в нашу галерею!
          </p>

          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center space-x-3">
            <Icon name="MessageCircle" size={20} />
            <span>Перейти в Telegram</span>
          </button>
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
