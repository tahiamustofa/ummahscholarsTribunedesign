import React, { useState, useEffect } from 'react';


const SliderSwipper = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      id: 1,
      category: "PEST PROBLEM? WE CAN HELP.",
      title: "Targeted Pest Control",
      description: "Laser-focused pest treatments using industry-leading technology rid your home of pests quickly and effectively.",
      buttonText: "GET PEST CONTROL",
      image: "/img/craft.png"
    },
    {
      id: 2,
      category: "SEASONAL PEST PROTECTION",
      title: "Mosquito Control",
      description: "Take back your yard. Orkin's seasonal mosquito control service targets where mosquitoes breed around your home.",
      buttonText: "PROTECT YOUR YARD",
      image: "/img/craft.png"
    },
    {
      id: 3,
      category: "KEEP YOUR HOME PEST FREE ALL YEAR-ROUND",
      title: "Preventative Pest Control",
      description: "Our proactive prevention services keeps your home safe from invasion across all seasons and all homes.",
      buttonText: "LEARN MORE",
      image: "/img/pic2.avif"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="relative w-full h-screen flex bg-gray-100">

      {/* Left Side: Content + Pagination */}
      <div className="w-1/2 flex">
        {/* Vertical Pagination */}
        <div className="w-16 bg-white flex flex-col items-center justify-center border-r border-gray-200 space-y-6">
          {slides.map((_, index) => (
            <button key={index} onClick={() => goToSlide(index)} className="relative flex items-center">
              <div className={`h-16 w-1 transition-all duration-300 ${index === currentSlide ? 'bg-red-600' : 'bg-gray-300 group-hover:bg-gray-400'}`} />
              <div className={`absolute left-4 w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-semibold transition-all duration-300
                ${index === currentSlide ? 'bg-red-600 border-red-600 text-white' : 'bg-white border-gray-300 text-gray-500'}`}>
                {index + 1}
              </div>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 flex items-center justify-center px-12 py-16">
          <div className={`max-w-lg transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <div className="text-red-600 text-sm font-semibold tracking-wider mb-4 uppercase">{slides[currentSlide].category}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{slides[currentSlide].title}</h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">{slides[currentSlide].description}</p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-semibold text-sm uppercase transition-all duration-300 hover:scale-105 shadow-lg">{slides[currentSlide].buttonText}</button>
          </div>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="w-1/2 relative h-full overflow-hidden">
        <img 
          src={slides[currentSlide].image} 
          alt={slides[currentSlide].title} 
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${isTransitioning ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-black bg-opacity-20" />
      </div>

      {/* Bottom Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300">
        <div className="h-full bg-red-600 transition-all duration-300" style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} />
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-6 right-6 bg-white bg-opacity-90 px-4 py-2 rounded-full shadow-lg flex items-center text-sm font-medium">
        <span className="text-red-600 font-bold">{String(currentSlide + 1).padStart(2,'0')}</span>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">{String(slides.length).padStart(2,'0')}</span>
      </div>

    </div>
  );
};

export default SliderSwipper;
