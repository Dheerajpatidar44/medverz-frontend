import React from 'react';
import Image from 'next/image';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  return (
    <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto animate-fade-in-up delay-100">
            {subtitle}
          </p>
        )}
        <div className="mt-8 w-24 h-1.5 bg-primary mx-auto rounded-full animate-fade-in-up delay-200" />
      </div>
    </section>
  );
};

export default PageHero;
