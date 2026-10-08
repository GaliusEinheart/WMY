import Hero from "@/components/Hero";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Sun, Radio, Battery } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services Preview */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Core Services</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive Mechanical & Electrical solutions, from design to commissioning, tailored for modern infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Zap size={40} />, title: "Electrical Systems", desc: "LV cables, switchboards, and complete electrical infrastructure." },
              { icon: <Sun size={40} />, title: "Solar & Renewable", desc: "Hybrid solar solutions, solar panels, and sustainable energy systems." },
              { icon: <Radio size={40} />, title: "Telecommunication", desc: "Fiber optic, CCTV, WIFI, and network infrastructure." },
              { icon: <Battery size={40} />, title: "Power Equipment", desc: "UPS systems, rectifiers, batteries, and voltage stabilizers." },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary">
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-6">{service.desc}</p>
                <Link href="/services" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MD Message Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 relative h-80 w-full rounded-2xl overflow-hidden shadow-xl">
            {/* Replace with MD photo */}
            <Image src="/md-photo.jpg" alt="Managing Director" fill className="object-cover" />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-dark mb-4">A Message from Our Managing Director</h2>
            <div className="w-20 h-1 bg-secondary mb-6"></div>
            <p className="text-gray-600 italic mb-4">
              "Always customer focused and professional, we provide trusted advice and implement innovative solutions for specialist services."
            </p>
            <p className="text-gray-600 mb-6">
              We recognize our responsibility to the health, safety and well-being of our staff and the public. We strive to grow our business with integrity by contributing to the serve while being socially and environmentally conscious.
            </p>
            <p className="font-bold text-dark">Walid Bin Jaafar</p>
            <p className="text-sm text-gray-500">Managing Director</p>
          </div>
        </div>
      </section>
    </>
  );
}