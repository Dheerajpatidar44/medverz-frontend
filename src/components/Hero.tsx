'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "https://media.istockphoto.com/id/958946262/photo/medical.jpg?s=612x612&w=0&k=20&c=7CAjVNqI5jhg47roxxI05JWacBX5FUtGIRPM5x5aa4U=",
    title: "Your Path to Medical Excellence",
    description: "Get access to top medical courses designed for real-world success. Learn from experts and build a strong foundation for your future."
  },
  {
    image: "https://media.istockphoto.com/id/2150778352/photo/global-business-education-international-studies-and-language-learning-converge-in-the-iconic.jpg?s=612x612&w=0&k=20&c=FMKmSojb77RHBXcSl7NKdu8Ma4IcDeoi_wUUzZLSXP8=",
    title: "Global Education Opportunities",
    description: "Explore world-class universities and unlock your potential with our comprehensive study abroad programs."
  },
  {
    image: "https://media.istockphoto.com/id/1077219348/photo/abroad-international-europe-education-knowledge-learning-study-in-france-ideas-graduation.jpg?s=612x612&w=0&k=20&c=XAzx2gkiIVFh0Ev_K8n9xbhrlAz7JXwRt3YDdEDEjs8=",
    title: "Empowering Future Doctors",
    description: "Join thousands of successful students who have transformed their careers through our medical education platform."
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
    <section className="relative h-[500px] md:h-[650px] lg:h-[750px] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
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
          <div className="relative h-full container mx-auto px-6 md:px-20 lg:px-28 flex items-center z-10">
            <div className="max-w-3xl text-white">
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4 md:mb-8"
              >
                {slides[current].title}
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-sm sm:text-xl text-white/90 mb-6 md:mb-12 max-w-xl font-medium"
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
                  className="bg-primary text-white px-6 py-3 md:px-12 md:py-5 rounded-full font-bold text-base md:text-xl hover:bg-primary-dark transition-all shadow-2xl hover:shadow-primary/20 active:scale-95"
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
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all hidden sm:block"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all hidden sm:block"
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
