'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageSquareQuote } from 'lucide-react';

const testimonials = [
  '/images/testimonials/t1.jpeg',
  '/images/testimonials/t2.jpeg',
  '/images/testimonials/t3.jpeg',
  '/images/testimonials/t4.jpeg',
  '/images/testimonials/t5.jpeg',
  '/images/testimonials/t6.jpeg',
  '/images/testimonials/t7.jpeg',
  '/images/testimonials/t8.jpeg',
  '/images/testimonials/t9.jpeg',
  '/images/testimonials/t10.jpeg',
  '/images/testimonials/t11.jpeg',
];

// Duplicate the array to create the infinite loop effect
const doubledTestimonials = [...testimonials, ...testimonials];

const TestimonialCarousel = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full text-primary font-bold text-xs uppercase tracking-widest">
            <MessageSquareQuote size={16} />
            Testimonials
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            What Our <span className="text-primary">Students Say</span>
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap py-4">
          {doubledTestimonials.map((img, index) => (
            <div 
              key={index} 
              className="mx-4 flex-shrink-0 w-[280px] md:w-[350px] aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl border-4 border-white group"
            >
              <Image
                src={img}
                alt={`Testimonial ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 280px, 350px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
