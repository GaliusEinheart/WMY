"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Certifications", href: "/certifications" },
  { name: "Our Team", href: "/team" },
  { name: "Assets", href: "/assets" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="relative w-40 h-12">
          {/* Replace with your actual logo */}
          <Image
            src="/logo.png"
            alt="WMY Resources Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-dark hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/60194902009"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-dark px-4 py-2 rounded-full font-bold text-sm hover:bg-yellow-500 transition-colors"
          >
            WhatsApp Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-dark font-semibold hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://wa.me/60194902009"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-dark px-4 py-2 rounded-full font-bold text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}