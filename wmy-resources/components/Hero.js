"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* 
          IMPORTANT: 
          1. Check that your file is exactly 'hero-bg.jpg' (lowercase).
          2. If it's a different extension (e.g. .jpeg, .png), change the src below.
        */}
        <Image
          src="/hero-bg.jpg" 
          alt="Power Grid"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        
        {/* 
          Lighter Overlay: This lets the image show through while keeping the 
          text on the left readable. Adjust the 'from-dark/80' to 'from-dark/60' 
          if you want it even brighter. 
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-primary/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
        >
          Powering Malaysia's <br />
          <span className="text-secondary">Infrastructure</span> Since 1993
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-200"
        >
          Leading Bumiputera M&E Contractor specializing in Electrical, Mechanical, Solar, and Telecommunication solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/services"
            className="bg-secondary text-dark px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-500 transition-colors"
          >
            Our Services
          </Link>
          <Link
            href="/projects"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-dark transition-colors"
          >
            View Projects
          </Link>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary/90 backdrop-blur-md py-6 hidden md:block">
        <div className="container mx-auto px-4 grid grid-cols-4 gap-4 text-center text-white">
          <div>
            <p className="text-3xl font-bold text-secondary">30+</p>
            <p className="text-sm uppercase tracking-wider">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-secondary">183+</p>
            <p className="text-sm uppercase tracking-wider">Projects Completed</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-secondary">100%</p>
            <p className="text-sm uppercase tracking-wider">Bumiputera Owned</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-secondary">G7</p>
            <p className="text-sm uppercase tracking-wider">CIDB Grade</p>
          </div>
        </div>
      </div>
    </section>
  );
}