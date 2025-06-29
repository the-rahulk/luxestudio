"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

// Smooth scroll function for anchor links
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

// Handle navigation with hash scrolling
const handleBrandsNavigation = (router: any) => {
  // Always navigate to homepage brands section
  router.push('/')
  setTimeout(() => {
    const element = document.getElementById('brands')
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }, 100)
}

// Handle contact navigation
const handleContactNavigation = (router: any) => {
  const element = document.getElementById('contact')
  if (element) {
    // If contact section exists on current page, scroll to it
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  } else {
    // If contact section doesn't exist, navigate to homepage contact
    router.push('/')
    setTimeout(() => {
      const contactElement = document.getElementById('contact')
      if (contactElement) {
        contactElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }, 100)
  }
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    
    // Handle hash navigation on page load
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1))
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      }, 100)
    }
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-white">
                LuxeStudio
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Home
                </Link>                <Link
                  href="/#brands"
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Brands
                </Link>
              <Link
                href="/#contact"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Contact
              </Link>
              </div>
            </div>
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-white">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 gpu-accelerated ${
        isScrolled ? "bg-black/20 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
              LuxeStudio
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  handleBrandsNavigation(router)
                }}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Brands
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  handleContactNavigation(router)
                }}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 hover:text-white">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-black/90 backdrop-blur-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <button
              onClick={(e) => {
                e.preventDefault()
                setIsMobileMenuOpen(false)
                handleBrandsNavigation(router)
              }}
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left"
            >
              Brands
            </button>
            <button
              onClick={(e) => {
                e.preventDefault()
                setIsMobileMenuOpen(false)
                handleContactNavigation(router)
              }}
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left"
            >
              Contact
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
