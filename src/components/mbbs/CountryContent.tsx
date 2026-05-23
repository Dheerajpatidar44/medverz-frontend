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
                Study MBBS in <span className="text-primary">{country.name}</span>
                {country.flag && (
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-white shadow-lg overflow-hidden flex-shrink-0">
                    <Image src={country.flag} alt={country.name} width={64} height={64} className="object-cover" />
                  </div>
                )}
              </h1>
              <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl italic font-medium">
                Rus Education - MBBS in {country.name}
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-sm">
                  <Star size={20} className="text-yellow-400" fill="currentColor" />
                  <span className="text-gray-700 font-bold">NMC & WHO Recognized</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-sm">
                  <BookOpen size={20} className="text-primary" />
                  <span className="text-gray-700 font-bold">English Medium</span>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
                <Image 
                  src={country.image}
                  alt={country.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-3xl shadow-xl">
                 <p className="text-3xl font-extrabold">{country.uniCount}+</p>
                 <p className="text-xs font-bold uppercase tracking-widest">Medical Universities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About The Country Section */}
      {country.overview && (
        <section className="py-20 bg-gray-50/50">
          <div className="container mx-auto px-6 lg:px-28">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-bold text-xs uppercase tracking-widest">
                About The Country
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                MBBS in {country.name}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed whitespace-pre-wrap font-medium">
                {country.overview}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Reasons to Study Section */}
      {country.whyStudy && country.whyStudy.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-bold text-xs uppercase tracking-widest">
                  Reasons to Study
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                  Why Choose MBBS in <span className="text-primary">{country.name}</span>?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {country.whyStudy.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-primary/30 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Star size={14} className="text-primary" fill="currentColor" />
                      </div>
                      <span className="text-gray-700 font-bold text-sm leading-tight">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                   <Image 
                     src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000"
                     alt="Medical Education"
                     fill
                     className="object-cover"
                   />
                </div>
                <div className="absolute top-1/2 -right-8 -translate-y-1/2 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Advantages Section */}
      {country.admissionProcess && country.admissionProcess.length > 0 && (
        <section className="py-20 bg-gray-50/50">
          <div className="container mx-auto px-6 lg:px-28">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-bold text-xs uppercase tracking-widest">
                  Advantages
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  What are the advantages of studying MBBS in {country.name} for Indian students?
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {country.admissionProcess.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-5 bg-white rounded-3xl border border-gray-100 shadow-sm">
                    <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0">
                       <ArrowRight size={20} className="text-white" />
                    </div>
                    <span className="text-gray-700 font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* University Grid */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 lg:px-28">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Top Medical Universities</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-bold">
              Top Medical Universities in {country.name} for Indian Students
            </p>
          </div>
          
          {country.universities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {country.universities.map((uni, index) => (
                <motion.div
                  key={uni.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <Link href={`/mbbs/${country.slug}/${uni.slug}`}>
                    <div className="relative rounded-[2rem] overflow-hidden bg-white border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 flex flex-col h-full group">
                      <div className="relative h-44 overflow-hidden">
                        <Image 
                          src={uni.image}
                          alt={uni.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-primary font-bold text-[10px] shadow-sm border border-gray-100">
                          {uni.ranking}
                        </div>
                      </div>
                      
                      <div className="p-5 flex flex-col flex-1 space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-1.5 text-[#3096ba] font-bold text-[10px] uppercase tracking-widest">
                            <MapPin size={12} />
                            {uni.location}
                          </div>
                          <h3 className="text-lg font-extrabold text-[#1e4e79] group-hover:text-primary transition-colors leading-snug min-h-[3.25rem] flex items-center">
                            {uni.name}
                          </h3>
                        </div>

                        <div className="flex flex-col gap-2.5 bg-gray-50/80 p-4 rounded-2xl border border-gray-100/50 mt-1">
                          <div className="flex items-start justify-between gap-4 text-xs">
                            <span className="text-gray-400 font-bold uppercase tracking-wider flex-shrink-0">Tuition Fee</span>
                            <span className="text-gray-900 font-extrabold text-right leading-relaxed">{uni.fees.tuition}</span>
                          </div>
                          <div className="h-px bg-gray-200/50 w-full" />
                          <div className="flex items-start justify-between gap-4 text-xs">
                            <span className="text-gray-400 font-bold uppercase tracking-wider flex-shrink-0">Duration</span>
                            <span className="text-gray-900 font-extrabold text-right leading-relaxed">{uni.duration}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                          <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                             <Building2 size={14} className="text-[#3096ba]" />
                             Est. {uni.established}
                          </div>
                          <div className="inline-flex items-center gap-1.5 text-[#3096ba] font-bold text-xs group-hover:translate-x-1 transition-transform">
                            Details
                            <ArrowRight size={16} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center space-y-6 bg-gray-50 rounded-[3rem] border border-gray-100">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto text-gray-300 shadow-sm">
                 <Building2 size={48} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Universities Coming Soon</h3>
                <p className="text-gray-500 max-w-md mx-auto font-medium">
                  We are currently updating our database with the top-rated universities for {country.name}.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Eligibility Section */}
      {country.eligibilityCriteria && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-28">
            <div className="max-w-5xl mx-auto bg-gray-50 rounded-[4rem] p-8 md:p-16 relative overflow-hidden shadow-sm border border-gray-100">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-bold text-xs uppercase tracking-widest">
                    Eligibility
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                    What is the Eligibility Criteria for MBBS in {country.name}?
                  </h2>
                  <p className="text-gray-500 font-bold">To be eligible to apply for MBBS in {country.name}, the students must satisfy all the given conditions:</p>
                  <div className="space-y-6">
                    {country.eligibilityCriteria.map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 font-bold leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hidden lg:block">
                   <div className="relative aspect-square bg-white rounded-full p-12 shadow-inner border-8 border-white">
                      <div className="w-full h-full rounded-full border-4 border-dashed border-primary/20 flex items-center justify-center animate-spin-slow">
                         <GraduationCap size={80} className="text-primary/20" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                         <GraduationCap size={120} className="text-primary drop-shadow-lg" />
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {country.faqs && country.faqs.length > 0 && (
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-28">
            <div className="max-w-4xl mx-auto space-y-16">
              <div className="text-center space-y-4">
                <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-bold text-xs uppercase tracking-widest">
                  FAQ
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                  Common Questions
                </h2>
              </div>
              <div className="grid gap-6">
                {country.faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex gap-3">
                      <span className="text-primary">Q.</span> {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed pl-7 border-l-2 border-primary/20 italic font-medium">
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default CountryContent;
