'use client';

import React from 'react';
import Image from 'next/image';
import { GraduationCap, Briefcase, Plane, Users, CheckCircle2, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const ExpertiseGrid = () => {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent opacity-50" />
      <div className="container mx-auto px-6 md:px-12 lg:px-28">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block px-3 py-1 bg-orange-50 text-orange-600 text-xs font-bold rounded-md mb-4 tracking-wider uppercase">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Global Opportunities <br />
            <span className="text-gray-900">Curated For You.</span>
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[650px]">

          {/* Left Column: Study Abroad & Why Choose Us */}
          <div className="md:col-span-5 flex flex-col gap-6 h-full">
            {/* Study Abroad Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="relative h-[220px] md:h-1/2 rounded-3xl overflow-hidden group cursor-pointer shadow-lg"
            >
              <Image
                src="/study-abroad.png"
                alt="Study Abroad"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <GraduationCap className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Study MBBS Abroad</h3>
              </div>
            </motion.div>

            {/* Why Choose Us Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="relative h-auto md:h-1/2 bg-[#F8FAFC] rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col justify-center overflow-hidden"
            >
              {/* Background Globe Watermark */}
              <div className="absolute right-[-20px] bottom-[-20px] opacity-5">
                <Globe className="w-64 h-64 text-gray-900" />
              </div>

              <h3 className="text-2xl font-bold text-[#0F172A] mb-8 relative z-10">Why Choose Us?</h3>
              <div className="grid grid-cols-2 gap-y-8 gap-x-4 relative z-10">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="text-blue-600 w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900 leading-none mb-1">1000+</p>
                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Visas Granted</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="text-blue-600 w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900 leading-none mb-1">92%</p>
                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Success Rate</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="text-blue-600 w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900 leading-none mb-1">50+</p>
                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Partner Unis</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="text-blue-600 w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900 leading-none mb-1">24/7</p>
                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Expert Support</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Middle Column: Work Permit (Tall) */}
          <div className="md:col-span-3 h-full">
            <motion.div
              whileHover={{ y: -5 }}
              className="relative h-[300px] md:h-full rounded-3xl overflow-hidden group cursor-pointer shadow-lg"
            >
              <Image
                src="/work-permit.png"
                alt="Work Permit"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="w-10 h-10 bg-slate-700/80 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 shadow-lg border border-white/20">
                  <Briefcase className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Work Permit</h3>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Tourist Visa & Immigration */}
          <div className="md:col-span-4 flex flex-col gap-6 h-full">
            {/* Tourist Visa Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="relative h-[220px] md:h-1/2 rounded-3xl overflow-hidden group cursor-pointer shadow-lg"
            >
              <Image
                src="/tourist-visa.png"
                alt="Tourist Visa"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Plane className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Tourist Visa</h3>
              </div>
            </motion.div>

            {/* Immigration & PR Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="relative h-[220px] md:h-1/2 rounded-3xl overflow-hidden group cursor-pointer shadow-lg"
            >
              <Image
                src="/immigration.png"
                alt="Immigration & PR"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Users className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Immigration & PR</h3>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExpertiseGrid;
