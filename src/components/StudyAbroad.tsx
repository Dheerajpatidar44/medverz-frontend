'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { School, Building2, Library, Landmark, GraduationCap, Hospital } from 'lucide-react';

const universityData: { [key: string]: any[] } = {
  'United Kingdom': [
    { name: 'University of Liverpool', location: 'Liverpool, United Kingdom', courses: '400+', color: 'bg-red-50', icon: <School className="text-red-600" /> },
    { name: 'Queen Mary University', location: 'London, United Kingdom', courses: '350+', color: 'bg-blue-50', icon: <Building2 className="text-blue-600" /> },
    { name: 'University of Birmingham', location: 'Birmingham, United Kingdom', courses: '500+', color: 'bg-orange-50', icon: <Library className="text-orange-600" /> },
    { name: 'University of Sheffield', location: 'Sheffield, United Kingdom', courses: '380+', color: 'bg-purple-50', icon: <GraduationCap className="text-purple-600" /> },
    { name: 'Coventry University', location: 'Coventry, United Kingdom', courses: '280+', color: 'bg-teal-50', icon: <Landmark className="text-teal-600" /> },
    { name: 'Anglia Ruskin University', location: 'Cambridge, United Kingdom', courses: '420+', color: 'bg-indigo-50', icon: <Hospital className="text-indigo-600" /> },
  ], 
  'USA': [
    { name: 'Harvard University', location: 'Cambridge, USA', courses: '600+', color: 'bg-red-50', icon: <Library className="text-red-700" /> },
    { name: 'Stanford University', location: 'Stanford, USA', courses: '550+', color: 'bg-red-50', icon: <School className="text-red-800" /> },
    { name: 'Johns Hopkins University', location: 'Baltimore, USA', courses: '400+', color: 'bg-blue-50', icon: <Hospital className="text-blue-700" /> },
    { name: 'NYU', location: 'New York, USA', courses: '450+', color: 'bg-purple-50', icon: <Building2 className="text-purple-700" /> },
    { name: 'UCLA', location: 'Los Angeles, USA', courses: '500+', color: 'bg-blue-50', icon: <Landmark className="text-blue-800" /> },
    { name: 'MIT', location: 'Cambridge, USA', courses: '520+', color: 'bg-gray-50', icon: <GraduationCap className="text-gray-700" /> },
  ],
  'Germany': [
    { name: 'Heidelberg University', location: 'Heidelberg, Germany', courses: '300+', color: 'bg-blue-50', icon: <Library className="text-blue-600" /> },
    { name: 'LMU Munich', location: 'Munich, Germany', courses: '400+', color: 'bg-green-50', icon: <School className="text-green-600" /> },
    { name: 'Technical University of Munich', location: 'Munich, Germany', courses: '450+', color: 'bg-blue-50', icon: <Building2 className="text-blue-700" /> },
    { name: 'Humboldt University', location: 'Berlin, Germany', courses: '320+', color: 'bg-red-50', icon: <Landmark className="text-red-600" /> },
    { name: 'Free University of Berlin', location: 'Berlin, Germany', courses: '340+', color: 'bg-yellow-50', icon: <GraduationCap className="text-yellow-600" /> },
    { name: 'RWTH Aachen', location: 'Aachen, Germany', courses: '280+', color: 'bg-blue-50', icon: <Library className="text-blue-800" /> },
  ],
  'Canada': [
    { name: 'University of Toronto', location: 'Toronto, Canada', courses: '700+', color: 'bg-blue-50', icon: <School className="text-blue-700" /> },
    { name: 'McGill University', location: 'Montreal, Canada', courses: '600+', color: 'bg-red-50', icon: <Library className="text-red-600" /> },
    { name: 'UBC', location: 'Vancouver, Canada', courses: '580+', color: 'bg-blue-50', icon: <Building2 className="text-blue-600" /> },
    { name: 'University of Alberta', location: 'Edmonton, Canada', courses: '400+', color: 'bg-green-50', icon: <Landmark className="text-green-700" /> },
    { name: 'University of Waterloo', location: 'Waterloo, Canada', courses: '350+', color: 'bg-yellow-50', icon: <GraduationCap className="text-yellow-700" /> },
    { name: 'McMaster University', location: 'Hamilton, Canada', courses: '320+', color: 'bg-red-50', icon: <Hospital className="text-red-700" /> },
  ],
  'Russia': [
    { name: 'Moscow State University', location: 'Moscow, Russia', courses: '500+', color: 'bg-blue-50', icon: <Landmark className="text-blue-700" /> },
    { name: 'Saint Petersburg University', location: 'St. Petersburg, Russia', courses: '450+', color: 'bg-red-50', icon: <School className="text-red-700" /> },
    { name: 'Kazan Federal University', location: 'Kazan, Russia', courses: '380+', color: 'bg-yellow-50', icon: <Library className="text-yellow-700" /> },
    { name: 'Sechenov University', location: 'Moscow, Russia', courses: '300+', color: 'bg-blue-50', icon: <Hospital className="text-blue-600" /> },
    { name: 'Novosibirsk State University', location: 'Novosibirsk, Russia', courses: '320+', color: 'bg-red-50', icon: <Building2 className="text-red-600" /> },
    { name: 'Tomsk State University', location: 'Tomsk, Russia', courses: '280+', color: 'bg-blue-50', icon: <GraduationCap className="text-blue-800" /> },
  ],
};

const countries = [
  { name: 'United Kingdom', flag: '/flag-uk.png' },
  { name: 'USA', flag: '/flag-usa.png' },
  { name: 'Germany', flag: '/flag-germany.png' },
  { name: 'Canada', flag: '/flag-canada.png' },
  { name: 'Russia', flag: '/flag-russia.png' },
];

const StudyAbroad = () => {
  const [activeTab, setActiveTab] = useState('United Kingdom');

  return (
    <section className="py-10 md:py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 md:px-12 lg:px-28">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12">
          Top Universities to <span className="text-primary">Study Abroad</span>
        </h2>

        {/* Tabs */}
        <div className="flex items-center gap-8 border-b border-gray-200 mb-4 md:mb-12 overflow-x-auto pb-4 scrollbar-hide">
          {countries.map((country) => (
            <button
              key={country.name}
              onClick={() => setActiveTab(country.name)}
              className={`flex items-center gap-2 pb-4 transition-all relative whitespace-nowrap ${
                activeTab === country.name 
                  ? 'text-primary border-b-2 border-primary font-bold' 
                  : 'text-gray-500 hover:text-primary font-medium'
              }`}
              suppressHydrationWarning
            >
              <div className="w-6 h-6 rounded-full overflow-hidden shadow-sm border border-gray-100 flex-shrink-0">
                <Image src={country.flag} alt={country.name} width={24} height={24} className="object-cover" />
              </div>
              <span>{country.name}</span>
            </button>
          ))}
        </div>

        {/* University Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {universityData[activeTab]?.map((uni, index) => (
            <div 
              key={index} 
              className="bg-white p-2 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                {/* Logo with Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-sm border border-gray-50 flex-shrink-0 transition-transform group-hover:scale-110 ${uni.color}`}>
                  {uni.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 leading-tight mb-1 group-hover:text-primary transition-colors">
                    {uni.name}
                  </h3>
                  <p className="text-xs text-gray-400 font-medium">
                    {uni.location}
                  </p>
                </div>
              </div>
              <div className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-md text-[10px] font-bold whitespace-nowrap border border-yellow-100 group-hover:bg-yellow-100 transition-colors">
                {uni.courses} Courses
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyAbroad;
