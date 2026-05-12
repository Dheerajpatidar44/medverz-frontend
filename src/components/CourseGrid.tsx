'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { mbbsData } from '@/data/mbbsData';
import { Globe2, GraduationCap, Calendar, Banknote, ShieldCheck, ArrowRight, Clock } from 'lucide-react';

const CourseGrid = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-28">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full text-primary font-bold text-xs uppercase tracking-widest">
              <Globe2 size={16} />
              Global Destinations
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Top Destinations for <br />
              <span className="text-primary">MBBS Abroad</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Explore the best countries for your medical degree. We help you choose the right university based on your budget and preferences.
            </p>
          </div>
          <Link href="/mbbs" className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group">
            View All Destinations <ArrowRight size={20} />
          </Link>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mbbsData.map((dest, index) => (
            <motion.div 
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/mbbs/${dest.slug}`} className="block bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-primary/20 transition-all duration-500 relative h-full">
                {/* Popular Badge */}
                {dest.uniCount > 10 && (
                  <div className="absolute top-4 left-4 z-20 bg-primary text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}

                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                     <div className="flex items-center gap-2 mb-1">
                        <div className="w-6 h-0.5 bg-primary" />
                        <span className="text-xs font-bold uppercase tracking-widest">{dest.name}</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-extrabold">MBBS in {dest.name}</h3>
                        {dest.flag && (
                          <div className="w-8 h-8 rounded-full border-2 border-white/50 overflow-hidden">
                            <Image src={dest.flag} alt={dest.name} width={32} height={32} className="object-cover" />
                          </div>
                        )}
                     </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Banknote size={16} className="text-primary" />
                      <span className="text-xs font-medium">{dest.startingPrice}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar size={16} className="text-primary" />
                      <span className="text-xs font-medium">Sept Intake</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Clock size={16} className="text-primary" />
                      <span className="text-xs font-medium">5-6 Years</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <ShieldCheck size={16} className="text-primary" />
                      <span className="text-xs font-medium">NMC & WHO</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                    <p className="text-[11px] font-bold text-gray-400 uppercase">{dest.uniCount}+ Top Universities</p>
                    <div className="w-10 h-10 rounded-full bg-primary-light text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 md:hidden flex justify-center">
          <Link href="/mbbs" className="bg-primary text-white px-10 py-4 rounded-full font-bold shadow-lg">
            View All Destinations
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CourseGrid;

