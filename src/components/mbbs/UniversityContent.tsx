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

  const renderContent = (text: string) => {
    if (!text) return null;
    const blocks = text.split('\n\n');
    return blocks.map((block, i) => {
      if (block.startsWith('- ')) {
        const items = block.split('\n').map(item => item.replace('- ', '').trim());
        return (
          <ul key={i} className="list-disc pl-5 mt-4 space-y-2 text-gray-700">
            {items.map((item, j) => <li key={j}>{item}</li>)}
          </ul>
        );
      }
      if (block.includes('\n- ')) {
        const parts = block.split('\n- ');
        const pText = parts[0];
        const items = parts.slice(1).map(item => item.trim());
        return (
          <div key={i} className="mt-4">
            <p className="text-gray-700 leading-relaxed">{pText}</p>
            <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-700">
              {items.map((item, j) => <li key={j}>{item}</li>)}
            </ul>
          </div>
        );
      }
      return <p key={i} className="text-gray-700 leading-relaxed mt-4 whitespace-pre-line">{block}</p>;
    });
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
            <div className="lg:col-span-2 space-y-12">
              
              {/* Image Placeholder / Banner */}
              <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-sm mb-12">
                <Image
                  src={university.image}
                  alt={university.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Main Overview Section */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">{university.name}</h2>
                <div className="prose max-w-none text-gray-700 space-y-4">
                  {renderContent(university.overview)}
                </div>
              </div>

              {/* Overview Table */}
              <div className="pt-6">
                <h3 className="text-2xl font-bold text-primary mb-6">{university.name} Overview</h3>
                <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                  <table className="w-full text-left border-collapse text-sm">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-4 font-bold bg-gray-50 border-r border-gray-200 w-1/3">Year of Establishment</td>
                        <td className="p-4 bg-white">{university.established}</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold bg-gray-50 border-r border-gray-200">Type of University</td>
                        <td className="p-4 bg-white">Government</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold bg-gray-50 border-r border-gray-200">Duration of MBBS</td>
                        <td className="p-4 bg-white">{university.duration}</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold bg-gray-50 border-r border-gray-200">Recognitions</td>
                        <td className="p-4 bg-white">NMC, WHO Approved, WDOMS, ECFMG, FAIMER</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold bg-gray-50 border-r border-gray-200">Intake Period</td>
                        <td className="p-4 bg-white">September</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold bg-gray-50 border-r border-gray-200">Medium of Teaching</td>
                        <td className="p-4 bg-white">{university.medium}</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold bg-gray-50 border-r border-gray-200">NEET Requirement</td>
                        <td className="p-4 bg-white">Yes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Fees Table */}
              <div id="fees" className="pt-6">
                <h3 className="text-2xl font-bold text-primary mb-6">{university.name} Fee Structure</h3>
                <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th className="p-4 font-bold border-r border-primary/20">Particulars</th>
                        <th className="p-4 font-bold">Amount (Per Year)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-4 font-medium border-r border-gray-200">Tuition Fees</td>
                        <td className="p-4 bg-white">{university.fees.tuition}</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium border-r border-gray-200">Hostel Fees</td>
                        <td className="p-4 bg-white">{university.fees.hostel}</td>
                      </tr>
                      {university.fees.mess && (
                        <tr>
                          <td className="p-4 font-medium border-r border-gray-200">Mess Fees</td>
                          <td className="p-4 bg-white">{university.fees.mess}</td>
                        </tr>
                      )}
                      {university.fees.medicalVisa && (
                        <tr>
                          <td className="p-4 font-medium border-r border-gray-200">Medical/Visa/Insurance</td>
                          <td className="p-4 bg-white">{university.fees.medicalVisa}</td>
                        </tr>
                      )}
                      {university.fees.oneTime && (
                        <tr>
                          <td className="p-4 font-medium border-r border-gray-200">One Time Charges</td>
                          <td className="p-4 bg-white">{university.fees.oneTime}</td>
                        </tr>
                      )}
                      <tr className="bg-gray-50">
                        <td className="p-4 font-bold border-r border-gray-200">Total Package</td>
                        <td className="p-4 font-bold">{university.fees.total}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 italic mt-3">*Fees mentioned above are approximate and subject to change as per currency fluctuations.</p>
              </div>

              {/* Admission Eligibility & Process */}
              {university.admissionProcess.length > 0 && (
                <div className="pt-6">
                  <h3 className="text-2xl font-bold text-primary mb-6">Admission Procedure</h3>
                  <ul className="list-decimal pl-5 space-y-2 text-gray-700 marker:font-bold marker:text-primary">
                    {university.admissionProcess.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Documents Required */}
              {university.documentsRequired.length > 0 && (
                <div className="pt-6">
                  <h3 className="text-2xl font-bold text-primary mb-6">Documents Required For Admission</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {university.documentsRequired.map((doc, i) => (
                      <li key={i}>{doc}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Why Study */}
              {university.whyStudy.length > 0 && (
                <div className="pt-6">
                  <h3 className="text-2xl font-bold text-primary mb-6">Why Study MBBS At {university.name}</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {university.whyStudy.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Student Life / Hostel */}
              {university.hostelFacility && (
                <div className="pt-6">
                  <h3 className="text-2xl font-bold text-primary mb-6">Student Life At {university.name}</h3>
                  <div className="prose max-w-none text-gray-700 space-y-4">
                    {renderContent(university.hostelFacility)}
                  </div>
                </div>
              )}

              {/* Gallery Grid */}
              {university.gallery && university.gallery.length > 0 && (
                <div className="pt-8">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {university.gallery.map((img, i) => (
                      <div key={i} className="relative aspect-[4/3] rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                        <Image src={img} alt={`${university.name} gallery`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pagination Placeholders */}
              <div className="flex justify-between items-center border-t border-gray-200 pt-8 mt-12">
                <Link href="/mbbs" className="text-primary font-bold hover:underline flex items-center gap-2">
                  &larr; Previous Post
                </Link>
                <Link href="/mbbs" className="text-primary font-bold hover:underline flex items-center gap-2">
                  Next Post &rarr;
                </Link>
              </div>

            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-1">

              <div className="sticky top-28 space-y-8 pb-12">
                {/* Quick Inquiry Form */}
                <div className="bg-white border-2 border-primary/20 rounded-[2.5rem] p-8 shadow-xl">
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

              {/* Recent Blogs */}
              <div className="bg-white border-t-4 border-t-primary border border-gray-100 shadow-xl rounded-2xl p-6">
                <div className="flex items-center gap-2 text-primary font-bold mb-6 text-lg border-b border-gray-100 pb-4">
                  Recent Blogs
                </div>
                <div className="space-y-4">
                  <Link href="#" className="block group">
                    <p className="text-sm font-bold text-gray-800 group-hover:text-primary transition-colors line-clamp-2">
                      Common Admission Mistakes to Avoid for MBBS in Russia
                    </p>
                    <span className="text-xs text-gray-400 mt-1 block">May 12, 2026</span>
                  </Link>
                  <Link href="#" className="block group border-t border-gray-50 pt-4">
                    <p className="text-sm font-bold text-gray-800 group-hover:text-primary transition-colors line-clamp-2">
                      FMGL Regulations 2021 Explained for Indian MBBS Abroad Students
                    </p>
                    <span className="text-xs text-gray-400 mt-1 block">May 10, 2026</span>
                  </Link>
                  <Link href="#" className="block group border-t border-gray-50 pt-4">
                    <p className="text-sm font-bold text-gray-800 group-hover:text-primary transition-colors line-clamp-2">
                      NMC Rules for MBBS Abroad in 2026: A Complete Breakdown
                    </p>
                    <span className="text-xs text-gray-400 mt-1 block">May 05, 2026</span>
                  </Link>
                  <Link href="#" className="block group border-t border-gray-50 pt-4">
                    <p className="text-sm font-bold text-gray-800 group-hover:text-primary transition-colors line-clamp-2">
                      MBBS Fees in Russia vs Private Medical College Fees in India
                    </p>
                    <span className="text-xs text-gray-400 mt-1 block">May 02, 2026</span>
                  </Link>
                </div>
              </div>

            </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UniversityContent;
