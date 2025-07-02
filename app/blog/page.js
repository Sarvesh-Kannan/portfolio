'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navigation from '../../components/Navigation'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "What is AGI?",
    excerpt: "AGI- Artificial General Intelligence… What if I told you that we are closer to experiencing the real Terminators rather than being closer to when the first Terminator movie came out?? Fascinating isn't it? But it is just as scary as how captivating it is.",
    date: "2024-06-30",
    readTime: "3 min",
    category: "AI/ML",
    platform: "Medium",
    url: "https://sarveshkannan.medium.com/what-is-agi-ec2637d7ee97",
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "The AI Race: The Moon Race of our time",
    excerpt: "Currently, in 2024 it would be an understatement to say that every tech corporation is working very tediously to get a good grip on AI and also to get breakthroughs in the same field to edge over the other counterparts.",
    date: "2024-04-04",
    readTime: "4 min",
    category: "AI/ML",
    platform: "Medium",
    url: "https://sarveshkannan.medium.com/the-ai-race-the-moon-race-of-our-time-162947f30bed",
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Artificial Intelligence and GPT's",
    excerpt: "GPT Itself is an application of Artificial intelligence, the History of Artificial Intelligence dates back to the year 1943 when a MCculloch and Walter Pits a Neuroscientist and a logician respectively developed the first artificial neuron.",
    date: "2023-08-16",
    readTime: "6 min",
    category: "AI/ML",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/pulse/artificial-intelligence-gpts-sarvesh-kannan/?trackingId=dwieYm9rRGmHIE%2FXhMbBcg%3D%3D",
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
                My published articles on AI, AGI, technology trends, and the future of artificial intelligence
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
                  onClick={() => window.open(post.url, '_blank')}
                >
                  <div className="relative h-48 bg-gradient-to-r from-primary-500/20 to-secondary-500/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl opacity-20">📝</span>
                    </div>
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <span className="px-3 py-1 bg-primary-500 text-white text-xs rounded-full">
                        {post.category}
                      </span>
                      <span className={`px-3 py-1 text-white text-xs rounded-full ${
                        post.platform === 'Medium' ? 'bg-green-600' : 'bg-blue-600'
                      }`}>
                        {post.platform}
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
                        <span>Read on {post.platform}</span>
                        <ArrowRight size={14} />
                      </motion.div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* More Articles Section */}
            <motion.div 
              variants={itemVariants}
              className="text-center space-y-6 glass rounded-2xl p-12"
            >
              <h2 className="text-3xl font-bold text-gradient">More Articles Coming Soon</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                I regularly publish articles on Medium and LinkedIn about AI development, AGI research, 
                emerging technologies, and insights from my projects. Follow my publications to stay 
                updated with my latest thoughts and technical deep-dives.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="https://sarveshkannan.medium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary inline-flex items-center space-x-2 neon-blue"
                >
                  <span>Follow on Medium</span>
                  <ArrowRight size={18} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/sarvesh-kannan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowRight size={18} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 