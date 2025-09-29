'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const slides = [
  {
    id: 1,
    img: '/img/pic1.jpg',
    title: 'THE ORKIN PROS.',
    subtitle: 'THE BEST IN',
    cta: 'GET A FREE QUOTE',
  },
  {
    id: 2,
    img: '/img/pic2.avif',
    title: 'TARGETED PEST CONTROL',
    subtitle: 'EXPERT LOCAL SERVICE',
    cta: 'FIND MY BRANCH',
  },
  {
    id: 3,
    img: '/img/craft.png',
    title: 'TARGETED PEST CONTROL',
    subtitle: 'EXPERT LOCAL SERVICE',
    cta: 'FIND MY BRANCH',
  }
]

export default function HeroSlider() {
  return (
    <section className="relative w-full h-[80vh] min-h-[520px]">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        speed={1200}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full h-full"
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* === Full background image === */}
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                priority={slide.id === 1}
                style={{ objectFit: 'cover' }}
              />

              {/* === Left-to-right black gradient overlay === */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent" />

              {/* === Text content on left side === */}
              <div className="absolute inset-y-0 left-0 flex flex-col justify-center text-white px-6 md:px-16 max-w-xl">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-3">
                  {slide.title}
                </h1>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                  {slide.subtitle}
                </h2>
                <p className="mb-6 text-lg">Get a personalized quote today.</p>
                <a
                  href="#quote"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded transition-colors duration-300 w-fit"
                >
                  {slide.cta}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper custom style */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #fff;
          width: 44px;
          height: 44px;
          background: rgba(0,0,0,0.35);
          border-radius: 50%;
        }
        .swiper-pagination-bullet {
          background: rgba(255,255,255,0.6);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #fff;
        }
      `}</style>
    </section>
  )
}
