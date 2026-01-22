"use client"

import React from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Sparkles, Target, Users, Award, TrendingUp, Shield, Heart, Zap } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
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
            Where{" "}
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Luxury
            </span>{" "}
            Meets{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Innovation
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Crafting premium digital experiences that elevate your brand to extraordinary heights
          </motion.p>
        </motion.div>
      </section>

      <main className="container mx-auto py-16 px-4">
        {/* Our Story Section */}
        <motion.section 
          className="max-w-6xl mx-auto mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative bg-gradient-to-br from-amber-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-md border border-amber-300/20 p-12 rounded-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                Our Story
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed mb-4">
                LuxeStudio was born from a vision to redefine digital excellence. We're not just a web development studio—we're artisans of the digital realm, combining technical mastery with aesthetic brilliance to create experiences that resonate.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                Every project we undertake is a testament to our commitment to luxury, innovation, and unparalleled quality. We believe your digital presence should be as exceptional as your vision.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Core Values Section - Redesigned */}
        <section className="max-w-6xl mx-auto mb-20">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300">The principles that define excellence</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                icon: <Sparkles className="h-12 w-12" />, 
                title: "Premium Quality", 
                desc: "Excellence in every pixel", 
                gradient: "from-amber-400 to-yellow-500",
                bgGradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
                delay: 0.1
              },
              { 
                icon: <Target className="h-12 w-12" />, 
                title: "Precision", 
                desc: "Meticulous attention to detail", 
                gradient: "from-purple-400 to-violet-500",
                bgGradient: "from-purple-500/20 via-violet-500/10 to-transparent",
                delay: 0.2
              },
              { 
                icon: <Heart className="h-12 w-12" />, 
                title: "Passion", 
                desc: "Driven by creative excellence", 
                gradient: "from-pink-400 to-rose-500",
                bgGradient: "from-pink-500/20 via-rose-500/10 to-transparent",
                delay: 0.3
              },
              { 
                icon: <Shield className="h-12 w-12" />, 
                title: "Trust", 
                desc: "Building lasting partnerships", 
                gradient: "from-cyan-400 to-blue-500",
                bgGradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
                delay: 0.4
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: value.delay,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 p-10 rounded-3xl hover:border-white/40 transition-all duration-500 h-full">
                  {/* Background Gradient Effect */}
                  <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${value.bgGradient} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Icon Container */}
                  <motion.div 
                    className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${value.gradient} bg-opacity-20 mb-6 relative z-10`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={`bg-gradient-to-br ${value.gradient} bg-clip-text text-transparent`}>
                      {value.icon}
                    </div>
                  </motion.div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className={`text-3xl font-bold mb-4 text-white group-hover:bg-gradient-to-r group-hover:${value.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                      {value.title}
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed">{value.desc}</p>
                  </div>
                  
                  {/* Decorative Corner Element */}
                  <div className={`absolute bottom-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r ${value.gradient} opacity-50 group-hover:w-6 group-hover:h-6 transition-all duration-300`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* What We Offer */}
        <motion.section 
          className="max-w-6xl mx-auto mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
            Premium Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Bespoke Web Development", desc: "Custom-crafted digital solutions tailored to your unique vision" },
              { title: "Luxury Brand Design", desc: "Sophisticated visual identities that command attention" },
              { title: "Premium E-Commerce", desc: "High-converting online stores with seamless experiences" },
              { title: "Strategic Digital Consulting", desc: "Expert guidance to amplify your digital presence" },
              { title: "Performance Optimization", desc: "Lightning-fast, flawlessly optimized platforms" },
              { title: "Ongoing Excellence Support", desc: "White-glove maintenance and continuous improvement" },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-amber-300/30 transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 group-hover:w-4 group-hover:h-4 transition-all duration-300"></div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-300 group-hover:to-amber-500 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Choose LuxeStudio */}
        <motion.section 
          className="max-w-6xl mx-auto mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative bg-gradient-to-br from-purple-900/30 via-black to-pink-900/30 backdrop-blur-md border border-purple-300/20 p-12 rounded-2xl overflow-hidden">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              The LuxeStudio Difference
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {[
                { icon: <Award className="h-8 w-8" />, title: "Award-Worthy Design", desc: "Every project is a masterpiece" },
                { icon: <Zap className="h-8 w-8" />, title: "Cutting-Edge Tech", desc: "Latest innovations, flawlessly integrated" },
                { icon: <Users className="h-8 w-8" />, title: "White-Glove Service", desc: "Personalized attention, every step" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-4">
                    <div className="text-purple-300">{item.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-md border border-amber-300/30 p-12 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-purple-400/5"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Elevate Your Digital Presence?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's create something extraordinary together
              </p>
              <a 
                href="/contact-us" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-black font-bold px-10 py-4 rounded-full hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-500/50"
              >
                <Sparkles className="h-5 w-5" />
                Start Your Journey
              </a>
            </div>
          </div>
        </motion.section>
      </main>
      
      <Footer />
    </div>
  );
}
