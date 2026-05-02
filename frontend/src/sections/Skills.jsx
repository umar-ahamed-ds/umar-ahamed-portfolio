import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaBrain, FaDatabase, FaChartPie, FaMobileAlt, FaTools } from 'react-icons/fa';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaLaptopCode />,
      skills: ["React", "Tailwind CSS", "HTML", "CSS"]
    },
    {
      title: "Backend",
      icon: <FaServer />,
      skills: ["Spring Boot", "Node.js", "Express"]
    },
    {
      title: "Data Science",
      icon: <FaBrain />,
      skills: ["Python", "Pandas", "NumPy", "Scikit-learn"]
    },
    {
      title: "Data Engineering",
      icon: <FaDatabase />,
      skills: ["SQL", "ETL", "Data Warehousing", "SSIS", "SSAS"]
    },
    {
      title: "BI & Analytics",
      icon: <FaChartPie />,
      skills: ["Power BI", "Excel"]
    },
    {
      title: "Mobile",
      icon: <FaMobileAlt />,
      skills: ["Android", "Java", "Kotlin"]
    },
    {
      title: "Tools",
      icon: <FaTools />,
      skills: ["Git", "Docker", "Postman", "GitHub"]
    }
  ];

  return (
    <section id="skills" className="relative min-h-screen pt-24 pb-20 flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0A6ED3]/10 via-transparent to-transparent pointer-events-none opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white tracking-wide mb-4"
          >
            TECHNICAL <span className="text-brand-gold glow-text-gold">SKILLS</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            A comprehensive overview of my technical expertise and the tools I use to build robust solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-6 group border border-white/5 hover:border-brand-blue/50 hover:glow-blue transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center text-2xl text-brand-blue group-hover:text-brand-gold group-hover:bg-brand-gold/10 transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white ml-4 group-hover:text-brand-blue transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1 text-sm font-medium rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-brand-gold hover:bg-brand-gold/10 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
