'use client'

import { useEffect } from 'react'
import Navigation from '../../components/Navigation'
import Contact from '../../components/sections/Contact'

export default function ContactPage() {
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
        <Contact />
      </div>
    </main>
  )
} 