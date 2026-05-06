import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageCarousel({ images, title, showIndicator = true }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef(null);
  
  const minSwipeDistance = 50;

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlay(false);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <div className="w-full">
      <div 
        ref={containerRef}
        className="relative w-full bg-gray-100 overflow-hidden rounded-lg shadow-lg"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Images Container */}
        <div className="relative w-full aspect-[3/4] md:aspect-video cursor-grab active:cursor-grabbing select-none">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${title} - Exemplo ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 select-none pointer-events-none ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
              draggable={false}
            />
          ))}

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-colors"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-colors"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Indicator Text - Only on Mobile */}
          {showIndicator && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 md:hidden">
              <div className="bg-black/50 text-white text-xs px-3 py-1 rounded-full">
                Deslize para ver mais
              </div>
            </div>
          )}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center gap-1.5 py-3 bg-white">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlay(false);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-accent w-6' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
