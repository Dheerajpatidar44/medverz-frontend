import React from 'react';
import PageHero from '@/components/PageHero';
import { Target, Eye, Shield, Award, Users, BookOpen, GraduationCap, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
        <PageHero 
          title="Empowering Medical Careers" 
          subtitle="At Medverz, we provide the tools and knowledge to transform your passion for medicine into professional excellence."
          backgroundImage="/about-hero.png"
        />

        {/* 2. Our Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-28">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 space-y-6">
                <span className="text-primary font-bold tracking-widest text-sm uppercase">Our Journey</span>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Born from a Passion for Clinical Excellence
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Founded by a team of medical professionals and educators, Medverz was created to bridge the gap between academic learning and clinical practice. We understood that the medical field is constantly evolving, and students need more than just textbooks to succeed.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Today, we stand as a premier platform for medical skill enhancement, helping thousands of students and professionals worldwide to upgrade their skills and achieve their career goals.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary" />
                    <span className="font-semibold text-gray-800">Expert-Led Training</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary" />
                    <span className="font-semibold text-gray-800">Practical Workshops</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary" />
                    <span className="font-semibold text-gray-800">Global Certification</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary" />
                    <span className="font-semibold text-gray-800">Career Support</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/about.png" 
                    alt="Our Story" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 -z-0 rounded-full blur-3xl"></div>
                <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary-dark/10 -z-0 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Mission & Vision Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12 lg:px-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Target size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide accessible, high-quality, and practical medical education that empowers healthcare professionals to deliver exceptional patient care and lead in their respective fields.
                </p>
              </div>
              <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-primary-dark/10 rounded-2xl flex items-center justify-center text-primary-dark mb-6 group-hover:scale-110 transition-transform">
                  <Eye size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the world's most trusted platform for medical skill enhancement, recognized for our commitment to excellence, innovation, and the success of our global community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Our Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-28">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-bold tracking-widest text-sm uppercase">The Medverz Way</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">Core Values That Drive Us</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Shield, title: "Integrity", desc: "Honesty and transparency in everything we do." },
                { icon: Award, title: "Excellence", desc: "Striving for the highest standards in education." },
                { icon: Users, title: "Community", desc: "Building a supportive network for medical learners." },
                { icon: BookOpen, title: "Innovation", desc: "Continuously evolving our teaching methods." }
              ].map((value, idx) => (
                <div key={idx} className="text-center p-6 rounded-2xl hover:bg-primary-light transition-colors group">
                  <div className="w-12 h-12 bg-white shadow-lg rounded-xl flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <value.icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-500 text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Stats Section */}
        <section className="py-16 bg-primary-dark text-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-28">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">15k+</div>
                <div className="text-primary-light/80 font-medium">Students Enrolled</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">120+</div>
                <div className="text-primary-light/80 font-medium">Expert Mentors</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                <div className="text-primary-light/80 font-medium">Medical Courses</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                <div className="text-primary-light/80 font-medium">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Join Us CTA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-28">
            <div className="bg-gradient-to-r from-primary to-primary-dark rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Elevate Your Medical Career?</h2>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                  Join thousands of students who are already upgrading their skills with our expert-led courses.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl active:scale-95">
                    Browse Courses
                  </button>
                  <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all active:scale-95">
                    Contact Us
                  </button>
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

export default AboutPage;
