'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import { FileDown, Search, Filter, BookText, GraduationCap, Building2, Globe2 } from 'lucide-react';

const resources = [
  {
    id: 1,
    title: 'MBBS in Russia - Admission Guide 2024',
    description: 'A comprehensive guide covering eligibility, documentation, and the complete admission process for Russian medical universities.',
    category: 'Admission',
    fileSize: '4.2 MB',
    format: 'PDF',
    icon: <Globe2 className="text-blue-500" />
  },
  {
    id: 2,
    title: 'NMC Regulations (Current Year)',
    description: 'Official National Medical Commission regulations for Indian students studying medicine abroad.',
    category: 'Official',
    fileSize: '1.8 MB',
    format: 'PDF',
    icon: <Building2 className="text-red-500" />
  },
  {
    id: 3,
    title: 'Medical Entrance Syllabus - Georgia',
    description: 'Detailed syllabus and preparation guide for university-specific entrance tests in Georgia.',
    category: 'Academic',
    fileSize: '2.5 MB',
    format: 'PDF',
    icon: <GraduationCap className="text-purple-500" />
  },
  {
    id: 4,
    title: 'Student Visa Checklist',
    description: 'Required documents and step-by-step instructions for medical student visa applications.',
    category: 'Admission',
    fileSize: '1.2 MB',
    format: 'PDF',
    icon: <FileDown className="text-green-500" />
  },
  {
    id: 5,
    title: 'University Brochure - Kazan Federal',
    description: 'Explore the campus, curriculum, and facilities at Kazan Federal University.',
    category: 'Brochure',
    fileSize: '8.5 MB',
    format: 'PDF',
    icon: <BookText className="text-yellow-500" />
  },
  {
    id: 6,
    title: 'Global Career Path Roadmap',
    description: 'Understanding the path from graduation to residency in UK, USA, and India.',
    category: 'Career',
    fileSize: '3.1 MB',
    format: 'PDF',
    icon: <Filter className="text-indigo-500" />
  }
];

const categories = ['All', 'Admission', 'Official', 'Academic', 'Brochure', 'Career'];

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredResources = resources.filter(res => {
    const matchesSearch = res.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         res.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || res.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Student Resources" 
        subtitle="Access essential guides, official regulations, and academic materials to support your medical education journey."
        backgroundImage="https://images.unsplash.com/photo-1434031213662-8746973901bb?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-28">
          
          {/* Search and Filter Bar */}
          <div className="bg-gray-50 p-8 rounded-[2.5rem] mb-16 flex flex-col lg:flex-row gap-8 items-center border border-gray-100">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search resources by title or description..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white border border-gray-100 focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all font-medium"
              />
            </div>
            <div className="flex items-center gap-4 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-3 rounded-xl font-bold whitespace-nowrap transition-all ${
                    activeCategory === cat 
                      ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                      : 'bg-white text-gray-500 border border-gray-100 hover:border-primary/30 hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.length > 0 ? (
              filteredResources.map((res, idx) => (
                <motion.div
                  key={res.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all flex flex-col"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-primary/10 transition-colors">
                      {res.icon}
                    </div>
                    <span className="px-3 py-1 bg-gray-100 rounded-lg text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                      {res.format} • {res.fileSize}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                    {res.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">
                    {res.description}
                  </p>
                  <button className="flex items-center justify-center gap-3 w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-primary transition-all active:scale-95 shadow-lg shadow-gray-900/10">
                    <FileDown size={20} />
                    Download Resource
                  </button>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center space-y-4">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto text-gray-300">
                  <Search size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">No resources found</h3>
                <p className="text-gray-500">Try adjusting your search or category filter.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-extrabold">Need Custom Guidance?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
            If you can't find the specific information you're looking for, our expert counselors are just a click away to help you with personalized advice.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-all shadow-xl active:scale-95">
              Talk to an Expert
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all active:scale-95">
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResourcesPage;
