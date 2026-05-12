'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Camera, Play, Image as ImageIcon, Video } from 'lucide-react';

const galleryPhotos = [
  '/images/gallery/gallery1.jpeg',
  '/images/gallery/gallery2.jpeg',
  '/images/gallery/gallery3.jpeg',
  '/images/gallery/gallery4.jpeg',
  '/images/gallery/gallery5.jpeg',
  '/images/gallery/gallery6.jpeg',
  '/images/gallery/gallery7.jpeg',
  '/images/gallery/gallery8.jpeg',
];

const galleryVideos = [
  '/images/gallery/gallery1.mp4',
  '/images/gallery/gallery2.mp4',
  '/images/gallery/gallery3.mp4',
  '/images/gallery/gallery4.mp4',
];

const GallerySection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="gallery">
      <div className="container mx-auto px-6 md:px-12 lg:px-28">

        {/* Main Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full text-primary font-bold text-xs uppercase tracking-widest">
            <Camera size={16} />
            Visual Journey
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Our <span className="text-primary">Vibrant Gallery</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Explore the beautiful moments, successful journeys, and the professional environment that defines Medverz Education.
          </p>
        </div>

        {/* Photos Section */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <ImageIcon size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Memories in Frames</h3>
              <p className="text-sm text-gray-400">Captured success and beautiful milestones</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {galleryPhotos.map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`relative aspect-[4/3] rounded-3xl overflow-hidden group cursor-pointer shadow-xl border-4 border-white ${idx === 0 ? 'md:col-span-2 md:row-span-2 aspect-auto' : ''
                  }`}
              >
                <Image
                  src={src}
                  alt={`Gallery Photo ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Camera size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Videos Section */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <Video size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Moments in Motion</h3>
              <p className="text-sm text-gray-400">Experience the journey through our lenses</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryVideos.map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative aspect-video rounded-[2rem] overflow-hidden group shadow-2xl border-4 border-white bg-black"
              >
                <video
                  src={src}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  muted
                  loop
                  playsInline
                  onMouseOver={(e) => (e.target as HTMLVideoElement).play()}
                  onMouseOut={(e) => {
                    const video = e.target as HTMLVideoElement;
                    video.pause();
                    video.currentTime = 0;
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                    <Play size={32} fill="currentColor" className="ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <p className="text-white font-bold">Experience Medverz #{idx + 1}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GallerySection;
