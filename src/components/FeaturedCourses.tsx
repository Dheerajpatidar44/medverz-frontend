import React from 'react';
import Image from 'next/image';
import { Star, Clock, ArrowRight } from 'lucide-react';

const courses = [
  {
    image: '/course-1.png',
    category: 'Cardiology',
    title: 'Advanced Cardiac Life Support',
    rating: 4.9,
    reviews: 120,
    duration: '8 Weeks',
    price: '$199'
  },
  {
    image: '/course-2.png',
    category: 'Neurology',
    title: 'Clinical Neuroscience Essentials',
    rating: 4.8,
    reviews: 85,
    duration: '10 Weeks',
    price: '$249'
  },
  {
    image: '/course-3.png',
    category: 'Surgery',
    title: 'Modern Surgical Techniques',
    rating: 5.0,
    reviews: 64,
    duration: '12 Weeks',
    price: '$299'
  }
];

const FeaturedCourses = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Top Rated</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Featured Medical Courses
            </h2>
          </div>
          <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
            View All Courses <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={course.image} 
                  alt={course.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary px-4 py-1 rounded-full text-xs font-bold shadow-sm">
                  {course.category}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="flex items-center gap-1 text-yellow-500 mb-3">
                  <Star size={16} fill="currentColor" />
                  <span className="text-sm font-bold text-gray-800">{course.rating}</span>
                  <span className="text-xs text-gray-400 font-normal">({course.reviews} reviews)</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="text-xl font-bold text-primary">
                    {course.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
