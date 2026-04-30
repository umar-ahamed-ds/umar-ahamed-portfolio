import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { FaGithub, FaExternalLinkAlt, FaPlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { projects } from '../data/projectsData';

const categories = ["All", "Full-Stack", "Data Engineering", "Machine Learning", "BI & Analytics", "Mobile"];

const ImageSlider = ({ images, videoUrl }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const numImages = images?.length || 0;

  const nextSlide = () => setCurrentIndex((prev) => (prev === numImages - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? numImages - 1 : prev - 1));

  if (numImages === 0 && videoUrl) {
    return (
      <div className="w-full h-48 sm:h-64 bg-brand-blue/10 flex items-center justify-center relative overflow-hidden group">
        <video 
          src={videoUrl} 
          className="w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-gold/10 mix-blend-overlay"></div>
      </div>
    );
  }

  if (numImages === 0) {
    return (
      <div className="w-full h-48 sm:h-64 bg-brand-blue/10 flex items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-gold/10 mix-blend-overlay"></div>
        <FaExternalLinkAlt className="text-brand-blue/40 text-4xl group-hover:scale-110 transition-transform" />
      </div>
    );
  }

  if (numImages === 1) {
    return (
      <div className="w-full h-48 sm:h-64 bg-brand-blue/10 flex items-center justify-center relative overflow-hidden group">
        <img src={images[0]} alt="Project" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-gold/10 mix-blend-overlay"></div>
      </div>
    );
  }

  return (
    <div className="w-full h-48 sm:h-64 relative overflow-hidden group bg-brand-bg">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center bg-brand-blue/10"
        >
          <img src={images[currentIndex]} alt={`Project ${currentIndex + 1}`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-gold/10 mix-blend-overlay"></div>
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button onClick={prevSlide} className="p-2 rounded-full glass-card hover:bg-brand-blue/30 text-white transition-colors z-10">
          <FaChevronLeft size={14} />
        </button>
        <button onClick={nextSlide} className="p-2 rounded-full glass-card hover:bg-brand-blue/30 text-white transition-colors z-10">
          <FaChevronRight size={14} />
        </button>
      </div>
      
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2 z-10">
        {images.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-4 bg-brand-gold glow-gold' : 'w-1.5 bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filteredProjects = projects.filter(p => 
    filter === "All" ? true : p.category.includes(filter)
  );

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 pb-20 overflow-hidden" id="projects">
      {/* Background Particles */}
      <Particles
        id="tsparticles-projects"
        init={particlesInit}
        options={{
          fullScreen: { enable: false, zIndex: 0 },
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          particles: {
            color: { value: ["#0A6ED3", "#FFD700"] },
            links: { color: "#0A6ED3", distance: 150, enable: true, opacity: 0.2, width: 1 },
            move: { enable: true, random: true, speed: 0.8, outModes: "out" },
            number: { density: { enable: true, area: 800 }, value: 40 },
            opacity: { value: 0.4 },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0a6ed30a_1px,transparent_1px),linear-gradient(to_bottom,#0a6ed30a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white tracking-wide mb-4"
          >
            MY <span className="text-brand-blue glow-text-blue">PROJECTS</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            A collection of my work across Full-Stack Development, Data Engineering, Machine Learning, and Mobile Applications.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === cat 
                  ? 'bg-brand-blue text-white glow-blue border-brand-blue' 
                  : 'glass-card text-gray-400 hover:text-brand-gold hover:border-brand-gold/50'
              } border`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`glass-card rounded-2xl overflow-hidden flex flex-col group hover:glow-blue hover:-translate-y-2 transition-all duration-500 ${project.featured ? 'md:col-span-2 lg:col-span-2 lg:flex-row' : ''}`}
                style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
              >
                {/* Image Section */}
                <div className={`${project.featured ? 'lg:w-1/2' : 'w-full'} border-b lg:border-b-0 lg:border-r border-brand-blue/20 relative overflow-hidden`}>
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-brand-gold text-brand-bg text-xs font-bold rounded-full glow-gold shadow-lg uppercase tracking-wider">
                        Featured
                      </span>
                    </div>
                  )}
                  <ImageSlider images={project.images} videoUrl={project.videoUrl} />
                </div>

                {/* Content Section */}
                <div className={`${project.featured ? 'lg:w-1/2' : 'w-full'} p-6 flex flex-col flex-grow relative`}>
                  
                  {project.featured && (
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 blur-3xl rounded-full pointer-events-none"></div>
                  )}

                  <div className="mb-2 flex flex-wrap gap-2">
                    {project.category.map((c, i) => (
                      <span key={i} className="text-xs text-brand-gold font-medium tracking-wider uppercase">
                        {c}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className={`font-bold text-white mb-3 group-hover:text-brand-blue transition-colors ${project.featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights or Tech Stack */}
                  <div className="mb-6">
                    {project.highlights ? (
                      <ul className="text-sm text-gray-300 space-y-1">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-brand-blue mr-2 mt-1 text-xs">▹</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {project.tech?.map((t, i) => (
                          <span key={i} className="px-2 py-1 bg-brand-blue/10 border border-brand-blue/30 rounded text-xs text-brand-blue">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-brand-blue/10">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center text-sm font-semibold text-gray-300 hover:text-brand-gold transition-colors"
                    >
                      <FaGithub className="mr-2" size={16} /> GitHub
                    </a>
                    
                    {project.videoUrl && (
                      <button 
                        onClick={() => setSelectedVideo(project.videoUrl)}
                        className="flex items-center text-sm font-semibold text-gray-300 hover:text-brand-blue transition-colors ml-4"
                      >
                        <FaPlay className="mr-2 text-brand-blue" size={14} /> View {project.videoUrl.includes('ProjectDemo') ? 'Demo' : 'Video'}
                      </button>
                    )}
                    
                    {!project.videoUrl && (
                       <button className="flex items-center text-sm font-semibold text-gray-300 hover:text-brand-blue transition-colors ml-4">
                         <FaExternalLinkAlt className="mr-2 text-brand-blue" size={14} /> Live Demo
                       </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Video Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
              onClick={() => setSelectedVideo(null)}
            >
              <motion.div 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative w-full max-w-4xl bg-brand-bg border border-brand-blue/30 rounded-2xl overflow-hidden glass-card shadow-2xl"
                onClick={e => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-4 right-4 text-white hover:text-brand-gold z-10 bg-black/50 w-10 h-10 flex items-center justify-center rounded-full transition-colors"
                >
                  ✕
                </button>
                <video 
                  src={selectedVideo} 
                  className="w-full h-auto max-h-[80vh] outline-none"
                  controls 
                  autoPlay 
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
