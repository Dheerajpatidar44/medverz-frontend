'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import { 
  Target, 
  Eye, 
  Shield, 
  Award, 
  Users, 
  BookOpen, 
  CheckCircle2, 
  Trophy, 
  Landmark, 
  Globe2,
  GraduationCap
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const OverviewPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <PageHero
        title="Empowering Medical Careers"
        subtitle="At Medverz, we provide the tools, guidance, and knowledge to transform your passion for medicine into professional global excellence."
        backgroundImage="/about-hero.png"
      />

      {/* 2. Our Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-28">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <div className="space-y-3">
                <span className="text-primary font-bold tracking-widest text-sm uppercase block">Our Journey</span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                  Born from a Passion for Clinical Excellence
                </h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                Founded by a dedicated team of medical professionals and educators, Medverz was created to bridge the gap between academic learning and clinical practice. We understood that the medical field is constantly evolving, and students need more than just textbooks to succeed.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                Today, we stand as a premier platform for medical skill enhancement and global education counseling, helping thousands of students and professionals worldwide to secure admissions in top medical universities and upgrade their clinical skills.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  "Expert-Led Professional Training",
                  "Direct admissions in top state universities",
                  "Global Licensing Exam support",
                  "Verified, NMC-compliant curriculum"
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={16} className="text-primary" />
                    </div>
                    <span className="font-bold text-gray-800 text-sm">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 relative w-full">
              {/* Image Frame Wrapper */}
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/images/gallery/gallery3.jpeg"
                  alt="Students learning at Medverz"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover aspect-[4/3]"
                  priority
                />
              </div>
              {/* Decorative shapes */}
              <div className="absolute -bottom-8 -right-8 w-60 h-60 bg-primary/10 -z-0 rounded-full blur-3xl"></div>
              <div className="absolute -top-8 -left-8 w-60 h-60 bg-primary-dark/10 -z-0 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision Section */}
      <section className="py-24 bg-gray-50/50 border-y border-gray-100/50">
        <div className="container mx-auto px-6 md:px-12 lg:px-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Mission Card */}
            <div className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-500 leading-relaxed font-semibold">
                To provide accessible, high-quality, and practical medical education counseling that empowers healthcare professionals to deliver exceptional patient care and lead in their respective fields globally.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary-dark/10 rounded-2xl flex items-center justify-center text-primary-dark mb-8 group-hover:scale-110 group-hover:bg-primary-dark group-hover:text-white transition-all duration-300">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed font-semibold">
                To be the world's most trusted platform for medical skill enhancement and overseas medical admissions, recognized for our commitment to transparency, quality, and the success of our global student community.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Our Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-28">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-primary font-bold tracking-widest text-sm uppercase">The Medverz Way</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">Core Values That Drive Us</h2>
            <p className="text-gray-500 font-medium">The foundational pillars that guide our student support and academic standards.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Integrity", desc: "Honesty and absolute transparency in counseling, fee representations, and documentation." },
              { icon: Award, title: "Excellence", desc: "Striving for the highest standards in admissions support and student accommodation." },
              { icon: Users, title: "Community", desc: "Building a supportive, warm network for medical learners at home and abroad." },
              { icon: BookOpen, title: "Innovation", desc: "Continuously evolving our training resources and digital tools to help you succeed." }
            ].map((value, idx) => (
              <div 
                key={idx} 
                className="text-center p-8 rounded-3xl border border-gray-50/50 hover:bg-primary-light/40 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <value.icon size={26} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{value.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-semibold">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Stats Section with Icons */}
      <section className="py-20 bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 lg:px-28 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            
            {/* Stat 1 */}
            <div className="space-y-3">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto text-primary-light">
                <Users size={24} />
              </div>
              <div className="text-4xl md:text-5xl font-black mb-1">15k+</div>
              <div className="text-primary-light/80 text-sm font-semibold tracking-wider uppercase">Students Enrolled</div>
            </div>

            {/* Stat 2 */}
            <div className="space-y-3">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto text-primary-light">
                <Landmark size={24} />
              </div>
              <div className="text-4xl md:text-5xl font-black mb-1">120+</div>
              <div className="text-primary-light/80 text-sm font-semibold tracking-wider uppercase">Expert Mentors</div>
            </div>

            {/* Stat 3 */}
            <div className="space-y-3">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto text-primary-light">
                <Trophy size={24} />
              </div>
              <div className="text-4xl md:text-5xl font-black mb-1">50+</div>
              <div className="text-primary-light/80 text-sm font-semibold tracking-wider uppercase">Medical Courses</div>
            </div>

            {/* Stat 4 */}
            <div className="space-y-3">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto text-primary-light">
                <Globe2 size={24} />
              </div>
              <div className="text-4xl md:text-5xl font-black mb-1">98%</div>
              <div className="text-primary-light/80 text-sm font-semibold tracking-wider uppercase">Success Rate</div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Join Us CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-28">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">Ready to Elevate Your Medical Career?</h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-semibold">
                Join thousands of students who are already upgrading their skills with our expert overseas guidance.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <button 
                  onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new CustomEvent('open-lead-popup'))}
                  className="bg-white text-primary hover:bg-primary-light px-10 py-4.5 rounded-full font-black text-sm tracking-wider uppercase transition-all shadow-xl active:scale-95 flex items-center gap-2"
                >
                  <GraduationCap size={18} />
                  Consult Now
                </button>
                <Link 
                  href="/contact" 
                  className="bg-transparent border-2 border-white hover:bg-white/10 px-10 py-4.5 rounded-full font-black text-sm tracking-wider uppercase transition-all active:scale-95"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OverviewPage;
