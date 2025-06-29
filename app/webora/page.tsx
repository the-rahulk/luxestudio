"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Globe,
  Code,
  ShoppingCart,
  Search,
  Zap,
  Wrench,
  Lightbulb,
  Palette,
  Hammer,
  Rocket,
  CheckCircle,
  Star,
} from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { useState } from "react"

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-black to-cyan-900">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"></div>

      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="inline-flex p-4 rounded-full bg-blue-500/20 mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Globe className="h-12 w-12 text-blue-400" />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Websites That Work{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            as Hard as You Do.
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          High-performance websites and web applications built with cutting-edge technology and optimized for results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

function ServicesSection() {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Website Development",
      description: "Tailored solutions built with modern frameworks and best practices",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Landing Page Optimization",
      description: "High-converting pages designed to maximize your ROI",
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "E-commerce Solutions",
      description: "Powerful online stores with seamless payment integration",
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Optimization",
      description: "Technical SEO and content optimization for better rankings",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "Lightning-fast loading speeds and optimal user experience",
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Maintenance & Updates",
      description: "Ongoing support to keep your website secure and up-to-date",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Development Services</h2>
          <p className="text-xl text-gray-300">Comprehensive web solutions for modern businesses</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 h-full">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TechStackSection() {
  const technologies = [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "WordPress",
    "Shopify",
    "AWS",
    "Vercel",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "GraphQL",
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Tech Stack</h2>
          <p className="text-xl text-gray-300">Built with industry-leading technologies</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-white font-semibold">{tech}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const steps = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Discovery",
      description: "Understanding your goals and requirements",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Design",
      description: "Creating wireframes and visual designs",
    },
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Build",
      description: "Developing with clean, scalable code",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Launch",
      description: "Deploying and optimizing for performance",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Development Process</h2>
          <p className="text-xl text-gray-300">From concept to launch in four strategic phases</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="text-center relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "David Park",
      company: "E-commerce Startup",
      text: "Webora delivered a lightning-fast e-commerce site that increased our conversion rate by 45%. Exceptional work!",
      rating: 5,
    },
    {
      name: "Lisa Thompson",
      company: "Marketing Agency",
      text: "The team's attention to performance optimization is outstanding. Our site now loads in under 2 seconds.",
      rating: 5,
    },
    {
      name: "James Wilson",
      company: "SaaS Company",
      text: "Professional, reliable, and delivered exactly what we needed. Our new landing pages are converting beautifully.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Client Results</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 backdrop-blur-md border border-white/10 h-full">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={`${testimonial.name}-star-${i}`} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-blue-400">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      access_key: "fdc68c16-282e-49e2-a6a9-93d9272e04e3", // 🔁 Replace this
      subject: "New Project Inquiry from Webora Page", // 🧠 Identify this form
      botcheck: "", // ✅ Required hidden field
      ...formData,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          projectType: "",
          budget: "",
          message: "",
        });
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        setIsError(true);
        setTimeout(() => setIsError(false), 3000);
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setIsError(true);
      setTimeout(() => setIsError(false), 3000);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get Your Project Quote</h2>
          <p className="text-xl text-gray-300">Tell us about your project and we'll provide a detailed proposal</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/5 backdrop-blur-md border border-white/10">
            <CardContent className="p-8">
              {isSubmitted && (
                <div className="text-center py-8">
                  <div className="inline-flex p-4 rounded-full bg-green-500/20 mb-4">
                    <CheckCircle className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank you!</h3>
                  <p className="text-gray-300">We'll send you a detailed proposal within 48 hours.</p>
                </div>
              )}
              {isError && (
                <div className="text-center py-8">
                  <div className="inline-flex p-4 rounded-full bg-red-500/20 mb-4">
                    <CheckCircle className="h-8 w-8 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Error</h3>
                  <p className="text-gray-300">Something went wrong. Please try again.</p>
                </div>
              )}
              {!isSubmitted && !isError && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="webora-name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                      <Input
                        id="webora-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <input type="text" name="botcheck" className="hidden" autoComplete="off" />
                    <div>
                      <label htmlFor="webora-email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                      <Input
                        id="webora-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="webora-project-type" className="block text-sm font-medium text-gray-300 mb-2">Project Type</label>
                      <Input
                        id="webora-project-type"
                        type="text"
                        value={formData.projectType}
                        onChange={(e) => handleChange("projectType", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                        placeholder="E-commerce, Landing Page, etc."
                      />
                    </div>
                    <div>
                      <label htmlFor="webora-budget" className="block text-sm font-medium text-gray-300 mb-2">Budget Range</label>
                      <Input
                        id="webora-budget"
                        type="text"
                        value={formData.budget}
                        onChange={(e) => handleChange("budget", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                        placeholder="$$$"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="webora-message" className="block text-sm font-medium text-gray-300 mb-2">Project Details</label>
                    <Textarea
                      id="webora-message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 min-h-[120px]"
                      placeholder="Tell us about your project requirements..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                  >
                    Get Project Quote
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

export default function WeboraPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <TechStackSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
