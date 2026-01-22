"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, MessageCircle, Clock, Send, Mail, MapPin, Sparkles } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-purple-500/10">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <motion.div 
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Let's Create{" "}
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              Something Extraordinary
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your vision deserves a premium partner. Reach out today.
          </motion.p>
        </motion.div>
      </section>

      <main className="container mx-auto py-16 px-4">
        <section className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Information - Left Side */}
            <motion.div 
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Premium Contact Card */}
              <div className="relative bg-gradient-to-br from-amber-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-md border border-amber-300/20 p-8 rounded-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full blur-2xl"></div>
                
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                  Get In Touch
                </h2>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <motion.div 
                    className="flex items-start gap-4 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-4 rounded-xl group-hover:from-purple-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                      <Phone className="w-6 h-6 text-purple-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2 text-lg">Phone</h3>
                      <a 
                        href="tel:+919987031290" 
                        className="text-gray-300 hover:text-amber-400 transition-colors text-lg"
                      >
                        +91 9987031290
                      </a>
                    </div>
                  </motion.div>

                  {/* WhatsApp */}
                  <motion.div 
                    className="flex items-start gap-4 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-4 rounded-xl group-hover:from-green-500/30 group-hover:to-green-600/30 transition-all duration-300">
                      <MessageCircle className="w-6 h-6 text-green-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2 text-lg">WhatsApp</h3>
                      <a 
                        href="https://wa.me/919987031290" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-green-400 transition-colors text-lg inline-flex items-center gap-2"
                      >
                        +91 9987031290
                        <Sparkles className="h-4 w-4" />
                      </a>
                      <p className="text-sm text-gray-400 mt-1">Click to chat instantly</p>
                    </div>
                  </motion.div>

                  {/* Business Hours */}
                  <motion.div 
                    className="flex items-start gap-4 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 p-4 rounded-xl group-hover:from-amber-500/30 group-hover:to-amber-600/30 transition-all duration-300">
                      <Clock className="w-6 h-6 text-amber-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2 text-lg">Business Hours</h3>
                      <p className="text-gray-300">Monday - Saturday</p>
                      <p className="text-gray-300">10:00 AM - 7:00 PM IST</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Quick Response Badge */}
              <motion.div 
                className="relative bg-gradient-to-r from-purple-900/30 via-black to-pink-900/30 backdrop-blur-md border border-purple-300/20 p-6 rounded-2xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/20 mb-4">
                  <Sparkles className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="font-bold text-white mb-2 text-lg">Premium Response Time</h3>
                <p className="text-gray-300">
                  We respond to all inquiries within <span className="text-amber-400 font-semibold">24 hours</span> during business days
                </p>
              </motion.div>

              {/* Quick Links */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-white">Explore More</h3>
                <div className="space-y-3">
                  {[
                    { href: "/about-us", label: "About Us" },
                    { href: "/privacy-policy", label: "Privacy Policy" },
                    { href: "/terms-and-conditions", label: "Terms & Conditions" },
                    { href: "/refund-policy", label: "Refund Policy" },
                  ].map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      className="flex items-center gap-2 text-gray-300 hover:text-amber-400 transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 group-hover:w-3 group-hover:h-3 transition-all duration-300"></span>
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form - Right Side */}
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-2xl overflow-hidden">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Start Your Project
                  </h2>
                  <p className="text-gray-300 mb-8 text-lg">
                    Share your vision with us, and let's bring it to life
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-200 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-200 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-200 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                        placeholder="How can we help elevate your brand?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-200 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        required
                        className="w-full px-5 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-white placeholder-gray-500 resize-none transition-all duration-300"
                        placeholder="Tell us about your project, goals, and vision..."
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-black font-bold px-8 py-4 rounded-xl hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-amber-500/50 flex items-center justify-center gap-3 text-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send className="h-5 w-5" />
                      Send Message
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-300/20 px-8 py-4 rounded-full">
              <Sparkles className="h-5 w-5 text-amber-400" />
              <p className="text-gray-200 text-lg">
                Prefer to chat? Message us on{" "}
                <a 
                  href="https://wa.me/919987031290" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-semibold transition-colors"
                >
                  WhatsApp
                </a>
              </p>
            </div>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
