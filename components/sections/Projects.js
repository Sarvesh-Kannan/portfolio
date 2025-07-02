'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, Star, GitBranch, Users, Calendar } from 'lucide-react'
import { projects } from '../../data/projects'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = ['All', 'AI/ML', 'DevTools', 'Healthcare', 'Sustainability', 'Data Products', 'Finance']

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const ProjectCard = ({ project, index }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass rounded-2xl overflow-hidden card-hover group cursor-pointer"
      onClick={() => setSelectedProject(project)}
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10"></div>
        <div className="relative z-10 text-center">
          <div className="text-6xl mb-2 opacity-80">
            {project.category === 'AI/ML' && '🤖'}
            {project.category === 'DevTools' && '🛠️'}
            {project.category === 'Healthcare' && '🏥'}
            {project.category === 'Sustainability' && '🌱'}
            {project.category === 'Data Products' && '📊'}
            {project.category === 'Finance' && '💰'}
          </div>
          <span className="text-sm text-gray-400 font-medium">{project.category}</span>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-semibold">Click to view details</span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-200 line-clamp-2">
            {project.title}
          </h3>
          <div className="flex space-x-2 ml-4">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
            >
              <Github size={18} />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-secondary-400 transition-colors duration-200"
            >
              <ExternalLink size={18} />
            </motion.button>
          </div>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 text-xs bg-primary-500/20 text-primary-300 rounded-md border border-primary-500/30"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded-md">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Impact */}
        <div className="pt-4 border-t border-gray-700">
          <p className="text-xs text-gray-400 italic">
            {project.impact}
          </p>
        </div>
      </div>
    </motion.div>
  )

  const ProjectModal = ({ project, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gradient mb-2">
                {project.title}
              </h2>
              <span className="px-3 py-1 text-sm bg-primary-500/20 text-primary-300 rounded-full border border-primary-500/30">
                {project.category}
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl font-bold"
            >
              ×
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Overview</h3>
            <p className="text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <Star size={16} className="text-primary-400 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30 rounded-lg text-primary-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Impact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Impact & Results</h3>
            <p className="text-gray-300 leading-relaxed bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 rounded-lg p-4">
              {project.impact}
            </p>
          </div>

          {/* Actions */}
          <div className="flex space-x-4 pt-4">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center space-x-2"
            >
              <Github size={18} />
              <span>View Source</span>
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center space-x-2"
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-dark-800 to-dark-900 relative overflow-hidden scroll-mt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-hero-pattern"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore my portfolio of AI-powered solutions, from wildlife conservation to developer tools
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white neon-blue'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Count */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-gray-400">
              Showing <span className="text-primary-400 font-semibold">{filteredProjects.length}</span> projects
              {filter !== 'All' && <span> in <span className="text-secondary-400 font-semibold">{filter}</span></span>}
            </p>
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-4 gap-6">
            <div className="glass rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-gradient mb-2">10+</div>
              <div className="text-gray-400">Projects Built</div>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-gradient mb-2">6</div>
              <div className="text-gray-400">Categories</div>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-gradient mb-2">2</div>
              <div className="text-gray-400">Corporate Projects</div>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-gradient mb-2">100%</div>
              <div className="text-gray-400">Open Source</div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-lg text-gray-300 mb-6">
              Interested in collaborating on a project?
            </p>
            <motion.button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4 neon-purple"
            >
              Let's Build Together
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects 