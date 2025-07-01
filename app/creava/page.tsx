"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Heart,
  Palette,
  Search,
  Layers,
  Smartphone,
  Users,
  Lightbulb,
  PenTool,
  Zap,
  CheckCircle,
  Star,
} from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { useState } from "react"

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-900 via-black to-orange-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5"></div>
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="inline-flex p-4 rounded-full bg-yellow-500/20 mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Heart className="h-12 w-12 text-yellow-400" />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Designing Experiences{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            That Flow.
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We craft beautiful, intuitive user experiences that connect with your audience and drive meaningful engagement
          through thoughtful design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Start Your Design
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
      icon: <Palette className="h-8 w-8" />,
      title: "UI Design",
      description: "Beautiful, modern interfaces that capture your brand essence and delight users",
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "UX Research",
      description: "Data-driven insights to understand your users and optimize their journey",
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Information Architecture",
      description: "Strategic content organization for intuitive navigation and findability",
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Prototyping",
      description: "Interactive prototypes to test and validate design concepts before development",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Design",
      description: "Native and responsive mobile experiences optimized for touch interaction",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Usability Testing",
      description: "Real user feedback to refine and perfect your digital experiences",
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">UI/UX Design Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive design solutions that put your users first
          </p>
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
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-yellow-600 to-orange-600 mb-4">
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

function ProcessSection() {
  const steps = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Discover",
      description: "Understanding your users, goals, and business requirements",
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Research",
      description: "User interviews, competitive analysis, and market insights",
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Ideate",
      description: "Brainstorming solutions and creating user journey maps",
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Design",
      description: "Wireframing, prototyping, and visual design creation",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Test",
      description: "User testing and iterative design improvements",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Deliver",
      description: "Final designs with developer handoff and documentation",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-900/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Design Process</h2>
          <p className="text-xl text-gray-300">A systematic approach to creating exceptional user experiences</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 backdrop-blur-md border border-white/10 h-full">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-yellow-600 to-orange-600 mb-4">
                    {step.icon}
                  </div>
                  <div className="text-sm font-bold text-yellow-400 mb-2">STEP {index + 1}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ToolsSection() {
  const tools = [
    "Figma",
    "Adobe XD",
    "Sketch",
    "Principle",
    "Maze",
    "Hotjar",
    "Miro",
    "InVision",
    "Framer",
    "Adobe Creative Suite",
    "Zeplin",
    "Abstract",
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Design Tools & Technologies</h2>
          <p className="text-xl text-gray-300">Industry-leading tools for professional design workflows</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-white font-semibold">{tool}</p>
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
      name: "Alex Thompson",
      company: "Tech Startup",
      text: "Creava transformed our app's user experience. The new design increased user engagement by 60% and our app store ratings improved dramatically.",
      rating: 5,
    },
    {
      name: "Sophie Chen",
      company: "E-commerce Brand",
      text: "The team's attention to detail and user-centered approach resulted in a 40% increase in conversion rates. Outstanding design work!",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      company: "SaaS Platform",
      text: "Professional, creative, and strategic. Creava delivered designs that not only look beautiful but also solve real user problems.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-900/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Client Success Stories</h2>
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
                    <p className="text-yellow-400">{testimonial.company}</p>
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
    timeline: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    try {
      // Create JSON payload for Web3Forms (production-ready)
      const submitData = {
        access_key: "fdc68c16-282e-49e2-a6a9-93d9272e04e3",
        name: formData.name,
        email: formData.email,
        projectType: formData.projectType,
        timeline: formData.timeline,
        message: formData.message,
        from_name: "Creava Website",
        subject: `New design inquiry from ${formData.name} - ${formData.projectType}`,
        botcheck: "", // Honeypot field for spam prevention
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(submitData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          projectType: "",
          timeline: "",
          message: "",
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error(result.message ?? "Submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setIsError(true);
      setTimeout(() => setIsError(false), 5000);
    } finally {
      setIsSubmitting(false);
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Design Consultation</h2>
          <p className="text-xl text-gray-300">Let's discuss your design needs and create something amazing together</p>
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
                  <p className="text-gray-300">We'll get back to you within 24 hours to discuss your design project.</p>
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
                      <label htmlFor="creava-name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                      <Input
                        id="creava-name"
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
                      <label htmlFor="creava-email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                      <Input
                        id="creava-email"
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
                      <label htmlFor="creava-project-type" className="block text-sm font-medium text-gray-300 mb-2">Project Type</label>
                      <Input
                        id="creava-project-type"
                        type="text"
                        value={formData.projectType}
                        onChange={(e) => handleChange("projectType", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                        placeholder="Website, Mobile App, etc."
                      />
                    </div>
                    <div>
                      <label htmlFor="creava-timeline" className="block text-sm font-medium text-gray-300 mb-2">Timeline</label>
                      <Input
                        id="creava-timeline"
                        type="text"
                        value={formData.timeline}
                        onChange={(e) => handleChange("timeline", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                        placeholder="2-3 months"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="creava-message" className="block text-sm font-medium text-gray-300 mb-2">Project Details</label>
                    <Textarea
                      id="creava-message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 min-h-[120px]"
                      placeholder="Tell us about your design goals and vision..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Starting..." : "Start Design Consultation"}
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

export default function CreavaPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ToolsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
