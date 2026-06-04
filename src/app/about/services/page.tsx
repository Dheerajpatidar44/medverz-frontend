'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import { 
  GraduationCap, 
  Compass, 
  FileCheck, 
  PlaneTakeoff, 
  ShieldCheck, 
  HeartHandshake,
  HelpCircle,
  PhoneCall,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const ServicesPage = () => {
  const mainServices = [
    {
      icon: Compass,
      image: "/about-hero.png", // Add your image path here like "/services/counseling.png"
      title: "Personalized Guidance & Counseling",
      description: "Finding a university abroad that suits your budget, as well as requirements, is difficult. Therefore, many students are confused about which country to choose or which university to apply to. For this, we have a team of well trained and expert counsellors who help you to identify your needs and goals and assist you with personal admission guidance and career counselling.",
    },
    {
      icon: GraduationCap,
      image: "/about-hero.png",
      title: "University Selection",
      description: "Counsellors at Medverz are well experienced, competent and trained in helping the students in finding the right university for their education abroad, in retrospect of your individual needs and requirements. They offer some of the cherry-picked options, from 50+ top medical universities & 20+ countries, to help you to become a successful doctor.",
    },
    {
      icon: FileCheck,
      image: "/about-hero.png",
      title: "100% Admission Assistance",
      description: "Medverz assist you with complete admission guidance at every step. When it comes to studying MBBS abroad, there can be piles of documentation required at various stages. Our team offers complete assistance through the entire process. Documentation Assistance Travel Assistance Forex Assistance Loan Assistance.",
    },
    {
      icon: PlaneTakeoff,
      image: "/about-hero.png",
      title: "Pre-Departure Guidance",
      description: "Medverz conducts the pre-departure ceremony of Sobraniye for all the students who would be joining medical universities of Russia, where they can candid with their peers and form friendships. The students are equipped with all the necessary instructions so that they can easily adjust to the new environment and get the most outcomes during their stay in Russia.",
    },
    {
      icon: ShieldCheck,
      image: "/about-hero.png",
      title: "FMGE/NExT Coaching",
      description: "We aim to constantly guide and prepare the students for their successful careers, therefore providing FMGE/NExT coaching alongside their MBBS study in top Russian government medical universities. We facilitate lecturers and subject experts from India to join the students in Russia and assist you with the necessary recommendations and assistance so that they perform better at the medical screening exams.",
    },
    {
      icon: HeartHandshake,
      image: "/about-hero.png",
      title: "On-Arrival Benefits",
      description: "Explore the unmatchable advantages of studying MBBS in Russia with extensive benefits. Final documentation in the university Hostel arrangements and Indian canteens Issuance of local SIM Card & 10 minutes complimentary call Assistance in obtaining the Certificate of Equivalence from the Ministry of Education of the destination country. Visa extension, if required Visa and travel arrangements for students, and more.",
    }
  ];

  const workflowSteps = [
    {
      number: "01",
      title: "Free Counseling",
      desc: "Connect with us online or in-person to discuss your academic aspirations and evaluate the best options."
    },
    {
      number: "02",
      title: "University Selection",
      desc: "Select your preferred university and submit your 10th/12th marksheets along with your NEET scorecard."
    },
    {
      number: "03",
      title: "Documentation & Visa",
      desc: "Our verification team prepares your documents, gets them certified, and secures your student visa."
    },
    {
      number: "04",
      title: "Departure & Settlement",
      desc: "Fly with our accompanied group, check into your hostel, and begin your journey to becoming a global doctor."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <PageHero
        title="Our Services"
        subtitle="Supporting your international MBBS journey from first consultation to graduation and licensing."
        backgroundImage="/about-hero.png"
      />

      {/* 2. Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-28">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="text-primary font-bold tracking-widest text-sm uppercase">Comprehensive Care</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              End-to-End Solutions for Medical Aspirants
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              Studying MBBS abroad is a major milestone. Medverz Education removes the complexity by providing a seamless, transparent, and completely supported transition from your home country to your dream medical university.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Main Services Grid */}
      <section className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-6 md:px-12 lg:px-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, idx) => (
              <div 
                key={idx} 
                className={`text-white flex flex-col group transition-all duration-300 hover:-translate-y-1 ${idx === 1 || idx === 4 ? 'bg-primary-dark' : 'bg-primary'}`}
              >
                <div className="p-3">
                  {/* Image / Icon Header Section */}
                  <div className="w-full bg-[#E5E7EB] aspect-[4/3] relative flex items-center justify-center overflow-hidden">
                    {service.image ? (
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="relative z-10 w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                        <service.icon size={36} className="text-gray-400" strokeWidth={1.5} />
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center flex flex-col flex-grow px-5 pb-6 pt-3">
                  <h3 className="text-xl font-bold mb-4 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-[13.5px] leading-[1.65] font-medium text-white/95">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How We Work Timeline */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/10 -translate-y-1/2 hidden lg:block -z-10" />
        <div className="container mx-auto px-6 md:px-12 lg:px-28">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-primary font-bold tracking-widest text-sm uppercase">Our Process</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">How Medverz Works</h2>
            <p className="text-gray-500 font-medium">We break down your journey into four clear, stress-free stages.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:border-primary/20 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Step Number */}
                  <span className="text-5xl font-black text-primary/10 group-hover:text-primary/20 transition-colors block">
                    {step.number}
                  </span>
                  
                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-semibold">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Frequently Asked Questions Brief */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-28">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <span className="text-primary font-bold tracking-widest text-sm uppercase">Quick Support</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
            </div>
            <div className="grid gap-6">
              {[
                { 
                  q: "Are there any service charges or hidden fees?", 
                  a: "No, Medverz Education believes in absolute transparency. All fee structures, visa processing costs, and counseling services are discussed upfront with zero hidden charges." 
                },
                { 
                  q: "How do you assist students after arriving in the country?", 
                  a: "We have dedicated local offices and English/Hindi-speaking coordinators stationed at all our partner universities. They guide students through airport arrivals, hostel check-ins, local police registration, and academic orientation." 
                },
                { 
                  q: "Will my degree be recognized in India and globally?", 
                  a: "Yes. We only facilitate admissions to medical universities listed in the World Directory of Medical Schools (WDOMS) and approved by the National Medical Commission (NMC/MCI), WHO, ECFMG (USA), and medical councils worldwide." 
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 border border-gray-100/80 shadow-sm">
                  <h3 className="text-base font-bold text-gray-900 mb-3 flex gap-2.5 items-center">
                    <HelpCircle size={18} className="text-primary flex-shrink-0" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-gray-500 font-medium text-sm leading-relaxed pl-7 border-l-2 border-primary/20 italic">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Lead Generation CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-28">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-3xl mx-auto space-y-8 animate-fade-in-up">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                Secure Your MBBS Spot with Expert Assistance
              </h2>
              <p className="text-lg md:text-xl text-white/95 leading-relaxed max-w-2xl mx-auto font-medium">
                Whether you need advice on selecting a country or support with documentation, our advisors are here for you 24/7.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
                <button 
                  onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new CustomEvent('open-lead-popup'))}
                  className="bg-white text-primary hover:bg-primary-light px-10 py-4.5 rounded-full font-black text-sm tracking-wider uppercase transition-all shadow-xl active:scale-95 flex items-center gap-2"
                >
                  <PhoneCall size={16} />
                  Book Free Consultation
                </button>
                <Link 
                  href="/contact" 
                  className="bg-transparent border-2 border-white hover:bg-white/10 px-10 py-4 rounded-full font-black text-sm tracking-wider uppercase transition-all active:scale-95 flex items-center gap-2"
                >
                  <span>Contact Our Team</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            
            {/* Decorative background shapes */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/10 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
