'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, Users, BookText, Award, ShieldCheck, CheckCircle2, HeartHandshake } from 'lucide-react';

const StatCounter = ({ end, label, suffix = "" }: { end: number, label: string, suffix?: string }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-2xl border border-gray-50 transition-all group">
      <div className="text-3xl md:text-4xl font-extrabold text-primary mb-2 flex items-baseline">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          {end}
        </motion.span>
        <span>{suffix}</span>
      </div>
      <p className="text-gray-500 text-xs md:text-sm font-semibold uppercase tracking-wider text-center group-hover:text-primary transition-colors">
        {label}
      </p>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden relative">
      {/* Creative Blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-28 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-stretch items-center gap-12 md:gap-20">

          {/* Left Side: Image and Badge */}
          <div className="relative flex-1 w-full max-w-lg mx-auto lg:mx-0 flex flex-col justify-between">
            {/* Background Geometric Pattern */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary-light rounded-full opacity-30 blur-3xl -z-10" />

            <div className="relative z-10 rounded-3xl overflow-hidden shadow-lg flex-grow min-h-[320px] md:min-h-[450px] lg:min-h-[400px]">
              <Image
                src="/images/office/office4.jpeg"
                alt="Medverz Education Office"
                fill
                className="object-cover transform hover:scale-105 transition-transform duration-700"
                priority
              />
              {/* Floating Badge */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl flex items-center gap-4 border border-gray-100/50 shadow-md">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-tighter">Approved By</p>
                  <p className="text-lg font-extrabold text-gray-900 leading-none">NMC & WHO</p>
                </div>
              </div>
            </div>

            {/* 3 Badges under the image */}
            <div className="grid grid-cols-3 gap-3 mt-6 shrink-0">
              {[
                { icon: ShieldCheck, title: "100% Safe", desc: "Admissions" },
                { icon: CheckCircle2, title: "NMC & WHO", desc: "Guidelines" },
                { icon: HeartHandshake, title: "End-to-End", desc: "Care Support" }
              ].map((badge, idx) => (
                <div key={idx} className="bg-slate-50/80 border border-slate-100/50 rounded-2xl p-3 flex flex-col items-center text-center hover:shadow-md transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                    <badge.icon size={20} className="stroke-[2]" />
                  </div>
                  <p className="text-xs font-black text-gray-900 leading-tight">{badge.title}</p>
                  <p className="text-[10px] font-bold text-gray-500 mt-0.5 leading-none">{badge.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex-1 space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary-light px-4 py-1.5 rounded-full text-primary font-bold text-xs uppercase tracking-[0.15em]">
                <Target size={14} />
                About Medverz Education
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Empowering Aspiring Doctors for <span className="text-primary underline decoration-primary/20 decoration-8 underline-offset-8">Global Careers</span>
              </h2>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                Led by <strong>AAKIB KHAN</strong>, Medverz Education has been at the forefront of medical education consultancy.
                We don't just provide admissions; we shape careers by connecting Indian students
                with world-class medical universities across Russia, Georgia, and beyond.
                With <strong>1000+ students placed abroad since 2022</strong>, we are committed to excellence and transparency.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <StatCounter end={5} suffix="+" label="Years of Experience" />
              <StatCounter end={1000} suffix="+" label="Students Placed" />
              <StatCounter end={50} suffix="+" label="Partner Universities" />
              <StatCounter end={100} suffix="%" label="Visa Success Rate" />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 pt-4"
            >
              <button className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-dark transition-all active:scale-95">
                Know More About Us
              </button>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary">
                  <Users size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase">Trusted By</p>
                  <p className="text-sm font-extrabold text-gray-900">5K+ Families</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
