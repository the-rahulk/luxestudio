"use client"

import type React from "react"
import { useState, useEffect, lazy } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Zap, Globe, Users, Heart, Target, Wrench, Shield, Rocket, CheckCircle } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { usePerformance } from "@/hooks/use-performance"

// Temporarily disable 3D components to fix custom domain issues
// const Canvas = lazy(() => import("@react-three/fiber").then(module => ({ default: module.Canvas })))
// const OrbitControls = lazy(() => import("@react-three/drei").then(module => ({ default: module.OrbitControls })))
// const Torus = lazy(() => import("@react-three/drei").then(module => ({ default: module.Torus })))

// Hero Section with optimized performance
function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const { getAnimationConfig, shouldReduceAnimations } = usePerformance()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-purple-900">
      <div className="absolute inset-0 w-full h-full">
        {/* Using fallback gradient background for stability */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <motion.div 
        className="relative z-10 text-center px-4 max-w-4xl mx-auto optimize-animations" 
        style={shouldReduceAnimations ? {} : { y }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={getAnimationConfig({ duration: 0.8, delay: 0.2 })}
        >
          Crafted Tech.{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Curated Design.
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={getAnimationConfig({ duration: 0.8, delay: 0.4 })}
        >
          We bring together four specialized brands to deliver automation, accessibility, design, and development
          solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={getAnimationConfig({ duration: 0.8, delay: 0.6 })}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 gpu-accelerated"
            onClick={() => {
              if (mounted) {
                document.getElementById("brands")?.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Explore Our Brands
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Rest of the components remain the same...
function BrandsSection() {
  const router = useRouter()
  
  const brands = [
    {
      name: "Nuvo",
      tagline: "Automate the Routine. Amplify the Impact.",
      color: "from-purple-500 to-violet-600",
      icon: <Zap className="h-8 w-8" />,
      href: "/nuvo",
    },
    {
      name: "Webora",
      tagline: "Websites That Work as Hard as You Do.",
      color: "from-blue-500 to-cyan-500",
      icon: <Globe className="h-8 w-8" />,
      href: "/webora",
    },
    {
      name: "Accessa",
      tagline: "Make Every Click Count – For Everyone.",
      color: "from-green-500 to-emerald-500",
      icon: <Users className="h-8 w-8" />,
      href: "/accessa",
    },
    {
      name: "Creava",
      tagline: "Designing Experiences That Flow.",
      color: "from-yellow-500 to-orange-500",
      icon: <Heart className="h-8 w-8" />,
      href: "/creava",
    },
  ]

  return (
    <section id="brands" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Four specialized studios, one unified vision
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 brands-grid">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button 
                className="block h-full w-full text-left"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  
                  console.log('Navigating to:', brand.href)
                  router.push(brand.href)
                }}
                type="button"
              >
                <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 h-full card-clickable">
                  <CardContent className="p-6">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${brand.color} mb-4`}>{brand.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{brand.name}</h3>
                    <p className="text-gray-300 mb-4">{brand.tagline}</p>
                    <div className="w-full border border-white/20 text-white bg-transparent rounded-lg px-4 py-2 text-center font-medium">
                      Learn More
                    </div>
                  </CardContent>
                </Card>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Why Choose Section
function WhyChooseSection() {
  const benefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Teams Across Multiple Disciplines",
      description: "Specialized professionals in every field",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Cutting-Edge Technology Solutions",
      description: "Latest tools and innovative approaches",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "User-Centered Design Approach",
      description: "Putting your users at the heart of everything",
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "End-to-End Project Support",
      description: "From concept to launch and beyond",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Conversion-Focused Strategies",
      description: "Designed to drive results and ROI",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Inclusive and Accessible Design",
      description: "Creating experiences for everyone",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose LuxeStudio</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 via-black to-pink-900">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to start your next project?</h2>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              if (mounted) {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// Contact Form Section
function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSelectOpen, setIsSelectOpen] = useState(false)

  const serviceOptions = [
    { value: "automation", label: "Automation (Nuvo)" },
    { value: "web-development", label: "Web Development (Webora)" },
    { value: "accessibility", label: "Accessibility (Accessa)" },
    { value: "design", label: "Design (Creava)" },
    { value: "full-project", label: "Full Project" }
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isSelectOpen && !target.closest('.custom-select')) {
        setIsSelectOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isSelectOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Create a proper FormData object for Web3Forms
      const submitData = new FormData();
      
      // Add the access key and other required fields
      submitData.append("access_key", "fdc68c16-282e-49e2-a6a9-93d9272e04e3");
      submitData.append("name", formData.name);
      submitData.append("email", formData.email);
      submitData.append("service", formData.service);
      submitData.append("message", formData.message);
      submitData.append("from_name", "LuxeStudio Website");
      submitData.append("subject", `New inquiry from ${formData.name} - ${formData.service}`);
      
      // Add honeypot field to prevent spam
      submitData.append("botcheck", "");
      
      // Add redirect URL for fallback
      submitData.append("redirect", "https://www.luxestudio.live/");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData,
        headers: {
          "Accept": "application/json"
        }
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", service: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      
      // Fallback: create a mailto link as backup
      const mailtoLink = `mailto:contact@luxestudio.live?subject=Website Inquiry from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AService: ${formData.service}%0D%0AMessage: ${formData.message}`;
      
      const useMailto = confirm("There was an error submitting your message. Would you like to open your email client instead?");
      if (useMailto) {
        window.location.href = mailtoLink;
      }
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleServiceSelect = (value: string) => {
    handleChange("service", value)
    setIsSelectOpen(false)
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-300">Tell us about your project and we'll get back to you within 24 hours.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/5 backdrop-blur-md border border-white/10">
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="inline-flex p-4 rounded-full bg-green-500/20 mb-4">
                    <CheckCircle className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank you!</h3>
                  <p className="text-gray-300">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                      <Input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                      <Input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="block text-sm font-medium text-gray-300 mb-2">Select a Service</label>
                    <div className="relative custom-select">
                      <button
                        id="contact-service"
                        type="button"
                        className="w-full bg-white/10 border border-white/20 text-white rounded-md px-3 py-2 text-left flex items-center justify-between hover:bg-white/20 transition-colors"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          setIsSelectOpen(!isSelectOpen)
                        }}
                        onMouseDown={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                        }}
                      >
                        <span className={formData.service ? "text-white" : "text-gray-400"}>
                          {formData.service 
                            ? serviceOptions.find(opt => opt.value === formData.service)?.label 
                            : "Choose a service"
                          }
                        </span>
                        <svg
                          className={`w-4 h-4 transition-transform ${isSelectOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {isSelectOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-gray-900 border border-white/20 rounded-md shadow-lg z-50 max-h-60 overflow-auto">
                          {serviceOptions.map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              className="w-full px-3 py-2 text-left text-white hover:bg-white/10 transition-colors first:rounded-t-md last:rounded-b-md"
                              onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                handleServiceSelect(option.value)
                              }}
                              onMouseDown={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                              }}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <Textarea
                      id="contact-message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 min-h-[120px]"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default function HomePage() {
  useEffect(() => {
    // Handle hash navigation when page loads (for direct links like /#brands)
    const hash = window.location.hash
    if (hash) {
      const timeoutId = setTimeout(() => {
        const element = document.getElementById(hash.slice(1))
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      }, 500) // Wait a bit longer for components to fully render
      
      return () => clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <BrandsSection />
      <WhyChooseSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  )
}
