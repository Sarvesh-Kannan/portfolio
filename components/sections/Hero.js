'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, Download, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const scrollToProjects = () => {
    window.location.href = '/projects'
  }

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleResumeDownload = () => {
    try {
      // Create a temporary link element
      const link = document.createElement('a')
      link.href = '/assets/Sarvesh_Resume.pdf'
      link.download = 'Sarvesh_Kannan_Resume.pdf'
      link.target = '_blank'
      
      // Trigger download
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Optional: Track download (for analytics)
      console.log('Resume downloaded successfully')
    } catch (error) {
      console.error('Error downloading resume:', error)
      // Fallback: open in new tab
      window.open('/assets/Sarvesh_Resume.pdf', '_blank')
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-hero-pattern pt-16 md:pt-16">
      {/* Background Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className={`particle particle-${(i % 3) + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <p className="text-primary-400 text-lg font-medium">
                👋 Hey there, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gradient">
                Sarvesh Kannan
              </h1>
            </motion.div>

            {/* Animated Type Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="h-20"
            >
              <TypeAnimation
                sequence={[
                  'AI-ML Enthusiast 🤖',
                  2000,
                  'Full-Stack Developer 💻',
                  2000,
                  'Building the Future with AI 🚀',
                  2000,
                  'Dinosaur Lover 🦕',
                  2000,
                  'Marvel Fan ⚡',
                  2000,
                  'Professional Swimmer 🏊',
                  2000,
                  'Cricket Player 🏏',
                  2000,
                  'Stock Market Trader 📈',
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                className="text-xl sm:text-2xl md:text-4xl font-semibold text-white"
                repeat={Infinity}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-300 leading-relaxed max-w-2xl"
            >
              20-year-old AI-ML enthusiast from Chennai, India. Building intelligent systems that blend 
              <span className="text-primary-400 font-semibold"> innovation with usability</span>. 
              Passionate about creating AI tools, sustainability solutions, and healthcare technology 
              that make a real impact.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-6 text-sm"
            >
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-gray-300">Active Stock Trader since 2021</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                <span className="text-gray-300">B.Tech AI @ Amrita Vishwa Vidyapeetham</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                <span className="text-gray-300">10+ AI/ML Projects</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2 neon-blue"
              >
                <span>View My Work</span>
                <ExternalLink size={18} />
              </motion.button>
              
              <motion.a
                onClick={handleResumeDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center space-x-2"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity }
                }}
                className="absolute -top-4 -left-4 w-8 h-8 text-2xl"
              >
                🦕
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-2 -right-6 w-8 h-8 text-2xl"
              >
                ⚡
              </motion.div>
              
              <motion.div
                animate={{ 
                  x: [0, 10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -left-6 w-8 h-8 text-2xl"
              >
                🏊
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, -10, 10, 0]
                }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -bottom-2 -right-4 w-8 h-8 text-2xl"
              >
                📈
              </motion.div>

              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 cursor-glow"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-primary-500 to-secondary-500 neon-blue">
                  <Image
                    src="/assets/port1.jpg"
                    alt="Sarvesh Kannan"
                    fill
                    className="object-cover object-center scale-110"
                    sizes="(max-width: 768px) 320px, 384px"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-200 cursor-glow"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 