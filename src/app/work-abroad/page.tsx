import React from 'react';
import Image from 'next/image';
import { Briefcase, Globe, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Work Abroad | Medverz Education',
  description: 'Explore rewarding career opportunities abroad with Medverz Education. We provide complete guidance for working abroad.',
};

const WorkAbroadPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10 flex flex-col items-center text-center">
          <div className="bg-white/20 p-4 rounded-full mb-6 backdrop-blur-sm border border-white/30 shadow-xl">
            <Briefcase size={40} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Take Your Career <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Global with Us</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-50 mb-10 max-w-2xl font-medium leading-relaxed">
            We provide complete end-to-end support for professionals seeking to work and settle abroad. Discover international opportunities tailored for you.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-primary px-8 py-3.5 rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl active:scale-95 flex items-center gap-2">
              Get Started <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Work Abroad Support</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our comprehensive services ensure a smooth transition to your new international career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <Globe size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Profile Assessment</h3>
              <p className="text-gray-600 leading-relaxed">
                We evaluate your qualifications and experience to match you with the best international opportunities.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <CheckCircle2 size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visa Assistance</h3>
              <p className="text-gray-600 leading-relaxed">
                Expert guidance through the entire visa application process, ensuring all documentation is perfect.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pre-Departure Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive briefings and support to help you prepare for life and work in a new country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-900 text-white mt-auto">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-gray-300 mb-10 text-lg">
            Connect with our experts today and take the first step towards your international career.
          </p>
          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl active:scale-95 text-lg">
            Contact Our Experts
          </button>
        </div>
      </section>
    </div>
  );
};

export default WorkAbroadPage;
