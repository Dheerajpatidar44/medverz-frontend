import React from 'react';
import Image from 'next/image';
import { Briefcase, Globe, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';
import LeadPopupButton from '@/components/LeadPopupButton';

export const metadata = {
  title: 'Work Abroad | Medverz Education',
  description: 'Explore rewarding career opportunities abroad with Medverz Education. We provide complete guidance for working abroad.',
};

const WorkAbroadPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a8ba9] to-[#7cb94c] py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-16 left-1/2 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10 flex flex-col items-center text-center">
          <div className="mb-8 shadow-[0_0_50px_rgba(255,255,255,0.3)] rounded-full overflow-hidden">
            <Image
              src="/workabroad.PNG"
              alt="Work Abroad Logo"
              width={180}
              height={180}
              className="w-32 h-32 md:w-44 md:h-44 object-contain rounded-full scale-105"
            />
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tight leading-[1.1] drop-shadow-lg">
            Take Your Career <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">Global with Us</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/95 mb-12 max-w-3xl font-medium leading-relaxed drop-shadow">
            We provide complete end-to-end support for professionals seeking to work and settle abroad. Discover international opportunities tailored for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <LeadPopupButton popupType="work-abroad" className="bg-white text-[#0a8ba9] px-10 py-4 rounded-md font-bold hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-2 text-lg">
              Get Started <ArrowRight size={22} />
            </LeadPopupButton>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Complete Work Abroad Support</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-[#0a8ba9] to-[#7cb94c] mx-auto rounded-full mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed">
              Our comprehensive services ensure a smooth transition to your new international career with expert guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: Globe, title: "Profile Assessment", desc: "We evaluate your qualifications and experience to match you with the best international opportunities." },
              { icon: CheckCircle2, title: "Visa Assistance", desc: "Expert guidance through the entire visa application process, ensuring all documentation is perfect." },
              { icon: GraduationCap, title: "Pre-Departure Support", desc: "Comprehensive briefings and support to help you prepare for life and work in a new country." }
            ].map((service, i) => (
              <div key={i} className="bg-white p-10 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_20px_60px_rgba(10,139,169,0.15)] transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0a8ba9]/5 to-[#7cb94c]/5 rounded-bl-[5rem] -mr-16 -mt-16 transition-all group-hover:scale-150"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-[#0a8ba9] to-[#7cb94c] rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg shadow-[#0a8ba9]/20 group-hover:rotate-6 transition-transform">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#0a8ba9]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7cb94c]/5 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#0a8ba9] to-[#7cb94c] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-xl font-medium">
              Join hundreds of professionals who have successfully built their careers abroad with Medverz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: "Dr. Ananya Iyer",
                location: "United Kingdom",
                role: "Senior Consultant",
                text: "The transition from India to the UK felt seamless thanks to Medverz. Their expertise in medical registration and visa documentation is unmatched.",
                initial: "A"
              },
              {
                name: "Rahul Mehra",
                location: "Germany",
                role: "Healthcare Specialist",
                text: "I was worried about the language barrier, but Medverz provided language training and placement support that was truly life-changing.",
                initial: "R"
              },
              {
                name: "Priya Das",
                location: "Canada",
                role: "Nursing Lead",
                text: "From my first consultation to landing in Canada, the team was always there. Highly recommend for any professional seeking global growth.",
                initial: "P"
              }
            ].map((t, i) => (
              <div key={i} className="bg-gray-50/50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative group">
                <div className="absolute top-8 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Globe size={60} className="text-[#0a8ba9]" />
                </div>

                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-5 h-5 fill-[#7cb94c] text-[#7cb94c]" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-700 italic text-lg leading-relaxed mb-10 relative z-10">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0a8ba9] to-[#7cb94c] rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-[#0a8ba9]/20">
                    {t.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{t.name}</h4>
                    <p className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#0a8ba9] to-[#7cb94c]">
                      {t.role}, {t.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#065e71] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">Ready to Start Your Journey?</h2>
          <p className="text-white/80 mb-12 text-xl md:text-2xl max-w-2xl mx-auto">
            Connect with our experts today and take the first step towards your international career.
          </p>
          <LeadPopupButton popupType="work-abroad" className="bg-gradient-to-r from-[#0a8ba9] to-[#7cb94c] text-white px-12 py-5 rounded-md font-bold transition-all shadow-[0_10px_40px_rgba(124,185,76,0.3)] hover:shadow-[0_20px_60px_rgba(124,185,76,0.5)] active:scale-95 text-xl">
            Contact Our Experts
          </LeadPopupButton>
        </div>
      </section>
    </div>
  );
};

export default WorkAbroadPage;
