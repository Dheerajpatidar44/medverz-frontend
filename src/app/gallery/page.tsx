'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import { Camera, Video, ArrowRight } from 'lucide-react';

const GalleryPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Our Visual Journey" 
        subtitle="Explore life at Medverz through our lens - capturing moments of excellence and student success across the globe."
        backgroundImage="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Photos Link Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative"
            >
              <Link href="/gallery/photos">
                <div className="relative h-[500px] rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <Image 
                    src="/images/gallery/gallery1.jpeg"
                    alt="Photo Gallery"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent opacity-90" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-12 space-y-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/30">
                      <Camera size={32} />
                    </div>
                    <h2 className="text-4xl font-black text-white leading-tight">Photo <br/> Gallery</h2>
                    <p className="text-gray-300 font-medium">Explore clinical training, campus life, and international student events.</p>
                    <div className="flex items-center gap-2 text-primary-light font-black text-sm uppercase tracking-widest pt-4">
                      View Photos <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Videos Link Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative"
            >
              <Link href="/gallery/videos">
                <div className="relative h-[500px] rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <Image 
                    src="/images/gallery/gallery2.jpeg"
                    alt="Video Gallery"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent opacity-90" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-12 space-y-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/30">
                      <Video size={32} />
                    </div>
                    <h2 className="text-4xl font-black text-white leading-tight">Video <br/> Gallery</h2>
                    <p className="text-gray-300 font-medium">Watch campus tours, student testimonials, and graduation ceremonies.</p>
                    <div className="flex items-center gap-2 text-primary-light font-black text-sm uppercase tracking-widest pt-4">
                      Watch Videos <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-6 text-center">
              <p className="text-2xl md:text-3xl font-bold text-gray-400 italic max-w-4xl mx-auto leading-relaxed">
                "At Medverz, we believe that education is not just about textbooks, but about the experiences that shape you into a professional doctor."
              </p>
          </div>
      </section>
    </main>
  );
};

export default GalleryPage;

