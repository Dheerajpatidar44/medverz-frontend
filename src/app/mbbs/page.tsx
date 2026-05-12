'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { mbbsData } from '@/data/mbbsData';
import { Globe2, GraduationCap, ArrowRight, Star, Users } from 'lucide-react';

const DestinationsPortal = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/mbbs-hero.png"
          alt="MBBS Abroad"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/40 to-white/10 z-10" />
        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md px-4 py-2 rounded-full text-white font-bold text-xs uppercase tracking-widest border border-white/20">
              <Globe2 size={16} />
              Global Medical Career
            </span>
            <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight">
              Top Destinations for <br/> <span className="text-primary-light">MBBS Abroad</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-medium">
              Start your medical journey with world-class education, global recognition, and affordable fees. Choose your dream destination today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {mbbsData.map((country, index) => (
              <motion.div
                key={country.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative"
              >
                <Link href={`/mbbs/${country.slug}`}>
                  <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden border border-gray-100 bg-gray-50 transition-all duration-500 group-hover:border-primary/30 group-hover:-translate-y-2">
                    {/* Background Image */}
                    <Image 
                      src={country.image}
                      alt={country.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    
                    {/* Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent opacity-90" />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-40 transition-opacity duration-500" />

                    {/* Flag Overlay */}
                    {country.flag && (
                      <div className="absolute top-6 right-6 w-10 h-10 rounded-full border-2 border-white/50 overflow-hidden z-20 shadow-xl">
                        <Image src={country.flag} alt={`${country.name} flag`} fill className="object-cover" />
                      </div>
                    )}

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 w-full p-10 space-y-3 z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-primary/90 backdrop-blur-md text-white text-[9px] font-black px-3 py-1 rounded-md uppercase tracking-widest">
                          Popular Choice
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-primary-light transition-colors duration-500 leading-tight">
                        MBBS in <br />
                        <span className="text-white">{country.name}</span>
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-1/2 left-0 -translate-x-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 translate-x-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6 text-center space-y-12">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">
            Why Choose Medverz for Your Global Career?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: GraduationCap, title: 'Expert Counseling', desc: '1-on-1 personalized guidance' },
              { icon: Globe2, title: 'Global Options', desc: 'Top universities in 10+ countries' },
              { icon: Users, title: '5000+ Students', desc: 'Successfully placed worldwide' },
              { icon: Star, title: 'End-to-End Support', desc: 'Admission to hostel settlement' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-primary shadow-sm">
                  <item.icon size={32} />
                </div>
                <h4 className="font-bold text-gray-900">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default DestinationsPortal;
