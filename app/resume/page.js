'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navigation from '../../components/Navigation'
import { Download, ExternalLink, Calendar, MapPin, Mail } from 'lucide-react'

export default function ResumePage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

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
    <main className="min-h-screen bg-dark-900 text-white relative overflow-x-hidden">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800 relative overflow-hidden pt-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-hero-pattern"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-12"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gradient">
                Resume
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                AI-ML Enthusiast • Full-Stack Developer • Stock Trader
              </p>
              
              <motion.a
                onClick={handleResumeDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center space-x-2 neon-blue"
              >
                <Download size={18} />
                <span>Download PDF</span>
              </motion.a>
            </motion.div>

            {/* Resume Content */}
            <motion.div variants={containerVariants} className="space-y-8">
              
              {/* Contact Info */}
              <motion.div variants={itemVariants} className="glass rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gradient mb-6">Contact Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-primary-400" size={20} />
                    <span>sarveshkannan30@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-primary-400" size={20} />
                    <span>Chennai, Tamil Nadu, India</span>
                  </div>
                </div>
              </motion.div>

              {/* Education */}
              <motion.div variants={itemVariants} className="glass rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gradient mb-6">Education</h2>
                <div className="border-l-4 border-primary-500 pl-6">
                  <h3 className="text-xl font-semibold text-white">B.Tech in Artificial Intelligence</h3>
                  <p className="text-primary-400 font-medium">Amrita Vishwa Vidyapeetham</p>
                  <p className="text-gray-400 mt-2">2022 - 2026 (Expected) • Chennai, India</p>
                </div>
              </motion.div>

              {/* Experience */}
              <motion.div variants={itemVariants} className="glass rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gradient mb-6">Experience</h2>
                <div className="space-y-6">
                  
                  <div className="border-l-4 border-primary-500 pl-6">
                    <h3 className="text-xl font-semibold text-white">AI Research Associate</h3>
                    <p className="text-primary-400 font-medium">Zoho Corporation • May 2025 - June 2025</p>
                    <p className="text-gray-300 mt-3">Developed SarvX and Co-Clone AI tools</p>
                  </div>

                  <div className="border-l-4 border-secondary-500 pl-6">
                    <h3 className="text-xl font-semibold text-white">Data Science Intern</h3>
                    <p className="text-secondary-400 font-medium">Infosys Springboard • Oct 2024 - Dec 2024</p>
                    <p className="text-gray-300 mt-3">Created HR Analytics Dashboard</p>
                  </div>
                </div>
              </motion.div>

              {/* Key Projects */}
              <motion.div variants={itemVariants} className="glass rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gradient mb-6">Key Projects</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-lg p-4 border border-primary-500/20">
                    <h3 className="text-lg font-semibold text-white mb-2">Wildlife Safety System (Cam-Trap)</h3>
                    <p className="text-gray-300 text-sm">AI-powered animal detection with XAI and safety protocols using EfficientNet-B3</p>
                  </div>
                  <div className="bg-gradient-to-r from-secondary-500/10 to-primary-500/10 rounded-lg p-4 border border-secondary-500/20">
                    <h3 className="text-lg font-semibold text-white mb-2">Hybrid Translation Service</h3>
                    <p className="text-gray-300 text-sm">Translation Memory + Sarvam API for 11 Indian languages</p>
                  </div>
                  <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-lg p-4 border border-primary-500/20">
                    <h3 className="text-lg font-semibold text-white mb-2">Gaza Sentiment Analysis</h3>
                    <p className="text-gray-300 text-sm">GPU-accelerated BERT with Explainable AI using LIME</p>
                  </div>
                  <div className="bg-gradient-to-r from-secondary-500/10 to-primary-500/10 rounded-lg p-4 border border-secondary-500/20">
                    <h3 className="text-lg font-semibold text-white mb-2">PyUtilKit Package</h3>
                    <p className="text-gray-300 text-sm">Open-source Python utility package for developer productivity</p>
                  </div>
                </div>
              </motion.div>

              {/* Skills Summary */}
              <motion.div variants={itemVariants} className="glass rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gradient mb-6">Technical Skills</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Programming</h3>
                    <div className="space-y-2 text-gray-300">
                      <p>• Python (Advanced)</p>
                      <p>• JavaScript/TypeScript</p>
                      <p>• R</p>
                      <p>• SQL</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">AI/ML</h3>
                    <div className="space-y-2 text-gray-300">
                      <p>• PyTorch & TensorFlow</p>
                      <p>• Transformers & LLMs</p>
                      <p>• Computer Vision</p>
                      <p>• NLP & RAG Systems</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Web & Tools</h3>
                    <div className="space-y-2 text-gray-300">
                      <p>• FastAPI & Flask</p>
                      <p>• React & Next.js</p>
                      <p>• Streamlit</p>
                      <p>• Power BI</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 