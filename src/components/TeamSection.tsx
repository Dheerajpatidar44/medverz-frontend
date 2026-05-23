'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, Users } from 'lucide-react';

const socialIcons = {
  facebook: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  instagram: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.012 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.885 5.885 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.012 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.898 5.898 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.012-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.89 5.89 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.584-.071 4.85c-.055 1.17-.249 1.805-.415 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.584-.015-4.85-.071c-1.17-.055-1.805-.249-2.227-.415a3.746 3.746 0 01-1.382-.896 3.746 3.746 0 01-.896-1.382c-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.016-3.584.071-4.85c.055-1.17.249-1.805.415-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.162 4.162 0 110-8.324A4.162 4.162 0 0112 16zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  linkedin: "M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.58c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96v5.7h-3.56V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z"
};

const teamMembers = [
  {
    name: 'AAKIB KHAN',
    position: 'Founder & Director',
    image: '/images/teams/Aakib Khan.jpeg',
    bio: 'Leading Medverz Education with a vision to make global medical education accessible for everyone.'
  },
  {
    name: 'Mr Mehmood Khan',
    position: 'Managing Director',
    image: '/images/teams/Mehmood Khan.jpeg',
    bio: 'Ensuring operational excellence and strategic growth across all our educational programs.'
  },
  {
    name: 'Mr Aasif Khan',
    position: 'Administrative Head',
    image: '/images/teams/Aasif Khan.jpeg',
    bio: 'Managing administrative operations to provide seamless support for all our students.'
  },
  {
    name: 'Dr Harish Khichi',
    position: 'Regional Head (Rajasthan)',
    image: '/images/teams/Dr Harish Khichi.PNG',
    bio: 'Dedicated guidance for students from Jodhpur and all of Rajasthan for their medical studies abroad.'
  },
  {
    name: 'Dr Fahad (BUMS)',
    position: 'Academic Counselor',
    image: '/images/teams/Dr Fahad.PNG',
    bio: 'Expert clinical and academic counseling for medical aspirants seeking global opportunities.'
  }
];

const TeamSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Creative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 -z-10" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="container mx-auto px-6 md:px-12 lg:px-28">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full text-primary font-bold text-xs uppercase tracking-widest">
              <Users size={16} />
              Our Experts
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Meet Our <span className="text-primary">Dedicated Team</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl">
              Our team of experts is dedicated to making your journey to a global medical degree as smooth and successful as possible.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden shadow-sm">
                  <div className="w-full h-full bg-primary/20" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-white bg-primary text-white flex items-center justify-center text-xs font-bold shadow-sm">
                +10
              </div>
            </div>
            <p className="text-[10px] text-gray-400 font-bold uppercase mt-2 tracking-widest">Members Worldwide</p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 mb-6 transition-all duration-500 group-hover:border-primary/30">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Social Overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <div className="flex justify-center gap-4">
                    <a href="https://www.facebook.com/share/1LU3WduLK8/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d={socialIcons.facebook}/></svg>
                    </a>
                    <a href="https://www.instagram.com/medverz.education?igsh=MW9wM2pkOGF4YTJ1YQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d={socialIcons.instagram}/></svg>
                    </a>
                    <a href="https://www.linkedin.com/company/medverz-education/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d={socialIcons.linkedin}/></svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-2 px-2">
                <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-primary transition-colors uppercase">
                  {member.name}
                </h3>
                <p className="text-primary font-bold text-xs uppercase tracking-widest">
                  {member.position}
                </p>
                <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
