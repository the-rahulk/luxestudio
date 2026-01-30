"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUp } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const handleBrandsNavigation = (router: any) => {
  router.push('/')
  setTimeout(() => {
    const element = document.getElementById('brands')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, 100)
}

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100)
      setIsScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 999999,
        background: isScrolled 
          ? 'linear-gradient(135deg, rgba(100, 80, 150, 0.15) 0%, rgba(80, 60, 130, 0.1) 50%, rgba(120, 60, 180, 0.12) 100%)'
          : 'linear-gradient(135deg, rgba(120, 100, 170, 0.08) 0%, rgba(100, 80, 150, 0.05) 50%, rgba(140, 80, 200, 0.06) 100%)',
        backdropFilter: 'blur(50px)',
        WebkitBackdropFilter: 'blur(50px)',
        borderBottom: isScrolled 
          ? '1px solid rgba(251, 176, 64, 0.2)'
          : '1px solid rgba(251, 176, 64, 0.08)',
        boxShadow: isScrolled 
          ? '0 4px 24px rgba(120, 60, 180, 0.08)'
          : '0 2px 12px rgba(120, 60, 180, 0.03)',
        width: '100%',
        transition: 'all 0.4s ease'
      }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
            <Link href="/" style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              background: 'linear-gradient(135deg, #fcd34d 0%, #f59e0b 50%, #fb923c 100%)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
              textShadow: '0 0 30px rgba(251, 176, 64, 0.3)',
              transition: 'all 0.3s ease'
            }}>
              LuxeStudio
            </Link>

            <div className="desktop-menu lg:flex items-center gap-2" style={{ display: 'none' }}>
              <Link href="/" style={{ 
                color: '#d1d5db', 
                textDecoration: 'none', 
                padding: '0.625rem 1.25rem', 
                fontSize: '0.9375rem', 
                fontWeight: '500',
                borderRadius: '0.75rem',
                transition: 'all 0.3s ease',
                position: 'relative'
              }} className="nav-link">Home</Link>
              <button onClick={() => handleBrandsNavigation(router)} style={{ 
                color: '#d1d5db', 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer', 
                padding: '0.625rem 1.25rem', 
                fontSize: '0.9375rem', 
                fontWeight: '500',
                borderRadius: '0.75rem',
                transition: 'all 0.3s ease'
              }} className="nav-link">Brands</button>
              <Link href="/portfolio" style={{ 
                color: '#d1d5db', 
                textDecoration: 'none', 
                padding: '0.625rem 1.25rem', 
                fontSize: '0.9375rem', 
                fontWeight: '500',
                borderRadius: '0.75rem',
                transition: 'all 0.3s ease'
              }} className="nav-link">Portfolio</Link>
              <Link href="/about-us" style={{ 
                color: '#d1d5db', 
                textDecoration: 'none', 
                padding: '0.625rem 1.25rem', 
                fontSize: '0.9375rem', 
                fontWeight: '500',
                borderRadius: '0.75rem',
                transition: 'all 0.3s ease'
              }} className="nav-link">About Us</Link>
              <Link href="/contact-us" style={{ 
                color: '#d1d5db', 
                textDecoration: 'none', 
                padding: '0.625rem 1.25rem', 
                fontSize: '0.9375rem', 
                fontWeight: '500',
                borderRadius: '0.75rem',
                transition: 'all 0.3s ease',
                marginRight: '0.5rem'
              }} className="nav-link">Contact Us</Link>
              <a href="https://wa.me/919987031290" target="_blank" rel="noopener noreferrer" style={{ 
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', 
                color: 'white', 
                padding: '0.75rem 2rem', 
                borderRadius: '9999px', 
                fontSize: '0.9375rem', 
                fontWeight: '700', 
                textDecoration: 'none', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                boxShadow: '0 4px 16px rgba(16, 185, 129, 0.4)',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }} className="whatsapp-btn">
                <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Enquire Now
              </a>
            </div>

            <div className="lg:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ 
                color: '#fbbf24', 
                background: 'rgba(251, 191, 36, 0.1)', 
                border: '1px solid rgba(251, 191, 36, 0.3)', 
                cursor: 'pointer', 
                padding: '0.625rem',
                borderRadius: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}>
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            style={{
              position: 'fixed',
              bottom: '2rem',
              right: '2rem',
              zIndex: 999998,
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
              color: '#000',
              width: '3.5rem',
              height: '3.5rem',
              borderRadius: '50%',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(251, 191, 36, 0.4)',
              transition: 'all 0.3s ease'
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="scroll-top-btn"
          >
            <ArrowUp size={24} strokeWidth={3} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div className="fixed inset-0 lg:hidden" style={{ zIndex: 999998, marginTop: '80px', height: 'calc(100vh - 80px)', background: 'linear-gradient(135deg, #000000 0%, #1a0a2e 50%, #000000 100%)', overflowY: 'auto' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {/* Background decoration */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 50% 0%, rgba(251, 191, 36, 0.1) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />
            <div style={{
              position: 'absolute',
              top: '20%',
              right: '-10%',
              width: '300px',
              height: '300px',
              background: 'rgba(168, 85, 247, 0.15)',
              borderRadius: '50%',
              filter: 'blur(60px)',
              pointerEvents: 'none'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '20%',
              left: '-5%',
              width: '250px',
              height: '250px',
              background: 'rgba(251, 176, 64, 0.1)',
              borderRadius: '50%',
              filter: 'blur(60px)',
              pointerEvents: 'none'
            }} />
            <motion.div className="relative h-full flex flex-col items-center justify-center p-8" style={{ position: 'relative', zIndex: 10 }} initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              <div className="mb-12 text-center">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none' }}>
                  <span style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg, #fcd34d 0%, #f59e0b 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>LuxeStudio</span>
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-4 w-full max-w-sm">
                <Link href="/" style={{ width: '100%', display: 'block', textAlign: 'center', color: '#fff', fontWeight: '600', padding: '1rem 1.5rem', borderRadius: '0.875rem', border: '1px solid rgba(251, 191, 36, 0.3)', background: 'rgba(251, 191, 36, 0.08)', textDecoration: 'none', transition: 'all 0.3s ease', fontSize: '1.125rem' }} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                <button onClick={() => { setIsMobileMenuOpen(false); handleBrandsNavigation(router); }} style={{ width: '100%', display: 'block', textAlign: 'center', color: '#fff', fontWeight: '600', padding: '1rem 1.5rem', borderRadius: '0.875rem', border: '1px solid rgba(251, 191, 36, 0.3)', background: 'rgba(251, 191, 36, 0.08)', textDecoration: 'none', transition: 'all 0.3s ease', fontSize: '1.125rem', cursor: 'pointer' }}>Brands</button>
                <Link href="/portfolio" style={{ width: '100%', display: 'block', textAlign: 'center', color: '#fff', fontWeight: '600', padding: '1rem 1.5rem', borderRadius: '0.875rem', border: '1px solid rgba(251, 191, 36, 0.3)', background: 'rgba(251, 191, 36, 0.08)', textDecoration: 'none', transition: 'all 0.3s ease', fontSize: '1.125rem' }} onClick={() => setIsMobileMenuOpen(false)}>Portfolio</Link>
                <Link href="/about-us" style={{ width: '100%', display: 'block', textAlign: 'center', color: '#fff', fontWeight: '600', padding: '1rem 1.5rem', borderRadius: '0.875rem', border: '1px solid rgba(251, 191, 36, 0.3)', background: 'rgba(251, 191, 36, 0.08)', textDecoration: 'none', transition: 'all 0.3s ease', fontSize: '1.125rem' }} onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                <Link href="/contact-us" style={{ width: '100%', display: 'block', textAlign: 'center', color: '#fff', fontWeight: '600', padding: '1rem 1.5rem', borderRadius: '0.875rem', border: '1px solid rgba(251, 191, 36, 0.3)', background: 'rgba(251, 191, 36, 0.08)', textDecoration: 'none', transition: 'all 0.3s ease', fontSize: '1.125rem' }} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
                <a href="https://wa.me/919987031290" target="_blank" rel="noopener noreferrer" style={{ width: '100%', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', color: 'white', padding: '1.25rem 1.5rem', borderRadius: '0.875rem', fontSize: '1.1rem', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', boxShadow: '0 8px 24px rgba(16, 185, 129, 0.4)', transition: 'all 0.3s ease', marginTop: '1rem', border: '1px solid rgba(255, 255, 255, 0.2)' }} onClick={() => setIsMobileMenuOpen(false)}>
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Enquire Now
                </a>
              </div>
            </motion.div>
            <div className="absolute inset-0 -z-10" onClick={() => setIsMobileMenuOpen(false)}></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
