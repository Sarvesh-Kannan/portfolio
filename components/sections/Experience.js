'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useRouter } from 'next/navigation'
import { Building2, Calendar, MapPin, Trophy, Target, Sparkles } from 'lucide-react'
import { experiences, achievements } from '../../data/projects'

const Experience = () => {
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

  const ExperienceCard = ({ experience, index }) => (
    <motion.div
      variants={itemVariants}
      className={`flex gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center mb-16`}
    >
      {/* Timeline Line */}
      <div className="hidden lg:flex flex-col items-center">
        <div className="w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
        {index < experiences.length - 1 && (
          <div className="w-1 h-32 bg-gradient-to-b from-primary-500 to-secondary-500 mt-4"></div>
        )}
      </div>

      {/* Experience Content */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="glass rounded-2xl p-8 flex-1 card-hover"
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
            <div className="flex items-center space-x-4 text-gray-300 mb-2">
              <div className="flex items-center space-x-2">
                <Building2 size={16} className="text-primary-400" />
                <span className="font-medium">{experience.company}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={16} className="text-secondary-400" />
                <span>{experience.period}</span>
              </div>
            </div>
          </div>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
            className="text-3xl"
          >
            {experience.company === 'Zoho Corporation' && '💼'}
            {experience.company === 'Infosys Springboard' && '📊'}
            {experience.company === 'Personal Projects' && '🚀'}
          </motion.div>
        </div>

        <p className="text-gray-300 mb-6 leading-relaxed">
          {experience.description}
        </p>

        {/* Achievements */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-primary-400 flex items-center">
            <Trophy size={18} className="mr-2" />
            Key Achievements
          </h4>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, achievementIndex) => (
              <motion.li
                key={achievementIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.2 + achievementIndex * 0.1 }}
                className="flex items-start text-gray-300"
              >
                <Sparkles size={16} className="text-secondary-400 mr-3 mt-1 flex-shrink-0" />
                <span>{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  )

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-dark-800 to-dark-900 relative overflow-hidden scroll-mt-16">
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
              Experience & Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My professional journey and the milestones that shaped my expertise in AI and technology
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Mobile Timeline Line */}
            <div className="lg:hidden absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-secondary-500"></div>
            
            {experiences.map((experience, index) => (
              <ExperienceCard 
                key={index} 
                experience={experience} 
                index={index} 
              />
            ))}
          </div>

          {/* Achievements Grid */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-3xl font-bold text-center text-gradient">
              Notable Achievements
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
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
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                    className="text-4xl mb-4"
                  >
                    {achievement.icon}
                  </motion.div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-4 gap-6">
            <div className="glass rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-gradient mb-2">3+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-gradient mb-2">2</div>
              <div className="text-gray-400">Corporate Roles</div>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-gradient mb-2">10+</div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-gradient mb-2">100%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-lg text-gray-300 mb-6">
              Want to be part of my next chapter?
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

export default Experience 