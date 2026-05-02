import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "umarahamed852@gmail.com",
      link: "mailto:umarahamed852@gmail.com"
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: "+94 76 926 0109\n+94 75 214 2155",
      link: "tel:+94769260109"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "441/7A, Matara Road, Weligama, Sri Lanka",
      link: null
    }
  ];

  return (
    <section id="contact" className="relative min-h-screen pt-24 pb-20 overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand-blue/10 via-transparent to-transparent pointer-events-none opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white tracking-wide mb-4"
          >
            GET IN <span className="text-brand-gold glow-text-gold">TOUCH</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {contactInfo.map((info, idx) => (
              <motion.a
                key={idx}
                href={info.link || "#"}
                target={info.link && info.link.startsWith('http') ? "_blank" : undefined}
                rel="noreferrer"
                whileHover={info.link ? { scale: 1.02 } : {}}
                className={`glass-card p-6 rounded-2xl flex items-start space-x-4 border border-white/5 transition-all duration-300 ${info.link ? 'hover:border-brand-blue/50 hover:glow-blue cursor-pointer' : 'cursor-default'}`}
              >
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-xl text-brand-blue flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">{info.title}</h4>
                  <p className="text-gray-400 whitespace-pre-line text-sm">{info.value}</p>
                </div>
              </motion.a>
            ))}

            <div className="flex space-x-4 pt-4">
              <motion.a 
                href="https://www.linkedin.com/in/umar-ahamed-" 
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:text-brand-blue hover:border-brand-blue hover:glow-blue transition-all duration-300 text-xl"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                href="https://github.com/umar-ahamed-ds" 
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:text-brand-gold hover:border-brand-gold hover:glow-gold transition-all duration-300 text-xl"
              >
                <FaGithub />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form className="glass-card p-8 rounded-2xl border border-white/5 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors duration-300"
                  placeholder="How can I help you?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors duration-300 resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-brand-blue hover:bg-blue-600 text-white font-bold py-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-300 glow-blue"
              >
                <span>Send Message</span>
                <FaPaperPlane />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
