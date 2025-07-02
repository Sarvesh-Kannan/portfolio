'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navigation from '../../components/Navigation'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Wildlife Conservation",
    excerpt: "Exploring how computer vision and machine learning are revolutionizing wildlife monitoring and conservation efforts through camera trap technology.",
    date: "2024-12-15",
    readTime: "5 min",
    category: "AI/ML",
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "Building Privacy-First AI Development Tools",
    excerpt: "Why local LLMs and privacy-centric approaches are the future of AI-powered development environments and code assistance.",
    date: "2024-12-01",
    readTime: "7 min",
    category: "DevTools",
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Translation Memory vs Real-time AI: A Hybrid Approach",
    excerpt: "How combining traditional translation memory with modern AI APIs creates more efficient and accurate translation systems.",
    date: "2024-11-20",
    readTime: "6 min",
    category: "AI/ML",
    image: "/api/placeholder/400/250"
  },
  {
    id: 4,
    title: "Stock Market Insights: 3 Years of Trading at 19",
    excerpt: "Lessons learned from algorithmic trading, market analysis, and the importance of risk management in volatile markets.",
    date: "2024-11-10",
    readTime: "8 min",
    category: "Finance",
    image: "/api/placeholder/400/250"
  }
]

export default function BlogPage() {
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-16"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gradient">
                Blog & Insights
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Thoughts on AI, technology, trading, and building the future
              </p>
            </motion.div>

            {/* Blog Posts Grid */}
            <motion.div 
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-8"
            >
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-2xl overflow-hidden card-hover cursor-pointer"
                >
                  <div className="relative h-48 bg-gradient-to-r from-primary-500/20 to-secondary-500/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl opacity-20">📝</span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary-500 text-white text-xs rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white hover:text-primary-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                      <div className="flex items-center space-x-4 text-xs text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-1 text-primary-400 text-sm"
                      >
                        <span>Read More</span>
                        <ArrowRight size={14} />
                      </motion.div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* Coming Soon Section */}
            <motion.div 
              variants={itemVariants}
              className="text-center space-y-6 glass rounded-2xl p-12"
            >
              <h2 className="text-3xl font-bold text-gradient">More Coming Soon</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                I'm constantly working on new projects and learning about emerging technologies. 
                Follow my journey as I share insights about AI development, stock trading strategies, 
                and building the next generation of intelligent systems.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center space-x-2 neon-blue"
              >
                <span>Get Notified</span>
                <ArrowRight size={18} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 