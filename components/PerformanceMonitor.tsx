"use client"

import { useEffect } from 'react'

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production and if performance API is available
    if (process.env.NODE_ENV === 'production' && 'performance' in window) {
      // Monitor Core Web Vitals - metrics are logged to console for monitoring
      
      function getCLS(onPerfEntry: (entry: any) => void) {
        if (typeof PerformanceObserver !== 'undefined') {
          const observer = new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              onPerfEntry(entry)
            }
          })
          observer.observe({ entryTypes: ['layout-shift'] })
        }
      }

      function getFID(onPerfEntry: (entry: any) => void) {
        if (typeof PerformanceObserver !== 'undefined') {
          const observer = new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              onPerfEntry(entry)
            }
          })
          observer.observe({ entryTypes: ['first-input'] })
        }
      }

      function getFCP(onPerfEntry: (entry: any) => void) {
        if (typeof PerformanceObserver !== 'undefined') {
          const observer = new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              if (entry.name === 'first-contentful-paint') {
                onPerfEntry(entry)
              }
            }
          })
          observer.observe({ entryTypes: ['paint'] })
        }
      }

      function getLCP(onPerfEntry: (entry: any) => void) {
        if (typeof PerformanceObserver !== 'undefined') {
          const observer = new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              onPerfEntry(entry)
            }
          })
          observer.observe({ entryTypes: ['largest-contentful-paint'] })
        }
      }

      function getTTFB(onPerfEntry: (entry: any) => void) {
        if (typeof PerformanceObserver !== 'undefined') {
          const observer = new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              onPerfEntry(entry)
            }
          })
          observer.observe({ entryTypes: ['navigation'] })
        }
      }

      const handlePerfEntry = (entry: any) => {
        // Log performance metrics for debugging
        console.log(`Performance: ${entry.name ?? entry.entryType}`, entry.value ?? entry.startTime)
      }

      // Initialize monitoring
      getCLS(handlePerfEntry)
      getFID(handlePerfEntry)
      getFCP(handlePerfEntry)
      getLCP(handlePerfEntry)
      getTTFB(handlePerfEntry)

      // Monitor long tasks
      if (typeof PerformanceObserver !== 'undefined') {
        const longTaskObserver = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            console.warn('Long task detected:', entry.duration + 'ms')
          }
        })
        longTaskObserver.observe({ entryTypes: ['longtask'] })
      }
    }
  }, [])

  return null
}
