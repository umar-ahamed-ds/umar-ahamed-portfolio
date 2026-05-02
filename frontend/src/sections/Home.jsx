import { useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { FaGithub, FaLinkedin, FaEnvelope, FaDatabase, FaCode, FaChartBar, FaCloudUploadAlt, FaBrain, FaCogs } from 'react-icons/fa';
import profileImg from '../assets/umarprofile.png';

export default function Home() {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const featureCards = [
    { title: "Data Collection", icon: <FaDatabase /> },
    { title: "Data Pipeline", icon: <FaCogs /> },
    { title: "Model Building", icon: <FaBrain /> },
    { title: "Development", icon: <FaCode /> },
    { title: "Visualization", icon: <FaChartBar /> },
    { title: "Deployment", icon: <FaCloudUploadAlt /> }
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false, zIndex: 0 },
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              resize: true,
            },
            modes: {
              grab: { distance: 150, links: { opacity: 0.5 } }
            },
          },
          particles: {
            color: { value: ["#0A6ED3", "#FFD700"] },
            links: {
              color: "#0A6ED3",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: true,
              speed: 1,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0a6ed31a_1px,transparent_1px),linear-gradient(to_bottom,#0a6ed31a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-grow flex flex-col justify-center pb-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Profile & Details */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-6"
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-brand-blue/50 animate-pulse-glow"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1.1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              ></motion.div>
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-brand-gold/80 glow-gold animate-float relative z-10 bg-brand-bg p-1">
                <img 
                  src={profileImg} 
                  alt="Umar Ahamed" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white tracking-wide glow-text-blue mb-2">Umar Ahamed</h2>
              <p className="text-brand-blue font-semibold mb-1">Data Science Undergraduate | Full-Stack Developer</p>
              <p className="text-gray-400 text-sm max-w-sm">Building intelligent solutions through data and code</p>
            </div>

            <div className="flex space-x-4">
              {[
                { Icon: FaGithub, href: "https://github.com/umar-ahamed-ds" },
                { Icon: FaLinkedin, href: "https://www.linkedin.com/in/umar-ahamed-" },
                { Icon: FaEnvelope, href: "mailto:umarahamed852@gmail.com" }
              ].map(({ Icon, href }, idx) => (
                <motion.a 
                  key={idx}
                  href={href} 
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-300 hover:text-brand-gold hover:border-brand-gold transition-all duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Center/Right: Headline & Cards */}
          <div className="lg:col-span-8 flex flex-col lg:items-end text-center lg:text-right space-y-10">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full"
            >
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-4">
                DATA <span className="text-brand-gold glow-text-gold">SCIENCE</span> <br className="hidden md:block"/>
                <span className="text-3xl md:text-4xl tracking-[0.2em] font-light text-gray-400 my-2 block">MEETS</span>
                SOFTWARE <span className="text-brand-gold glow-text-gold">ENGINEERING</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl lg:ml-auto">
                Building intelligent solutions through data and code
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-end space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-md bg-brand-blue text-white font-bold tracking-wide hover:bg-blue-600 transition-colors glow-blue"
                >
                  Explore Projects
                </motion.button>
                <motion.a 
                  href="/CV/Umar CV DS Demo.pdf"
                  download="Umar_Ahamed_CV.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex justify-center items-center px-8 py-3 rounded-md glass-card text-brand-gold font-bold tracking-wide hover:bg-brand-gold/10 transition-colors"
                >
                  Download CV
                </motion.a>
              </div>
            </motion.div>

            {/* Dashboard Cards Grid */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl mt-8"
            >
              {/* Data Pipeline Card */}
              <div className="glass-card p-4 rounded-xl col-span-1 md:col-span-2 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-brand-gold opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-xs text-gray-400 uppercase tracking-widest mb-4 text-left">Data Pipeline</h3>
                <div className="flex justify-between items-center text-sm font-medium">
                  <div className="flex flex-col items-center"><FaDatabase className="text-brand-blue mb-2 text-xl"/> Source</div>
                  <div className="text-gray-500">→</div>
                  <div className="flex flex-col items-center"><FaCogs className="text-gray-300 mb-2 text-xl"/> ETL</div>
                  <div className="text-gray-500">→</div>
                  <div className="flex flex-col items-center"><FaCloudUploadAlt className="text-gray-300 mb-2 text-xl"/> Warehouse</div>
                  <div className="text-gray-500">→</div>
                  <div className="flex flex-col items-center"><FaChartBar className="text-brand-gold mb-2 text-xl"/> Analytics</div>
                </div>
              </div>

              {/* Circular Progress & Analytics */}
              <div className="glass-card p-4 rounded-xl flex items-center justify-center group relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-24 h-24">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-gray-700" />
                    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="6" fill="transparent" strokeDasharray="251.2" strokeDashoffset="55.26" className="text-brand-gold glow-text-gold transition-all duration-1000 ease-out" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">78%</div>
                </div>
                <div className="ml-4 text-left">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Model Accuracy</p>
                  <p className="text-lg font-semibold text-brand-blue">+5.4%</p>
                </div>
              </div>

              {/* Bar Chart Mockup */}
              <div className="glass-card p-4 rounded-xl flex flex-col justify-end h-32 group relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-xs text-gray-400 uppercase tracking-widest mb-auto text-left">Performance</h3>
                <div className="flex items-end justify-between space-x-2 h-16 w-full px-2">
                  {[40, 70, 45, 90, 65, 80].map((h, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                      className={`w-full rounded-t-sm ${i === 3 ? 'bg-brand-gold glow-gold' : 'bg-brand-blue/60'}`}
                    ></motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Bottom Feature Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {featureCards.map((card, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5, backgroundColor: "rgba(10, 110, 211, 0.1)" }}
              className="glass-card p-4 rounded-lg flex flex-col items-center justify-center text-center space-y-3 cursor-pointer group"
            >
              <div className="text-2xl text-gray-400 group-hover:text-brand-gold transition-colors duration-300">
                {card.icon}
              </div>
              <p className="text-xs font-semibold tracking-wider text-gray-300 group-hover:text-white transition-colors">{card.title}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Decorative Flowing Lines (Bottom) */}
      <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden pointer-events-none z-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full opacity-30">
          <path d="M0,0 V46.29 C150,46.29 250,110 400,110 C550,110 650,46.29 800,46.29 C950,46.29 1050,110 1200,110 V0 Z" fill="none" stroke="#0A6ED3" strokeWidth="2" className="animate-draw"></path>
          <path d="M0,0 V60.29 C200,60.29 300,10 450,10 C600,10 700,60.29 850,60.29 C1000,60.29 1100,10 1200,10 V0 Z" fill="none" stroke="#FFD700" strokeWidth="1" className="animate-draw" style={{ animationDelay: '1s' }}></path>
        </svg>
      </div>

    </section>
  );
}
