'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Star, ArrowRight, Building2, BookOpen } from 'lucide-react';
import { Country } from '@/data/mbbsData';

interface CountryContentProps {
  country: Country;
}

const CountryContent: React.FC<CountryContentProps> = ({ country }) => {
  return (
    <main className="min-h-screen bg-white">
      {/* Country Header */}
      <section className="relative py-24 overflow-hidden min-h-[60vh] flex items-center">
        <Image 
          src="/mbbs-hero.png"
          alt={country.name}
          fill
          className="object-cover opacity-10 z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent z-10" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 -z-0 opacity-50" />
        <div className="container mx-auto px-6 md:px-12 lg:px-28 relative z-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <nav className="flex items-center gap-2 text-sm font-bold text-gray-400">
                <Link href="/mbbs" className="hover:text-primary transition-colors">MBBS ABROAD</Link>
                <span>/</span>
                <span className="text-primary">{country.name.toUpperCase()}</span>
              </nav>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight flex flex-wrap items-center gap-4">
                Top Medical Universities in <span className="text-primary">{country.name}</span>
                {country.flag && (
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-white overflow-hidden flex-shrink-0">
                    <Image src={country.flag} alt={country.name} width={64} height={64} className="object-cover" />
                  </div>
                )}
              </h1>
              <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
                Explore the best medical institutions in {country.name}. High-quality education, modern labs, and globally recognized degrees await you.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-100">
                  <Star size={20} className="text-yellow-400" fill="currentColor" />
                  <span className="text-gray-700 font-bold">WHO & NMC Recognized</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-100">
                  <BookOpen size={20} className="text-primary" />
                  <span className="text-gray-700 font-bold">100% English Medium</span>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden border-8 border-white">
                <Image 
                  src={country.image}
                  alt={country.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-3xl">
                 <p className="text-3xl font-extrabold">{country.uniCount}+</p>
                 <p className="text-xs font-bold uppercase tracking-widest">Medical Universities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* University Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          {country.universities.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {country.universities.map((uni, index) => (
                <motion.div
                  key={uni.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="group"
                >
                  <Link href={`/mbbs/${country.slug}/${uni.slug}`}>
                    <div className="relative rounded-3xl overflow-hidden bg-white border border-gray-100 transition-all duration-500 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 group h-full flex flex-col">
                      <div className="relative h-44 overflow-hidden">
                        <Image 
                          src={uni.image}
                          alt={uni.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-primary font-bold text-[10px] shadow-sm">
                          {uni.ranking}
                        </div>
                      </div>
                      
                      <div className="p-5 flex flex-col flex-1 space-y-4">
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-1.5 text-primary font-bold text-[10px] uppercase tracking-wider">
                            <MapPin size={12} />
                            {uni.location}
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 leading-snug min-h-[3rem]">
                            {uni.name}
                          </h3>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                             <p className="text-[9px] text-gray-400 font-bold uppercase tracking-tight">Tuition Fee</p>
                             <p className="text-gray-900 font-bold text-xs">{uni.fees.tuition}</p>
                          </div>
                          <div className="bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                             <p className="text-[9px] text-gray-400 font-bold uppercase tracking-tight">Duration</p>
                             <p className="text-gray-900 font-bold text-xs">{uni.duration}</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
                          <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-500">
                             <Building2 size={14} className="text-primary" />
                             Est. {uni.established}
                          </div>
                          <div className="inline-flex items-center gap-1.5 text-primary font-bold text-[11px]">
                            Details
                            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center space-y-6">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto text-gray-300">
                 <Building2 size={48} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900">Universities Coming Soon</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  We are currently updating our database with the top-rated universities for {country.name}. Stay tuned for detailed info!
                </p>
              </div>
              <Link href="/mbbs" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                <ArrowRight size={20} className="rotate-180" />
                Back to Destinations
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default CountryContent;
