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
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-28">
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center max-w-4xl mx-auto mb-16 md:mb-20"
        >
          <motion.span 
            variants={itemVariants}
            className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4 block"
          >
            HOW DO WE HELP?
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6"
          >
            Services At Medverz Education
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-500 text-base md:text-lg leading-relaxed px-4"
          >
            An MBBS degree in Russia for Indian students promises an unmatched scope and opportunities. 
            At Medverz Education, we aim to make the best out of your stay and learning abroad with our 
            exclusive services. Because we are there not only for your admission but also for your graduation!
          </motion.p>
        </motion.div>

        {/* Layout Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
          {/* Left Column */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="w-full lg:w-1/3 flex flex-col gap-12 md:gap-20"
          >
            {/* Service 1 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 group cursor-pointer"
            >
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
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 group cursor-pointer"
            >
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
            </motion.div>
          </motion.div>

          {/* Center Image */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
            className="w-full lg:w-1/3 flex justify-center relative"
          >
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gray-50 rounded-full -z-10 blur-3xl opacity-50"></div>
            <div className="relative w-[300px] md:w-[450px] lg:w-[500px]">
              <Image 
                src="/assets/students-hero.png" 
                alt="Medical Students" 
                width={600} 
                height={800} 
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="w-full lg:w-1/3 flex flex-col gap-12 md:gap-20"
          >
            {/* Service 3 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ x: -10 }}
              className="flex flex-col md:flex-row-reverse items-center md:items-start text-center md:text-right gap-6 group cursor-pointer"
            >
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
            </motion.div>

            {/* Service 4 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ x: -10 }}
              className="flex flex-col md:flex-row-reverse items-center md:items-start text-center md:text-right gap-6 group cursor-pointer"
            >
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
