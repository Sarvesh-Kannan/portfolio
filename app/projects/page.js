'use client'

import { useEffect } from 'react'
import Navigation from '../../components/Navigation'
import Projects from '../../components/sections/Projects'

export default function ProjectsPage() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <main className="min-h-screen bg-dark-900 text-white relative overflow-x-hidden">
      <Navigation />
      <div className="pt-16">
        <Projects />
      </div>
    </main>
  )
} 