import React from 'react';
import { ShieldCheck, GraduationCap, Plane, HeartHandshake, Banknote, UserCheck } from 'lucide-react';

const reasons = [
  {
    icon: <ShieldCheck size={24} />,
    title: '100% Visa Success',
    description: 'Expert documentation for high success rates.'
  },
  {
    icon: <GraduationCap size={24} />,
    title: 'Top Universities',
    description: 'NMC and WHO recognized global institutions.'
  },
  {
    icon: <Plane size={24} />,
    title: 'End-to-End Support',
    description: 'From admission letters to hostel arrangements.'
  },
  {
    icon: <Banknote size={24} />,
    title: 'Low Tuition Fees',
    description: 'Top-tier medical education that fits your budget.'
  },
  {
    icon: <HeartHandshake size={24} />,
    title: 'Expert Counseling',
    description: 'One-on-one guidance for country & uni selection.'
  },
  {
    icon: <UserCheck size={24} />,
    title: 'Post-Landing Support',
    description: 'Settlement support after you reach your destination.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-primary-dark relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-28">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Content */}
          <div className="lg:w-1/3 text-white space-y-6">
            <span className="text-primary-light font-bold tracking-widest text-xs uppercase block">Our Advantages</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Why Choose <br /> Medverz?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              We make your global medical education journey smooth and successful with comprehensive services.
            </p>
            <div className="pt-4">
              <button 
                className="bg-white text-primary-dark px-10 py-3.5 rounded-full font-bold hover:bg-primary-light transition-all shadow-xl text-sm uppercase tracking-wider"
                suppressHydrationWarning
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Right Side: Grid of 6 Horizontal White Boxes */}
          <div className="lg:w-2/3 w-full grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className="bg-white p-5 rounded-2xl hover:-translate-y-1 transition-all duration-300 border border-white/10 group flex flex-col md:flex-rowitems-start gap-4"
              >
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {reason.icon}
                </div>
                <div className="flex flex-col justify-center h-full">
                  <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors leading-tight">
                    {reason.title}
                  </h3>
                  <p className="text-gray-500 text-[10px] leading-snug">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
