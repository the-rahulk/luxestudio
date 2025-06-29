"use client"

import { useEffect, useState } from 'react'

export function usePerformance() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isSlowDevice, setIsSlowDevice] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    // Detect slow devices
    const checkDevicePerformance = () => {
      // Check hardware concurrency (number of CPU cores)
      const cores = navigator.hardwareConcurrency ?? 1
      // Check memory (if available)
      const memory = (navigator as any).deviceMemory ?? 4
      
      // Consider it slow if < 4 cores or < 4GB RAM
      if (cores < 4 || memory < 4) {
        setIsSlowDevice(true)
      }

      // Performance timing check
      const start = performance.now()
      let randomSum = 0
      for (let i = 0; i < 100000; i++) {
        randomSum += Math.random()
      }
      const end = performance.now()
      
      // Use randomSum to prevent optimization and if it takes more than 10ms for simple operations, consider it slow
      if (end - start > 10 && randomSum > 0) {
        setIsSlowDevice(true)
      }
    }

    checkDevicePerformance()

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  // Return optimized animation settings
  const getAnimationConfig = (normalConfig: any) => {
    if (prefersReducedMotion || isSlowDevice) {
      return {
        ...normalConfig,
        duration: 0.1,
        delay: 0,
        ease: 'linear'
      }
    }
    return normalConfig
  }

  return {
    prefersReducedMotion,
    isSlowDevice,
    getAnimationConfig,
    shouldReduceAnimations: prefersReducedMotion || isSlowDevice
  }
}
