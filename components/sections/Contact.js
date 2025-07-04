'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, Github, Linkedin, FileText, Coffee } from 'lucide-react'
import { personalInfo } from '../../data/projects'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleResumeDownload = async () => {
    try {
      // Check if the resume file exists
      const response = await fetch('/assets/Sarvesh_Resume.pdf', { method: 'HEAD' })
      
      if (!response.ok) {
        // If file doesn't exist, show user-friendly message
        alert('Resume is currently being updated. Please check back soon or contact me directly at sarveshkannan30@gmail.com')
        return
      }
      
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
      // Show user-friendly error message
      alert('Resume download is temporarily unavailable. Please contact me at sarveshkannan30@gmail.com for a copy.')
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Thank you for your message! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 2000)
  }

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'text-blue-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
      color: 'text-green-400'
    },
    {
      icon: Coffee,
      label: 'Timezone',
      value: personalInfo.timezone,
      href: '#',
      color: 'text-purple-400'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      href: personalInfo.github,
      icon: Github,
      color: 'hover:text-gray-300',
      description: 'Check out my code',
      isExternal: true
    },
    {
      name: 'LinkedIn',
      href: personalInfo.linkedin,
      icon: Linkedin,
      color: 'hover:text-blue-400',
      description: 'Connect professionally',
      isExternal: true
    },
    {
      name: 'Resume',
      onClick: handleResumeDownload,
      icon: FileText,
      color: 'hover:text-purple-400',
      description: 'Download my resume',
      isExternal: false
    },
    {
      name: 'Email',
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      color: 'hover:text-green-400',
      description: 'Send me an email',
      isExternal: false
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-dark-900 to-black relative overflow-hidden scroll-mt-16">
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
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to turn your ideas into reality? Let's connect and discuss how we can work together
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Send className="mr-3 text-primary-400" size={24} />
                  Send me a message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors duration-200"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors duration-200"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors duration-200"
                      placeholder="Project Collaboration"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors duration-200 resize-none"
                      placeholder="Tell me about your project or how we can work together..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full btn-primary flex items-center justify-center space-x-2 neon-blue disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Methods */}
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ x: 10 }}
                        className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700 cursor-pointer transition-colors duration-200 hover:border-primary-500/50"
                      >
                        <Icon size={24} className={method.color} />
                        <div>
                          <p className="text-gray-400 text-sm">{method.label}</p>
                          <p className="text-white font-medium">{method.value}</p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Connect with Me
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link) => {
                    const Icon = link.icon
                    
                    if (link.onClick) {
                      return (
                        <motion.button
                          key={link.name}
                          onClick={link.onClick}
                          whileHover={{ scale: 1.05, y: -5 }}
                          whileTap={{ scale: 0.95 }}
                          className={`flex flex-col items-center p-4 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-400 ${link.color} transition-all duration-200 hover:border-primary-500/50 cursor-glow`}
                        >
                          <Icon size={24} className="mb-2" />
                          <span className="text-sm font-medium text-white">{link.name}</span>
                          <span className="text-xs text-gray-500 text-center">{link.description}</span>
                        </motion.button>
                      )
                    }
                    
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        target={link.isExternal ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex flex-col items-center p-4 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-400 ${link.color} transition-all duration-200 hover:border-primary-500/50 cursor-glow`}
                      >
                        <Icon size={24} className="mb-2" />
                        <span className="text-sm font-medium text-white">{link.name}</span>
                        <span className="text-xs text-gray-500 text-center">{link.description}</span>
                      </motion.a>
                    )
                  })}
                </div>
              </div>

              {/* Availability */}
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Current Status
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">Available for new projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">Open to collaboration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">Actively learning & building</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div variants={itemVariants} className="text-center pt-16 border-t border-gray-800">
            <p className="text-gray-400 mb-4">
              Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 Sarvesh Kannan. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 