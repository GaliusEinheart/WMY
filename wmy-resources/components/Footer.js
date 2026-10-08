import Link from "next/link";
import { Mail, Phone, MapPin, Printer } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold mb-4">WMY Resources</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Established in 1993, we are a leading Bumiputera M&E contractor
            specializing in electrical, mechanical, solar, and power solutions.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-secondary">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-secondary">Services</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Mechanical & Electrical</li>
            <li>Power Equipment (UPS)</li>
            <li>Solar & Renewable Energy</li>
            <li>Fiber Optic & Telecommunication</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-secondary">Contact</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-1 shrink-0" />
              <span>A-27 KIK Mara Wilayah Persekutuan, KM 13, Off Jalan Batu Caves, 68100 Kuala Lumpur</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:+60194902009" className="hover:text-white">+6019 490 2009</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:wmyrmsb@gmail.com" className="hover:text-white">wmyrmsb@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-700 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} WMY Resources (M) Sdn Bhd. All rights reserved. Reg No: 269079-M
      </div>
    </footer>
  );
}