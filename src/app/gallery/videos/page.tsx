'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '@/components/PageHero';
import { Play, X, Video, MonitorPlay } from 'lucide-react';

const videoGallery = [
  { 
    id: 1, 
    thumbnail: '/images/gallery/gallery1.jpeg', 
    title: 'Life at Medverz - Student Journey', 
    duration: '01:24',
    videoUrl: '/images/gallery/gallery1.mp4'
  },
  { 
    id: 2, 
    thumbnail: '/images/gallery/gallery2.jpeg', 
    title: 'Global Medical Excellence', 
    duration: '02:10',
    videoUrl: '/images/gallery/gallery2.mp4' 
  },
  { 
    id: 3, 
    thumbnail: '/images/gallery/gallery3.jpeg', 
    title: 'University Tour & Facilities', 
    duration: '03:45',
    videoUrl: '/images/gallery/gallery3.mp4' 
  },
  { 
    id: 4, 
    thumbnail: '/images/gallery/gallery4.jpeg', 
    title: 'Success Stories Abroad', 
    duration: '01:58',
    videoUrl: '/images/gallery/gallery4.mp4' 
  },
];

const VideosPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Video Gallery" 
        subtitle="Watch the experiences of our students and explore world-class medical universities in action."
        backgroundImage="/images/gallery/gallery1.jpeg"
      />

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-28">
          
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-primary/10 text-primary rounded-2xl">
                <MonitorPlay size={28} />
            </div>
            <div>
                <h2 className="text-3xl font-black text-gray-900">Featured Videos</h2>
                <p className="text-gray-500 font-medium italic">Witness the excellence through our lens</p>
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {videoGallery.map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group"
              >
                {/* Video Card */}
                <div 
                    className="relative aspect-video rounded-[2rem] overflow-hidden cursor-pointer shadow-lg group-hover:shadow-2xl transition-all duration-500"
                    onClick={() => setSelectedVideo(video.videoUrl)}
                >
                  <Image 
                    src={video.thumbnail} 
                    alt={video.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/20 transition-colors duration-500" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                      <Play size={28} fill="currentColor" className="ml-1" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-white/20">
                    {video.duration}
                  </div>
                </div>

                {/* Title Line (As requested) */}
                <div className="mt-6 space-y-2 px-2">
                    <div className="flex items-center gap-2">
                        <span className="w-8 h-1 bg-primary rounded-full group-hover:w-16 transition-all duration-500" />
                        <span className="text-primary font-black text-[10px] uppercase tracking-[0.2em]">Video Highlight</span>
                    </div>
                    <h3 className="text-xl font-black text-gray-900 group-hover:text-primary transition-colors duration-300 leading-tight">
                        {video.title}
                    </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-gray-950/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedVideo(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-primary transition-colors p-3 bg-white/10 rounded-full backdrop-blur-md border border-white/20"
              onClick={() => setSelectedVideo(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <video 
                src={selectedVideo} 
                controls 
                autoPlay
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-24 bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="max-w-3xl mx-auto space-y-10">
                <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center text-primary mx-auto backdrop-blur-md border border-white/10">
                    <Video size={48} />
                </div>
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black leading-tight">Ready to Capture Your Future?</h2>
                    <p className="text-gray-400 text-lg md:text-xl font-medium">Join our global community and start your journey towards excellence.</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                    <button className="bg-primary text-white px-10 py-5 rounded-full font-black text-lg hover:bg-primary-dark transition-all shadow-2xl shadow-primary/40 active:scale-95 uppercase tracking-widest w-full sm:w-auto">
                        Enroll Now
                    </button>
                    <button className="bg-white/5 border-2 border-white/20 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-white/10 transition-all active:scale-95 uppercase tracking-widest w-full sm:w-auto backdrop-blur-md">
                        Get Counseling
                    </button>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
};

export default VideosPage;
