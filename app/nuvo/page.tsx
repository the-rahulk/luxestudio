"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Zap,
  Calendar,
  Bell,
  Star,
  Mail,
  BarChart3,
  Settings,
  Clock,
  TrendingUp,
  Users,
  CheckCircle,
} from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { useState } from "react"

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-violet-900">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="inline-flex p-4 rounded-full bg-purple-500/20 mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Zap className="h-12 w-12 text-purple-400" />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Automate the Routine.{" "}
          <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
            Amplify the Impact.
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Transform your business with intelligent automation solutions that save time, reduce errors, and boost
          productivity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Get Started
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
      icon: <Calendar className="h-8 w-8" />,
      title: "Appointment Booking",
      description: "Automated scheduling system with calendar integration and reminders",
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Smart Reminders",
      description: "Intelligent notification system for appointments and follow-ups",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Review Collection",
      description: "Automated review requests and reputation management",
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Automation",
      description: "Personalized email campaigns and drip sequences",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics & Reporting",
      description: "Real-time insights and automated performance reports",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Custom Workflows",
      description: "Tailored automation solutions for your specific needs",
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Automation Services</h2>
          <p className="text-xl text-gray-300">
            Streamline your operations with our comprehensive automation solutions
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
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-purple-600 to-violet-600 mb-4">
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

function BenefitsSection() {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Save 40+ Hours Weekly",
      description: "Automate repetitive tasks and focus on what matters most",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Increase Revenue by 30%",
      description: "Better lead nurturing and customer retention",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Improve Customer Experience",
      description: "Faster response times and consistent communication",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Reduce Human Error",
      description: "Eliminate mistakes with automated processes",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Data-Driven Insights",
      description: "Make informed decisions with real-time analytics",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Scale Effortlessly",
      description: "Grow your business without proportional overhead",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Nuvo</h2>
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
              <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 mb-4">
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

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "Nuvo's automation saved us 50 hours per week. Our team can now focus on strategic growth instead of repetitive tasks.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Digital Solutions",
      text: "The ROI was immediate. Within 3 months, we saw a 40% increase in lead conversion thanks to their automated workflows.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Agency",
      text: "Outstanding support and seamless integration. The custom workflows perfectly match our business processes.",
      rating: 5,
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
                    <p className="text-purple-400">{testimonial.company}</p>
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
    company: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const data = {
      access_key: "fdc68c16-282e-49e2-a6a9-93d9272e04e3", // 🔁 Replace with your Web3Forms access key
      from_name: "Nuvo",
      subject: "New Message from Nuvo Form",
      name: formData.name,
      email: formData.email,
      company: formData.company,
      message: formData.message,
      botcheck: "" // Honeypot for spam prevention
    };

    const formDataToSend = new FormData();
    for (const key in data) {
      formDataToSend.append(key, data[key as keyof typeof data]);
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const result = await res.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", company: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 4000);
      } else {
        setError("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-900/20 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Free Consultation</h2>
          <p className="text-xl text-gray-300">Let's discuss how automation can transform your business</p>
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
                  <p className="text-gray-300">We'll contact you within 24 hours to schedule your free consultation.</p>
                </div>
              ) : (
                <>
                  {error && (
                    <div className="mb-6 p-4 bg-red-500/20 border border-red-500/20 rounded-lg">
                      <p className="text-red-400 text-center">{error}</p>
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nuvo-name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                      <Input
                        id="nuvo-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="nuvo-email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                      <Input
                        id="nuvo-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>
                  <input type="text" name="botcheck" className="hidden" autoComplete="off" />
                  <div>
                    <label htmlFor="nuvo-company" className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                    <Input
                      id="nuvo-company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="nuvo-message" className="block text-sm font-medium text-gray-300 mb-2">
                      Tell us about your automation needs
                    </label>
                    <Textarea
                      id="nuvo-message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 min-h-[120px]"
                      placeholder="What processes would you like to automate?"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                  >
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  </form>
                </>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default function NuvoPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
