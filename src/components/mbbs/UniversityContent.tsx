'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  GraduationCap, MapPin, Building2, Calendar,
  Banknote, CheckCircle2, Home, ArrowRight,
  Info, Clock, Award, FileText, ChevronDown
} from 'lucide-react';

const countriesList = [
  { name: 'Russia', code: 'ru' },
  { name: 'Kyrgyzstan', code: 'kg' },
  { name: 'Georgia', code: 'ge' },
  { name: 'Kazakhstan', code: 'kz' },
  { name: 'Uzbekistan', code: 'uz' },
  { name: 'Tajikistan', code: 'tj' },
  { name: 'Nepal', code: 'np' },
  { name: 'Bangladesh', code: 'bd' },
  { name: 'China', code: 'cn' },
  { name: 'Belarus', code: 'by' },
  { name: 'Philippines', code: 'ph' },
  { name: 'Armenia', code: 'am' },
  { name: 'Egypt', code: 'eg' }
];
import { University, Country } from '@/data/mbbsData';

interface UniversityContentProps {
  university: University;
  country: Country;
}

const UniversityContent: React.FC<UniversityContentProps> = ({ university, country }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'MBBS',
    country: '',
    state: '',
    city: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('https://medverzeducation.com/php/submit_enquiry.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, subject: 'University Application - ' + university.name })
      });
      if (res.ok) {
        alert('Application submitted successfully!');
        setFormData({ name: '', phone: '', email: '', course: 'MBBS', country: '', state: '', city: '' });
      } else {
        alert('Failed to submit application.');
      }
    } catch (err) {
      alert('Error submitting application.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* University Hero */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src={university.image}
          alt={university.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

        <div className="container mx-auto px-6 md:px-12 lg:px-28 relative z-10 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <nav className="flex items-center gap-2 text-sm font-bold text-gray-300">
              <Link href="/mbbs" className="hover:text-primary-light transition-colors">MBBS</Link>
              <span>/</span>
              <Link href={`/mbbs/${country.slug}`} className="hover:text-primary-light transition-colors uppercase">{country.name}</Link>
              <span>/</span>
              <span className="text-white opacity-60 uppercase">{university.name}</span>
            </nav>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight">
                {university.name}
              </h1>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white font-bold border border-white/20">
                  <MapPin size={18} className="text-primary-light" />
                  {university.location}
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white font-bold border border-white/20">
                  <Award size={18} className="text-yellow-400" />
                  {university.ranking}
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white font-bold border border-white/20">
                  <Calendar size={18} className="text-green-400" />
                  Est. {university.established}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-28">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Left Column: Details */}
            <div className="lg:col-span-2 space-y-20">

              {/* Overview */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                  <Info size={16} />
                  Overview
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">About the University</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {university.overview}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {[
                    { icon: Clock, label: 'Course Duration', value: university.duration },
                    { icon: GraduationCap, label: 'Medium of Instruction', value: university.medium },
                    { icon: Building2, label: 'Type', value: 'Government University' },
                    { icon: CheckCircle2, label: 'Recognition', value: 'NMC, WHO Approved' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{item.label}</p>
                        <p className="text-gray-900 font-bold">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fee Structure */}
              <div id="fees" className="space-y-6 bg-primary/5 p-8 md:p-12 rounded-[3rem] border border-primary/10">
                <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                  <Banknote size={16} />
                  Investment
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Fee Structure</h2>
                <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm mt-8">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-100">
                        <th className="px-6 py-4 font-bold text-gray-900">Particulars</th>
                        <th className="px-6 py-4 font-bold text-gray-900">Amount (Per Year)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      <tr>
                        <td className="px-6 py-4 text-gray-600 font-medium">Tuition Fees</td>
                        <td className="px-6 py-4 text-gray-900 font-bold">{university.fees.tuition}</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-gray-600 font-medium">Hostel Fees</td>
                        <td className="px-6 py-4 text-gray-900 font-bold">{university.fees.hostel}</td>
                      </tr>
                      {university.fees.mess && (
                        <tr>
                          <td className="px-6 py-4 text-gray-600 font-medium">Mess Fees</td>
                          <td className="px-6 py-4 text-gray-900 font-bold">{university.fees.mess}</td>
                        </tr>
                      )}
                      {university.fees.medicalVisa && (
                        <tr>
                          <td className="px-6 py-4 text-gray-600 font-medium">Medical/Visa Fees</td>
                          <td className="px-6 py-4 text-gray-900 font-bold">{university.fees.medicalVisa}</td>
                        </tr>
                      )}
                      <tr className="bg-primary/10">
                        <td className="px-6 py-4 text-primary font-extrabold">Total Package</td>
                        <td className="px-6 py-4 text-primary font-extrabold">{university.fees.total}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-400 font-medium italic">*Fees mentioned above are approximate and subject to change as per currency fluctuations.</p>
              </div>

              {/* Admission Process */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                  <ArrowRight size={16} />
                  Roadmap
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Admission Process</h2>
                <div className="space-y-6 relative before:absolute before:left-4 before:top-0 before:w-0.5 before:h-full before:bg-gray-100">
                  {university.admissionProcess.map((step, i) => (
                    <div key={i} className="relative pl-12 flex items-start gap-4">
                      <div className="absolute left-0 w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary font-extrabold text-sm z-10 shadow-sm">
                        {i + 1}
                      </div>
                      <p className="text-gray-700 font-bold text-lg pt-0.5">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Required Documents */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                  <FileText size={16} />
                  Documentation
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Required Documents</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {university.documentsRequired.map((doc, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-2xl border border-gray-100 bg-white hover:border-primary/20 transition-all">
                      <div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-gray-700 font-bold">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-1 space-y-8">

              {/* Quick Inquiry Form */}
              <div className="bg-white border-2 border-primary/20 rounded-[2.5rem] p-8 sticky top-28 shadow-xl">
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Apply Now</h3>
                <p className="text-gray-500 text-sm mb-6">Take the first step towards your medical career. Our experts will call you back.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Name *"
                      className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-gray-700"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      placeholder="E-mail *"
                      className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-gray-700"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="relative">
                    <div 
                      onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                      className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-gray-700 flex items-center justify-between cursor-pointer"
                    >
                      {formData.country ? (
                        <div className="flex items-center gap-2">
                          <img 
                            src={`https://flagcdn.com/w20/${countriesList.find(c => c.name === formData.country)?.code}.png`} 
                            alt={formData.country} 
                            className="w-5 h-auto rounded-sm shadow-sm"
                          />
                          <span>{formData.country}</span>
                        </div>
                      ) : (
                        <span className="text-gray-500">Select Your Country</span>
                      )}
                      <ChevronDown size={16} className={`text-gray-400 transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                    </div>

                    {isCountryDropdownOpen && (
                      <>
                        <div className="fixed inset-0 z-[1001]" onClick={() => setIsCountryDropdownOpen(false)} />
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-100 rounded-md shadow-lg z-[1002] max-h-48 overflow-y-auto">
                          {countriesList.map((countryOption) => (
                            <div
                              key={countryOption.code}
                              onClick={() => {
                                setFormData({ ...formData, country: countryOption.name });
                                setIsCountryDropdownOpen(false);
                              }}
                              className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 cursor-pointer text-sm text-gray-700 transition-colors"
                            >
                              <img 
                                src={`https://flagcdn.com/w20/${countryOption.code}.png`} 
                                alt={countryOption.name} 
                                className="w-5 h-auto shadow-sm rounded-sm"
                              />
                              <span>{countryOption.name}</span>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  <div className="relative">
                    <select
                      required
                      className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-gray-500 appearance-none"
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    >
                      <option value="">Select Course</option>
                      <option value="MBBS">MBBS</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <ChevronDown size={16} />
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="Select Your State"
                      className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-gray-700"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <ChevronDown size={16} />
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="Select Your City"
                      className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-gray-700"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <ChevronDown size={16} />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="w-16 flex-shrink-0">
                      <input
                        type="text"
                        readOnly
                        value="+91"
                        className="w-full px-2 py-3 rounded-md bg-gray-50 border border-gray-100 text-center text-sm text-gray-500 outline-none"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-gray-700"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#1e4e79] text-white py-3.5 rounded-md font-bold text-sm hover:bg-[#153b5e] transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-primary/20 mt-2 active:scale-95"
                    >
                      {isSubmitting ? 'SUBMITTING...' : 'SUBMIT NOW'}
                    </button>
                  </div>
                </form>
                <div className="mt-8 pt-8 border-t border-gray-50 text-center">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">Hostel & Food</p>
                  <div className="flex items-center justify-center gap-2 text-primary font-bold">
                    <Home size={18} />
                    Indian Food Available
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-28">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 text-center mb-16">Campus Gallery</h2>
          <div className="columns-1 md:columns-3 gap-6 space-y-6">
            {university.gallery.map((img, i) => (
              <div key={i} className="relative rounded-3xl overflow-hidden group">
                <Image
                  src={img}
                  alt={`${university.name} gallery ${i + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default UniversityContent;
