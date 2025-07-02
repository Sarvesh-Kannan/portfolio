'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useRouter } from 'next/navigation'
import { personalInfo } from '../../data/projects'

const About = () => {
  const router = useRouter()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-dark-900 to-dark-800 relative overflow-hidden scroll-mt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-hero-pattern"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get to know the person behind the code - my journey, passions, and what drives me to innovate
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Personal Story */}
              <div className="glass rounded-2xl p-8 card-hover">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="text-3xl mr-3">🚀</span>
                  My Journey
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm a 20-year-old AI-ML enthusiast from <span className="text-primary-400 font-semibold">Chennai, India</span>, 
                  currently pursuing B.Tech in AI at <span className="text-secondary-400 font-semibold">Amrita Vishwa Vidyapeetham</span>. 
                  My journey in technology began with a fascination for how intelligent systems can solve real-world problems.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  What started as curiosity about <span className="text-primary-400 font-semibold">machine learning</span> has 
                  evolved into a passion for building <span className="text-secondary-400 font-semibold">AI tools</span>, 
                  <span className="text-green-400 font-semibold"> sustainability solutions</span>, and 
                  <span className="text-blue-400 font-semibold"> healthcare technology</span> that make a meaningful impact.
                </p>
              </div>

              {/* Philosophy */}
              <div className="glass rounded-2xl p-8 card-hover">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="text-3xl mr-3">💡</span>
                  My Philosophy
                </h3>
                <blockquote className="text-lg text-gray-300 italic border-l-4 border-primary-500 pl-6">
                  "I'm a builder at heart. Whether it's a smart assistant or a tool for sustainability, 
                  I believe AI should be <span className="text-primary-400 font-semibold">useful</span>, 
                  <span className="text-secondary-400 font-semibold"> ethical</span>, and 
                  <span className="text-green-400 font-semibold"> human-centric</span>."
                </blockquote>
              </div>

              {/* Current Focus */}
              <div className="glass rounded-2xl p-8 card-hover">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="text-3xl mr-3">🎯</span>
                  What I'm Building
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {personalInfo.buildingAreas.map((area, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 rounded-lg p-3 text-center"
                    >
                      <span className="text-sm text-gray-300">{area}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Stats Card */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass rounded-xl p-8 space-y-6">
                <h4 className="text-2xl font-bold text-center text-gradient mb-6">Quick Stats</h4>
                <div className="grid grid-cols-1 gap-4">
                  <div className="text-center p-4 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-lg border border-primary-500/20">
                    <div className="text-3xl font-bold text-gradient">10+</div>
                    <div className="text-sm text-gray-400">AI/ML Projects</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-secondary-500/10 to-primary-500/10 rounded-lg border border-secondary-500/20">
                    <div className="text-3xl font-bold text-gradient">3+</div>
                    <div className="text-sm text-gray-400">Years Trading</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-lg border border-primary-500/20">
                    <div className="text-3xl font-bold text-gradient">20</div>
                    <div className="text-sm text-gray-400">Years Old</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Interests Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-3xl font-bold text-center text-gradient">
              Beyond Code: My Passions
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {personalInfo.interests.map((interest, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 30px rgba(14, 165, 233, 0.3)" 
                  }}
                  className="glass rounded-xl p-6 text-center card-hover"
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                    className="text-4xl mb-4"
                  >
                    {interest.icon}
                  </motion.div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {interest.name}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {interest.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Focus Areas */}
          <motion.div variants={itemVariants} className="glass rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-center text-gradient mb-8">
              Technical Focus Areas
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {personalInfo.focusAreas.map((area, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 rounded-lg p-4 text-center"
                >
                  <span className="text-sm font-medium text-gray-300">{area}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-lg text-gray-300 mb-6">
              Ready to build something amazing together?
            </p>
            <motion.button
              onClick={() => router.push('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4 neon-blue"
            >
              Let's Connect
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

 