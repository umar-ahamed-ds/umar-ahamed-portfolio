import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

export default function Experience() {
  const experiences = [
    {
      title: "Full-Stack Developer",
      project: "Smart Campus 360",
      focus: "User Management, OAuth2.0 Authentication, 2FA, Role Management, and Notification Module",
      description: "Worked on a production-inspired university management platform built to streamline campus operations through role-based access, secure authentication, and notification workflows.",
      contributions: [
        "Implemented role-based access control",
        "Integrated OAuth2.0 authentication",
        "Added Two-Factor Authentication (2FA)",
        "Developed user management features",
        "Built manual and automatic notification flows",
        "Created Gmail-based OTP verification",
        "Built REST APIs using Spring Boot",
        "Designed responsive UI using React and Tailwind CSS"
      ],
      tech: ["React", "Tailwind CSS", "Spring Boot", "MySQL", "OAuth2.0", "JWT", "2FA"]
    },
    {
      title: "Data Engineer / BI Developer",
      project: "AML Data Warehouse & BI Project",
      description: "Designed and implemented a complete Data Warehousing and Business Intelligence solution using an Anti-Money Laundering transaction dataset.",
      contributions: [
        "Designed a star schema data warehouse",
        "Built ETL pipelines using SSIS",
        "Developed an OLAP cube using SSAS",
        "Created Power BI dashboards for analytics",
        "Applied dimensional modelling concepts",
        "Used fact and dimension tables for analytical reporting"
      ],
      tech: ["SQL Server", "SSIS", "SSAS", "Power BI", "Excel"]
    },
    {
      title: "Data Analyst / Statistical Modelling Contributor",
      project: "Statistical Analysis Project",
      description: "Analyzed learning engagement vs long-term knowledge retention using statistical modelling techniques.",
      contributions: [
        "Performed regression modelling",
        "Conducted hypothesis testing",
        "Applied feature selection",
        "Created data visualizations",
        "Interpreted statistical outputs",
        "Evaluated data quality and limitations"
      ],
      tech: ["Python", "Statistics", "Regression Analysis", "Data Visualization"]
    },
    {
      title: "Full-Stack / IoT Developer",
      project: "FarmNex Smart Farm Management System",
      description: "Worked on a smart farming platform designed to support data-driven agriculture and farm management.",
      contributions: [
        "Developed farm management features",
        "Added user management workflows",
        "Implemented OTP verification",
        "Supported Gmail-based notification flows",
        "Worked with inventory, order, and smart farm modules",
        "Contributed to full-stack MERN development"
      ],
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Stripe", "OTP Verification"]
    },
    {
      title: "Java Application Developer",
      project: "Vehicle Rental System",
      description: "Developed a Java and MySQL-based vehicle rental system with CRUD operations and booking management.",
      contributions: [
        "Built vehicle management features",
        "Developed vehicle booking workflow",
        "Implemented admin and user role separation",
        "Connected application with MySQL using JDBC",
        "Applied OOP concepts including classes, objects, inheritance, and encapsulation"
      ],
      tech: ["Java", "MySQL", "JDBC", "Eclipse IDE"]
    }
  ];

  return (
    <section id="experience" className="relative min-h-screen pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0a6ed30a_1px,transparent_1px),linear-gradient(to_bottom,#0a6ed30a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white tracking-wide mb-4"
          >
            EXPERIENCE & <span className="text-brand-blue glow-text-blue">PROJECTS</span>
          </motion.h2>
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-brand-gold mx-auto glow-gold rounded-full"
          ></motion.div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-6 md:p-8 border border-white/5 hover:border-brand-blue/30 hover:glow-blue transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 blur-3xl rounded-full pointer-events-none group-hover:bg-brand-blue/10 transition-colors duration-500"></div>
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-brand-blue transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-lg font-semibold text-brand-gold mb-2">{exp.project}</p>
                </div>
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-brand-blue/10 text-brand-blue group-hover:bg-brand-gold/10 group-hover:text-brand-gold transition-colors duration-300">
                  <FaBriefcase size={20} />
                </div>
              </div>

              {exp.focus && (
                <div className="mb-4 inline-block bg-white/5 border border-white/10 rounded-md px-3 py-1 text-sm text-gray-300">
                  <span className="font-semibold text-brand-blue mr-2">Focus:</span>
                  {exp.focus}
                </div>
              )}

              <p className="text-gray-400 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Key Contributions</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400">
                  {exp.contributions.map((cont, cIdx) => (
                    <li key={cIdx} className="flex items-start">
                      <span className="text-brand-gold mr-2 mt-1 font-bold">▹</span>
                      {cont}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {exp.tech.map((t, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="px-2.5 py-1 text-xs font-medium rounded bg-brand-blue/10 text-brand-blue border border-brand-blue/20"
                  >
                    {t}
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
