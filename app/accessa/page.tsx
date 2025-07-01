"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Users,
  Eye,
  FileText,
  UserCheck,
  Shield,
  Headphones,
  TrendingUp,
  Scale,
  Heart,
  CheckCircle,
  XCircle,
  Star,
  Award,
} from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { useState } from "react"

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-black to-emerald-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="inline-flex p-4 rounded-full bg-green-500/20 mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Users className="h-12 w-12 text-green-400" />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Make Every Click Count –{" "}
          <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            For Everyone.
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Creating inclusive digital experiences that work for all users. We ensure your website meets accessibility
          standards while improving usability for everyone.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Get Free Audit
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
      icon: <Eye className="h-8 w-8" />,
      title: "Accessibility Audits",
      description: "Comprehensive WCAG compliance assessment with detailed reports and recommendations",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "WCAG Fixes",
      description: "Expert remediation of accessibility issues to meet AA and AAA standards",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Code Review & Training",
      description: "Developer education and code reviews to prevent future accessibility issues",
    },
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "Real User Testing",
      description: "Testing with actual users who have disabilities for authentic feedback",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Accessibility Statements",
      description: "Legal compliance documentation and accessibility policy creation",
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Ongoing Support",
      description: "Continuous monitoring and maintenance to ensure lasting accessibility",
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Accessibility Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions to make your digital presence inclusive and compliant
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
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 mb-4">
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

function WhyAccessibilitySection() {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Improve SEO Rankings",
      description: "Accessible websites rank higher in search results and reach more users",
    },
    {
      icon: <Scale className="h-8 w-8" />,
      title: "Legal Compliance",
      description: "Avoid lawsuits and meet ADA, Section 508, and WCAG requirements",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Better User Experience",
      description: "Accessible design benefits all users, not just those with disabilities",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-green-900/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Accessibility Matters</h2>
          <p className="text-xl text-gray-300">The business case for inclusive design</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300 text-lg">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">1 in 4 adults in the US has a disability</h3>
          <p className="text-xl text-gray-300 mb-6">
            That's over 61 million potential customers who need accessible experiences
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-green-400">13.7%</p>
              <p className="text-gray-300">Have a mobility disability</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-400">10.8%</p>
              <p className="text-gray-300">Have a cognitive disability</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-400">4.6%</p>
              <p className="text-gray-300">Have a vision disability</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function StandardsSection() {
  const standards = [
    { name: "WCAG 2.1", description: "Web Content Accessibility Guidelines" },
    { name: "ADA", description: "Americans with Disabilities Act" },
    { name: "Section 508", description: "Federal Accessibility Standards" },
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Compliance Standards</h2>
          <p className="text-xl text-gray-300">We ensure your website meets all major accessibility standards</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {standards.map((standard, index) => (
            <motion.div
              key={standard.name}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{standard.name}</h3>
              <p className="text-gray-300">{standard.description}</p>
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
      name: "Maria Garcia",
      company: "Healthcare Provider",
      text: "Accessa helped us achieve full WCAG compliance. Our patient portal is now accessible to all users, and we've seen a 25% increase in online engagement.",
      rating: 5,
    },
    {
      name: "Robert Kim",
      company: "E-learning Platform",
      text: "The accessibility audit revealed issues we never knew existed. The fixes improved usability for all our students, not just those with disabilities.",
      rating: 5,
    },
    {
      name: "Jennifer Adams",
      company: "Marketing Agency",
      text: "Professional, thorough, and knowledgeable. Accessa ensured our website meets Section 508 requirements with ongoing support.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-green-900/20 to-black">
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
                    <p className="text-green-400">{testimonial.company}</p>
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
    website: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    try {
      // Use JSON payload for better CORS compatibility
      const submitData = {
        access_key: "fdc68c16-282e-49e2-a6a9-93d9272e04e3",
        name: formData.name,
        email: formData.email,
        website: formData.website,
        message: formData.message,
        from_name: "Accessa Website",
        subject: `New accessibility inquiry from ${formData.name}`,
        botcheck: "", // Honeypot field for spam protection
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
        setFormData({ name: "", email: "", website: "", message: "" });
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Free Accessibility Audit</h2>
          <p className="text-xl text-gray-300">Get a comprehensive assessment of your website's accessibility</p>
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
                  <p className="text-gray-300">We'll send you a detailed accessibility report within 48 hours.</p>
                </div>
              )}
              {isError && (
                <div className="text-center py-8">
                  <div className="inline-flex p-4 rounded-full bg-red-500/20 mb-4">
                    <XCircle className="h-8 w-8 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Oops!</h3>
                  <p className="text-gray-300 mb-4">There was an error submitting your request. Please try again.</p>
                  <Button 
                    onClick={() => setIsError(false)}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Try Again
                  </Button>
                </div>
              )}
              {!isSubmitted && !isError && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="accessa-name" className="block text-lg font-medium text-gray-300 mb-2">Your Name</label>
                      <Input
                        id="accessa-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400 text-lg p-4"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="accessa-email" className="block text-lg font-medium text-gray-300 mb-2">Your Email</label>
                      <Input
                        id="accessa-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400 text-lg p-4"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="accessa-website" className="block text-lg font-medium text-gray-300 mb-2">Website URL</label>
                    <Input
                      id="accessa-website"
                      type="url"
                      value={formData.website}
                      onChange={(e) => handleChange("website", e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 text-lg p-4"
                      placeholder="https://yourwebsite.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="accessa-message" className="block text-lg font-medium text-gray-300 mb-2">Additional Information</label>
                    <Textarea
                      id="accessa-message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 min-h-[120px] text-lg p-4"
                      placeholder="Tell us about any specific accessibility concerns or requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 text-lg rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Getting Report..." : "Get Free Audit Report"}
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

export default function AccessaPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <WhyAccessibilitySection />
      <StandardsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
