"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


const CLUBS = [
  {
    id: 1,
    title: "Ummah Scholars part 1 ",
    image: "/1.png",
    video: "https://www.youtube.com/embed/MZbwu3-uz3Y",
  },
  {
    id: 2,
    title: "Westin Website",
    image: "/2.png",
    video: "https://www.youtube.com/embed/MZbwu3-uz3Y",
  },
  {
    id: 3,
    title: "Technology",
    image: "/3.png",
    video: "https://www.youtube.com/embed/MZbwu3-uz3Y",
  },
  {
    id: 4,
    title: "Tech",
    image: "/4.png",
    video: "https://www.youtube.com/embed/MZbwu3-uz3Y",
  },
   {
    id: 5,
    title: "Tech",
    image: "/5.png",
    video: "https://www.youtube.com/embed/MZbwu3-uz3Y",
  },
   {
    id: 6,
    title: "Technology",
    image: "/6.png",
    video: "https://www.youtube.com/embed/MZbwu3-uz3Y",
  },
  {
    id: 7,
    title: "Tech",
    image: "/7.png",
    video: "https://www.youtube.com/embed/MZbwu3-uz3Y",
  },
  {
    id: 8,
    title: "Tech",
    image: "/8.png",
    video: "https://www.youtube.com/embed/MZbwu3-uz3Y",
  },
  {
    id: 9,
    title: "Tech",
    image: "/9.png",
    video: "https://www.youtube.com/embed/MZbwu3-uz3Y",
  },
   {
    id: 10,
    title: "Tech",
    image: "/10.png",
    video: "https://www.youtube.com/embed/MZbwu3-uz3Y",
  },
   {
    id: 11,
    title: "Tech",
    image: "/11.png",
    video: "https://www.youtube.com/embed/MZbwu3-uz3Y",
  },
];

const SliderSwiperVideo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [videoURL, setVideoURL] = useState("");
  const [duration, setDuration] = useState(1200);
  const swiperRef = useRef(null);
  const lastMouseX = useRef(0);
  const lastTime = useRef(Date.now());

  const handleMouseMove = (e) => {
    const currentX = e.clientX;
    const currentTime = Date.now();
    const distance = Math.abs(currentX - lastMouseX.current);
    const timeDiff = currentTime - lastTime.current;
    const velocity = distance / (timeDiff || 1);
    const newDuration = Math.min(Math.max(600, 1800 - velocity * 500), 1800);
    setDuration(newDuration);
    lastMouseX.current = currentX;
    lastTime.current = currentTime;
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleOpenModal = (url) => {
    setVideoURL(url + "?autoplay=1");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setVideoURL("");
  };

  return (
    <div className="w-full bg-white flex flex-col items-center py-8 overflow-hidden">
      {/* Navigation */}
      <div className="w-full  mx-auto flex justify-end gap-3 mb-4 px-4">
        <button onClick={() => swiperRef.current?.slidePrev()} className="p-3 rounded-full border hover:bg-gray-100 transition">
          <ChevronLeft size={20} />
        </button>
        <button onClick={() => swiperRef.current?.slideNext()} className="p-3 rounded-full border hover:bg-gray-100 transition">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Swiper */}
      <div className="w-full px-4 md:px-6">
        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          centeredSlides
          initialSlide={0}
          slidesPerView="auto"
          spaceBetween={10}
          className="w-full !overflow-visible"
        >
          {CLUBS.map((slide, index) => {
            const isActive = activeIndex === index;

            return (
              <SwiperSlide key={slide.id} className="!w-auto !flex items-center">
                <div
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => isActive && handleOpenModal(slide.video)}
                  className={`
                    relative flex-shrink-0 rounded-2xl shadow-md cursor-pointer border overflow-hidden
                    ${isActive ? "w-[320px] md:w-[420px] h-[220px]" : "w-[80px] h-[220px]"}
                    transition-all ease-out
                  `}
                  style={{ transitionDuration: `${duration}ms` }}
                >
                  {/* Slide image */}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform ease-out"
                    style={{
                      transform: isActive ? "scale(1)" : "scale(1.6)",
                      transitionDuration: `${duration + 200}ms`,
                    }}
                  />

                  {/* Overlay color */}
                  <div
                    className={`absolute inset-0 transition-colors duration-[${duration}ms] ease-out`}
                    style={{
                      backgroundColor: isActive ? "transparent" : "rgba(21,110,233,0.6)", // bg-[#156ee299]
                    }}
                  />

                  {/* Play button on active only */}
                  {isActive && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center animate-pulse shadow-lg shadow-white/30">
                        <div className="w-0 h-0 border-l-8 border-l-black border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  )}

                  {/* Horizontal title only on active */}
                  {isActive && (
                    <div
                      className="absolute bottom-3 left-3 right-3 transition-all ease-out"
                      style={{
                        width: "auto",
                        opacity: 1,
                        transform: "translateY(0)",
                        transitionDuration: `${duration}ms`,
                      }}
                    >
                      <h2
                        className="text-white text-base font-semibold bg-[#0d489399] backdrop-blur-sm px-3 py-2 rounded-lg overflow-hidden whitespace-nowrap"
                        style={{ wordSpacing: "normal" }}
                      >
                        {slide.title}
                      </h2>
                    </div>
                  )}

                  {/* Vertical title for inactive slides */}
                  {!isActive && (
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{
                        opacity: 1,
                        transition: `opacity ${duration}ms ease-out`,
                      }}
                    >
                      <h3
                        className="text-white/80 text-sm font-bold "
                        style={{
                          writingMode: "vertical-rl",
                          wordSpacing: "normal",
                          transform: "rotate(180deg)",
                        }}
                      >
                        {slide.title}
                      </h3>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="bg-black rounded-xl overflow-hidden relative max-w-3xl w-full">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-white text-2xl font-bold hover:text-gray-300"
            >
              &times;
            </button>
            <iframe
              width="100%"
              height="450"
              src={videoURL}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default SliderSwiperVideo;
