'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import { Award, Users, Globe, Mail } from 'lucide-react';

const socialIcons = {
  facebook: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  instagram: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.012 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.885 5.885 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.012 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.898 5.898 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.012-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.89 5.89 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.584-.071 4.85c-.055 1.17-.249 1.805-.415 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.584-.015-4.85-.071c-1.17-.055-1.805-.249-2.227-.415a3.746 3.746 0 01-1.382-.896 3.746 3.746 0 01-.896-1.382c-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.016-3.584.071-4.85c.055-1.17.249-1.805.415-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.162 4.162 0 110-8.324A4.162 4.162 0 0112 16zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  linkedin: "M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.58c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96v5.7h-3.56V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z"
};

const team = [
  {
    name: 'AAKIB KHAN',
    role: 'Founder & Director',
    image: '/images/office/office4.jpeg',
    bio: 'The visionary leader behind Medverz Education, dedicated to bridging the gap between Indian students and global medical opportunities since 2022.',
    specialty: 'Strategy & Leadership'
  },
  {
    name: 'Dr Harish Khichi',
    role: 'Regional Head',
    image: '/images/teams/Dr Harish Khichi.PNG',
    bio: 'Leading our operations in Rajasthan, Jodhpur, Dr. Harish ensures that students from the region get the best guidance for their medical journey.',
    specialty: 'Rajasthan Jodhpur'
  },
  {
    name: 'Dr Fahad (BUMS)',
    role: 'Academic Counselor',
    image: '/images/teams/Dr Fahad.PNG',
    bio: 'Expert academic counselor with a background in BUMS, helping students choose the right path for their clinical excellence.',
    specialty: 'Academic Counseling'
  },

];

// Sort team: Founder first, then alphabetical
const sortedTeam = [...team].sort((a, b) => {
  if (a.role === 'Founder & Director') return -1;
  if (b.role === 'Founder & Director') return 1;
  return a.name.localeCompare(b.name);
});

const TeamPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="Meet Our Experts"
        subtitle="A dedicated team of medical professionals, education consultants, and on-ground support staff committed to your success."
        backgroundImage="https://images.unsplash.com/photo-1522071823991-b99c22303091?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Leadership Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-28">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-primary font-bold tracking-widest text-sm uppercase">Our Team</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">Expert Minds Behind Medverz</h2>
            <p className="text-gray-500 text-lg">We combine global expertise with local support to ensure you have the best medical education experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {sortedTeam.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-8">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Social Overlay */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <div className="flex justify-center gap-4">
                    <a href="https://www.facebook.com/share/1LU3WduLK8/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d={socialIcons.facebook}/></svg>
                    </a>
                    <a href="https://www.instagram.com/medverz.education?igsh=MW9wM2pkOGF4YTJ1YQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d={socialIcons.instagram}/></svg>
                    </a>
                    <a href="https://www.linkedin.com/company/medverz-education/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d={socialIcons.linkedin}/></svg>
                    </a>
                  </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <span className="bg-gray-50 text-gray-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                      {member.specialty}
                    </span>
                  </div>
                  <p className="text-primary font-bold text-sm uppercase tracking-widest">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed pt-2">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex items-center gap-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Award size={32} />
              </div>
              <div>
                <p className="text-3xl font-extrabold text-gray-900">5+</p>
                <p className="text-gray-500 font-bold text-sm">Years of Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
                <Users size={32} />
              </div>
              <div>
                <p className="text-3xl font-extrabold text-gray-900">1000+</p>
                <p className="text-gray-500 font-bold text-sm">Students Placed</p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                <Globe size={32} />
              </div>
              <div>
                <p className="text-3xl font-extrabold text-gray-900">10+</p>
                <p className="text-gray-500 font-bold text-sm">Global Offices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-28">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white space-y-8 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-extrabold">Ready to start your journey?</h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">Book a free consultation with our experts today and get a personalized career roadmap.</p>
              <button className="bg-white text-primary px-12 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl active:scale-95">
                Schedule Free Counseling
              </button>
            </div>
            {/* Decorative items */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default TeamPage;
