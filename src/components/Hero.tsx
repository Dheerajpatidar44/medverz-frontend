'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "https://media.istockphoto.com/id/958946262/photo/medical.jpg?s=612x612&w=0&k=20&c=7CAjVNqI5jhg47roxxI05JWacBX5FUtGIRPM5x5aa4U=",
    title: "Study MBBS Abroad 2026",
    description: "Start your medical journey in 2026 with admission to the world's most prestigious medical universities. Expert guidance at every step."
  },
  {
    image: "https://media.istockphoto.com/id/2150778352/photo/global-business-education-international-studies-and-language-learning-converge-in-the-iconic.jpg?s=612x612&w=0&k=20&c=FMKmSojb77RHBXcSl7NKdu8Ma4IcDeoi_wUUzZLSXP8=",
    title: "Doctors Begin Here",
    description: "Your dream of becoming a doctor starts with the right foundation. We help you choose the best medical programs tailored to your goals."
  },
  {
    image: "https://media.istockphoto.com/id/1077219348/photo/abroad-international-europe-education-knowledge-learning-study-in-france-ideas-graduation.jpg?s=612x612&w=0&k=20&c=XAzx2gkiIVFh0Ev_K8n9xbhrlAz7JXwRt3YDdEDEjs8=",
    title: "Work Abroad Supports",
    description: "Career opportunities don't stop at graduation. Explore global job placements and work abroad support for medical professionals."
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <section className="relative h-auto aspect-[4/5] sm:h-[450px] md:h-[550px] lg:h-[600px] w-full overflow-hidden bg-gray-900">
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image 
              src={slides[current].image}
              alt={slides[current].title}
              fill
              className="object-cover object-center brightness-[0.7]"
              priority
            />
          </div>

          {/* Content Overlay */}
          <div className="relative h-full container mx-auto px-6 md:px-20 lg:px-28 flex flex-col items-center justify-center sm:pb-12 text-center z-10">
            <div className="max-w-4xl text-white">
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 md:mb-8 drop-shadow-xl"
              >
                {slides[current].title}
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-base sm:text-lg md:text-xl text-white/95 mb-8 md:mb-12 max-w-2xl mx-auto font-medium drop-shadow-md"
              >
                {slides[current].description}
              </motion.p>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('open-lead-popup'))}
                  className="bg-primary text-white px-8 py-3.5 md:px-12 md:py-5 rounded-md font-bold text-lg md:text-xl hover:bg-primary-dark transition-all shadow-2xl hover:shadow-primary/20 active:scale-95"
                >
                  Get Started
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all hidden"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all hidden"
      >
        <ChevronRight size={32} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 md:h-3 transition-all duration-300 rounded-full ${
              current === index ? 'w-8 md:w-12 bg-primary' : 'w-2 md:w-3 bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
