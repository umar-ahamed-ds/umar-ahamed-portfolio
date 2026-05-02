import { motion } from 'framer-motion';
import { FaDatabase, FaBrain, FaCode, FaCogs, FaCheckCircle } from 'react-icons/fa';

export default function About() {
  const highlights = [
    { title: "Data Science", icon: <FaDatabase /> },
    { title: "AI / Machine Learning", icon: <FaBrain /> },
    { title: "Full-Stack Development", icon: <FaCode /> },
    { title: "Data Engineering", icon: <FaCogs /> }
  ];

  const softSkills = ["Problem Solving", "Team Collaboration", "Analytical Thinking"];

  return (
    <section id="about" className="relative min-h-screen pt-24 pb-20 flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0a6ed30a_1px,transparent_1px),linear-gradient(to_bottom,#0a6ed30a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white tracking-wide mb-4"
          >
            ABOUT <span className="text-brand-blue glow-text-blue">ME</span>
          </motion.h2>
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-brand-gold mx-auto glow-gold rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-10 rounded-2xl relative group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 blur-3xl rounded-full pointer-events-none"></div>
            
            <h3 className="text-2xl font-bold text-white mb-2">Umar Ahamed</h3>
            <p className="text-brand-gold font-medium mb-6">Third-year Data Science undergraduate @ SLIIT</p>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I am a third-year Data Science undergraduate at SLIIT with a strong passion for building intelligent, scalable, and user-focused digital solutions.
              </p>
              <p>
                My work combines Data Science, AI/ML, Data Engineering, and Full-Stack Development to transform raw data into meaningful insights and real-world applications.
              </p>
              <p>
                I enjoy building systems that solve practical problems, from data pipelines and BI dashboards to full-stack web platforms and mobile applications.
              </p>
              <p className="font-semibold text-white mt-4 border-l-4 border-brand-blue pl-4">
                My goal is to become a skilled Data Science / AI-ML professional specializing in intelligent systems.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {softSkills.map((skill, idx) => (
                <div key={idx} className="flex items-center text-sm text-gray-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                  <FaCheckCircle className="text-brand-blue mr-2" size={12} />
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 rounded-xl flex flex-col items-center justify-center text-center space-y-4 group border border-white/5 hover:border-brand-blue/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center text-3xl text-brand-blue group-hover:text-brand-gold group-hover:bg-brand-gold/10 transition-colors duration-300 glow-blue group-hover:glow-gold">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-brand-blue transition-colors">
                  {item.title}
                </h4>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
