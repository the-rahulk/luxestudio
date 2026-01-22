"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ExternalLink, Sparkles, Globe, Monitor } from "lucide-react";

interface Website {
  name: string;
  url: string;
  category: string;
  description: string;
  gradient: string;
}

const websites: Website[] = [
  { name: "Decent Academy", url: "http://www.decentacademy.in/", category: "Education", description: "Educational platform for students", gradient: "from-blue-500 to-cyan-500" },
  { name: "Luxe Labels", url: "https://www.luxelabels.co.in", category: "Fashion", description: "Premium fashion labels", gradient: "from-purple-500 to-pink-500" },
  { name: "Auri Concept", url: "https://auriconcept.com", category: "Design", description: "Creative design studio", gradient: "from-amber-500 to-orange-500" },
  { name: "Neo Institute", url: "https://luxestudio-live.github.io/neo-institute/", category: "Education", description: "Modern learning institute", gradient: "from-indigo-500 to-blue-500" },
  { name: "Gadget Gala", url: "https://www.gadget-gala.shop", category: "E-Commerce", description: "Electronics shopping platform", gradient: "from-cyan-500 to-teal-500" },
  { name: "Gurukul Study Center", url: "https://gurukulstudycenter.in/", category: "Education", description: "Academic study center", gradient: "from-green-500 to-emerald-500" },
  { name: "AB Classes", url: "https://luxestudio-live.github.io/AB-classes/", category: "Education", description: "Professional coaching classes", gradient: "from-violet-500 to-purple-500" },
  { name: "Power Gold Gym", url: "https://luxestudio-live.github.io/power-gold-gym/", category: "Fitness", description: "Premium fitness center", gradient: "from-red-500 to-rose-500" },
  { name: "Yogis Yoga", url: "https://www.yogisyoga.in/", category: "Wellness", description: "Yoga and wellness studio", gradient: "from-teal-500 to-green-500" },
  { name: "R3 Studio", url: "https://luxestudio-live.github.io/r3-studio/pages/homepage.html", category: "Creative", description: "Design and creative studio", gradient: "from-fuchsia-500 to-pink-500" },
  { name: "Vedant Hospital", url: "https://luxestudio-live.github.io/vedant-hospital/", category: "Healthcare", description: "Medical care facility", gradient: "from-blue-500 to-indigo-500" },
  { name: "Kamini Beauty Academy", url: "https://luxestudio-live.github.io/Kamini-Beautician-and-Makup-Academy/", category: "Beauty", description: "Beautician and makeup academy", gradient: "from-pink-500 to-rose-500" },
  { name: "Virats Buildtech", url: "https://luxestudio-live.github.io/virats-buildtech", category: "Construction", description: "Construction and development", gradient: "from-orange-500 to-amber-500" },
];

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [loadedIframes, setLoadedIframes] = useState<Set<number>>(new Set());

  const handleIframeLoad = (index: number) => {
    setLoadedIframes(prev => new Set(prev).add(index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
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
          <motion.div
            className="inline-flex p-4 rounded-full bg-gradient-to-r from-amber-500/20 to-purple-500/20 mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Globe className="h-12 w-12 text-amber-400" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover the digital excellence we've crafted for our clients
          </motion.p>
        </motion.div>
      </section>

      {/* Portfolio Grid */}
      <main className="container mx-auto py-16 px-4">
        <section className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-amber-400" />
              <p className="text-amber-400 font-semibold text-lg">Some of Our Works</p>
              <Sparkles className="h-6 w-6 text-amber-400" />
            </div>
            <p className="text-gray-300 text-lg">Crafted with passion, delivered with excellence</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {websites.map((website, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                {/* Mobile Phone Mockup - Mobile Only */}
                <div className="relative lg:hidden">
                  {/* Phone Frame */}
                  <div className="mx-auto max-w-[300px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
                    {/* Phone Screen */}
                    <div className="bg-black rounded-[2rem] p-2 relative">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
                      
                      {/* Screen Content */}
                      <div className="relative bg-white rounded-[1.5rem] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
                        {/* Mobile Browser Chrome */}
                        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-gray-100 to-gray-200 flex items-center px-3 z-10 border-b border-gray-300">
                          <div className="flex-1 bg-white rounded-full px-3 py-1.5 text-[8px] text-gray-600 truncate border border-gray-300">
                            {website.url}
                          </div>
                        </div>

                        {/* Mobile Website Content */}
                        <div className="absolute inset-0 top-12 bg-white overflow-hidden">
                          <iframe
                            src={website.url}
                            className="border-0 w-full h-full"
                            style={{ 
                              width: '100%',
                              height: '100%'
                            }}
                            title={website.name}
                            loading="lazy"
                            onLoad={() => handleIframeLoad(index)}
                            sandbox="allow-same-origin allow-scripts"
                          />
                          
                          {/* Loading State */}
                          {!loadedIframes.has(index) && (
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center z-10">
                              <div className="text-center">
                                <div className="inline-block w-8 h-8 border-3 border-amber-500 border-t-transparent rounded-full animate-spin mb-2"></div>
                                <p className="text-gray-500 text-xs">Loading...</p>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Mobile Hover Overlay */}
                        <a 
                          href={website.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="absolute inset-0 z-30"
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${website.gradient} opacity-0 active:opacity-20 transition-opacity duration-300 flex items-center justify-center`}>
                            <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl">
                              <ExternalLink className="h-8 w-8 text-amber-500" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Project Info */}
                  <div className="text-center mt-6 px-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{website.name}</h3>
                    <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r ${website.gradient} text-white mb-3`}>
                      {website.category}
                    </span>
                    <p className="text-gray-400 text-sm mb-4">{website.description}</p>
                    <a 
                      href={website.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors text-sm font-medium"
                    >
                      <Globe className="h-4 w-4" />
                      {website.url}
                    </a>
                  </div>
                </div>

                {/* Laptop Mockup - Desktop Only */}
                <div className="relative hidden lg:block">
                  {/* Laptop Frame */}
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-2xl p-3 pb-0 shadow-2xl">
                    {/* Laptop Screen Bezel */}
                    <div className="bg-black rounded-t-lg p-2 relative">
                      {/* Camera */}
                      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
                      
                      {/* Screen Content */}
                      <div className="relative bg-white rounded-sm overflow-hidden aspect-video group-hover:shadow-2xl transition-shadow duration-500">
                        {/* Browser Chrome */}
                        <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-gray-100 to-gray-200 flex items-center px-2 gap-1 z-10 border-b border-gray-300">
                          {/* Browser Buttons */}
                          <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          </div>
                          {/* Address Bar */}
                          <div className="flex-1 mx-2 bg-white rounded-sm px-2 py-0.5 text-[6px] text-gray-600 truncate border border-gray-300">
                            {website.url}
                          </div>
                        </div>

                        {/* Website Content - Responsive Desktop Preview */}
                        <div className="absolute inset-0 top-6 bg-white overflow-hidden">
                          <div className="w-full h-full relative">
                            <iframe
                              src={website.url}
                              className="border-0 absolute top-0 left-0"
                              style={{ 
                                width: '1600px',
                                height: '1000px',
                                transform: 'scale(0.55)',
                                transformOrigin: 'top left',
                              }}
                              title={website.name}
                              loading="lazy"
                              onLoad={() => handleIframeLoad(index)}
                              sandbox="allow-same-origin allow-scripts"
                            />
                          </div>
                          
                          {/* Loading State */}
                          {!loadedIframes.has(index) && (
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center z-10">
                              <div className="text-center">
                                <div className={`inline-block w-12 h-12 border-4 border-gray-300 border-t-transparent rounded-full animate-spin mb-3`}></div>
                                <p className="text-gray-500 text-sm">Loading preview...</p>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Hover Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${website.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-20 flex items-center justify-center`}>
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ 
                              scale: hoveredIndex === index ? 1 : 0,
                              rotate: hoveredIndex === index ? 0 : -180
                            }}
                            transition={{ duration: 0.4, type: "spring" }}
                            className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl"
                          >
                            <ExternalLink className={`h-12 w-12 bg-gradient-to-r ${website.gradient} bg-clip-text text-transparent`} style={{ 
                              WebkitTextFillColor: 'transparent',
                              filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.3))'
                            }} />
                          </motion.div>
                        </div>

                        {/* Click to Visit Badge */}
                        <div className="absolute top-10 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 z-30">
                          <p className="text-white text-xs font-semibold flex items-center gap-2">
                            <Monitor className="h-3 w-3" />
                            Click to Visit Live Site
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Laptop Base */}
                  <div className="relative h-3">
                    <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-lg"></div>
                    <div className="absolute inset-x-0 top-2 h-1 bg-gradient-to-b from-gray-700 to-gray-800" style={{
                      clipPath: 'polygon(10% 0%, 90% 0%, 95% 100%, 5% 100%)'
                    }}></div>
                  </div>

                  {/* Clickable Overlay */}
                  <a
                    href={website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-30"
                    aria-label={`Visit ${website.name}`}
                  ></a>
                </div>

                {/* Project Info Below Laptop */}
                <div className="mt-6 px-2">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-300 group-hover:to-amber-500 transition-all duration-300 mb-2">
                        {website.name}
                      </h3>
                      <div className={`inline-block bg-gradient-to-r ${website.gradient} bg-opacity-20 px-3 py-1 rounded-full border border-white/10`}>
                        <p className={`text-sm font-semibold bg-gradient-to-r ${website.gradient} bg-clip-text text-transparent`}>
                          {website.category}
                        </p>
                      </div>
                    </div>
                    <motion.div 
                      className={`bg-gradient-to-r ${website.gradient} bg-opacity-20 p-3 rounded-xl border border-white/10`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <ExternalLink className="h-5 w-5 text-white" />
                    </motion.div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-3">{website.description}</p>
                  
                  {/* URL Display */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 truncate">
                    <Globe className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">{website.url}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-md border border-amber-300/30 p-12 rounded-2xl overflow-hidden max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-purple-400/5"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Ready to Join Our Success Stories?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's create something extraordinary for your brand
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact-us" 
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-black font-bold px-10 py-4 rounded-full hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-500/50"
                  >
                    <Sparkles className="h-5 w-5" />
                    Start Your Project
                  </a>
                  <a 
                    href="https://wa.me/919987031290" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-10 py-4 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/50"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
