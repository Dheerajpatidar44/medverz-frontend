import React from "react";
import { BookOpen, Video, Users, Award } from "lucide-react";

const FeatureStrip = () => {
  return (
    <section className="relative z-20 -mt-10 md:-mt-12 container mx-auto px-2 sm:px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl py-3 md:py-8 px-2 md:px-4 lg:px-10 grid grid-cols-2 md:grid-cols-2 lg:flex lg:flex-row items-center justify-between gap-8 border border-gray-100">
        {/* Online Course */}
        <div className="flex items-center gap-4 flex-1 min-w-[200px]">
          <div className="bg-[#E8F5E9] p-2 md:p-3 rounded-full text-blue-800 flex-shrink-0">
            <BookOpen className="w-4 h-4 md:w-6 md:h-6" />
          </div>
          <div>
            <h3 className="font-bold text-[#1F2937] text-sm md:text-base leading-tight">
              Online Course
            </h3>
            <p className="text-[9px] md:text-xs text-gray-500 mt-1 leading-tight">
              Learn from industry experts with flexible schedules.
            </p>
          </div>
        </div>

        {/* Divider - Only Desktop */}
        <div className="hidden lg:block w-[1px] h-12 bg-gray-100"></div>

        {/* Live Webinar */}
        <div className="flex items-center gap-4 flex-1 min-w-[200px]">
          <div className="bg-[#E8F5E9] p-2 md:p-3 rounded-full text-blue-800 flex-shrink-0">
            <Video className="w-4 h-4 md:w-6 md:h-6" />
          </div>
          <div>
            <h3 className="font-bold text-[#1F2937] text-sm md:text-base leading-tight">
              Live Webinar
            </h3>
            <p className="text-[9px] md:text-xs text-gray-500 mt-1 leading-tight">
              Join interactive sessions and ask questions in real-time.
            </p>
          </div>
        </div>

        {/* Divider - Only Desktop */}
        <div className="hidden lg:block w-[1px] h-12 bg-gray-100"></div>

        {/* Career Mentoring */}
        <div className="flex items-center gap-4 flex-1 min-w-[200px]">
          <div className="bg-[#E8F5E9] p-2 md:p-3 rounded-full text-blue-800 flex-shrink-0">
            <Users className="w-4 h-4 md:w-6 md:h-6" />
          </div>
          <div>
            <h3 className="font-bold text-[#1F2937] text-sm md:text-base leading-tight">
              Career Mentoring
            </h3>
            <p className="text-[9px] md:text-xs text-gray-500 mt-1 leading-tight">
              Get 1-on-1 guidance to accelerate your career growth.
            </p>
          </div>
        </div>

        {/* Divider - Only Desktop */}
        <div className="hidden lg:block w-[1px] h-12 bg-gray-100"></div>

        {/* Certification */}
        <div className="flex items-center gap-4 flex-1 min-w-[200px]">
          <div className="bg-[#E8F5E9] p-2 md:p-3 rounded-full text-blue-800 flex-shrink-0">
            <Award className="w-4 h-4 md:w-6 md:h-6" />
          </div>
          <div>
            <h3 className="font-bold text-[#1F2937] text-sm md:text-base leading-tight">
              Certification
            </h3>
            <p className="text-[9px] md:text-xs text-gray-500 mt-1 leading-tight">
              Earn recognized certificates to boost your professional profile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureStrip;
