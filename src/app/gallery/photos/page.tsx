'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '@/components/PageHero';
import { Maximize2, X, Camera } from 'lucide-react';

const photoGallery = [
  { id: 1, category: 'Campus', image: '/images/gallery/gallery1.jpeg', title: 'Medical University Life' },
  { id: 2, category: 'Students', image: '/images/gallery/gallery2.jpeg', title: 'Successful Students' },
  { id: 3, category: 'Events', image: '/images/gallery/gallery3.jpeg', title: 'Medverz Gathering' },
  { id: 4, category: 'Campus', image: '/images/gallery/gallery4.jpeg', title: 'Modern Facilities' },
  { id: 5, category: 'Students', image: '/images/gallery/gallery5.jpeg', title: 'Clinical Training' },
  { id: 6, category: 'Events', image: '/images/gallery/gallery6.jpeg', title: 'Career Seminar' },
  { id: 7, category: 'Campus', image: '/images/gallery/gallery7.jpeg', title: 'Academic Excellence' },
  { id: 8, category: 'Students', image: '/images/gallery/gallery8.jpeg', title: 'Future Doctors' },
  { id: 9, category: 'Events', image: '/images/gallery/gallery9.jpeg', title: 'Global Opportunities' },
];

const categories = ['All', 'Campus', 'Students', 'Events'];

const PhotosPage = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = activeTab === 'All' 
    ? photoGallery 
    : photoGallery.filter(item => item.category === activeTab);

  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Photo Gallery" 
        subtitle="Capture moments of clinical excellence and vibrant student life across global medical universities."
        backgroundImage="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-28">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-8 py-3 rounded-full font-bold transition-all border ${
                  activeTab === category 
                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105' 
                    : 'bg-white text-gray-500 border-gray-100 hover:border-primary hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative aspect-square rounded-[2.5rem] overflow-hidden cursor-pointer border border-gray-100 shadow-sm hover:shadow-2xl transition-all"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <span className="text-white font-bold text-lg mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {item.title}
                    </span>
                    <span className="text-primary-light text-xs uppercase tracking-widest font-black translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100">
                    <Maximize2 size={20} />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-gray-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-primary transition-colors p-3 bg-white/10 rounded-full backdrop-blur-md"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={selectedImage} alt="Gallery Preview" fill className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mx-auto rotate-12 group-hover:rotate-0 transition-transform">
              <Camera size={48} />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">Begin Your Medical Journey</h2>
              <p className="text-gray-500 text-lg md:text-xl font-medium">Your path to becoming a global doctor starts with Medverz. Join us today.</p>
            </div>
            <button className="bg-primary text-white px-12 py-5 rounded-full font-black text-lg hover:bg-primary-dark transition-all shadow-2xl shadow-primary/30 active:scale-95 uppercase tracking-widest">
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PhotosPage;
