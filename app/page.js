'use client'

import { useEffect } from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'

export default function Home() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Cleanup on unmount
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <main className="min-h-screen bg-dark-900 text-white relative overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
    </main>
  )
} 