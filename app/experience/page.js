'use client'

import { useEffect } from 'react'
import Navigation from '../../components/Navigation'
import Experience from '../../components/sections/Experience'

export default function ExperiencePage() {
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
        <Experience />
      </div>
    </main>
  )
} 