'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ClipboardCheck, Send, Microscope, Building2 } from 'lucide-react';

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  } as const;

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  } as const;

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden relative">
      {/* Playful background dots */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      <div className="container mx-auto px-6 md:px-12 lg:px-28">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
            HOW DO WE HELP?
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Services At Medverz Education
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed px-4">
            An MBBS degree in Russia for Indian students promises an unmatched scope and opportunities. 
            At Medverz Education, we aim to make the best out of your stay and learning abroad with our 
            exclusive services. Because we are there not only for your admission but also for your graduation!
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12 lg:gap-8 xl:gap-16">
          {/* Left Column */}
          <div className="w-full flex flex-col gap-12 md:gap-20">
            {/* Service 1 */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 group cursor-pointer">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl border-2 border-primary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                  <ClipboardCheck size={32} strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">100% Admission Support</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-sm">
                  From university selection to all the paperwork, we offer you with complete support for your admission.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 group cursor-pointer">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl border-2 border-primary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:-rotate-6">
                  <Send size={32} strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">Visa & Travel Arrangements</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-sm">
                  Heckle free Visa procurement and best fared air travels, get the maximum benefits, throughout the course.
                </p>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="w-full flex justify-center relative">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gray-50 rounded-full -z-10 blur-3xl opacity-50"></div>
            <div className="relative w-[280px] md:w-[380px] lg:w-full max-w-[420px]">
              <Image 
                src="/assets/students-hero.png" 
                alt="Medical Students" 
                width={600} 
                height={800} 
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full flex flex-col gap-12 md:gap-20">
            {/* Service 3 */}
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start text-center md:text-right gap-6 group cursor-pointer">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl border-2 border-primary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                  <Microscope size={32} strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">FMGE/NExT Coaching</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-sm">
                  Attend FMGE/NExT Coaching during your study, within the university and get the best career guidance from the experts.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start text-center md:text-right gap-6 group cursor-pointer">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl border-2 border-primary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:-rotate-6">
                  <Building2 size={32} strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">Hostels, Canteens & more</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-sm">
                  Get comfy hostels, Indian canteens, and many other benefits during your stay in Russia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
