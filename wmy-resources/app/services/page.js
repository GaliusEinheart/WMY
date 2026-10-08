import { Zap, Sun, Radio, Battery, Wind, Flame, Cctv, Wrench } from "lucide-react";
import Image from "next/image";

export default function ServicesPage() {
  const meServices = [
    { icon: <Zap size={24} />, title: "Low Voltage (LV) Cables", desc: "Design, supply, delivery, installation, testing, and commissioning of LV cables and all electrical components/accessories." },
    { icon: <Wind size={24} />, title: "Air Conditioning", desc: "Design, supply, delivery, installation, testing, and commissioning of air conditioning and underground cable systems." },
    { icon: <Flame size={24} />, title: "Fire Fighting & Sprinkler", desc: "Design, supply, delivery, installation, testing, and commissioning of fire fighting and sprinkler pipe systems." },
    { icon: <Cctv size={24} />, title: "CCTV, WIFI & Telecom", desc: "Design, supply, installation, testing, and maintenance of CCTV, WIFI, telecommunication equipment, video walls, and digital signage." },
    { icon: <Radio size={24} />, title: "Fiber Optic & Underground", desc: "Design, supply, delivery, installation, testing, and commissioning of underground power cables and fiber optic networks." },
    { icon: <Wrench size={24} />, title: "Maintenance", desc: "Maintenance of electrical services for buildings, factories, and public infrastructure." },
  ];

  const powerServices = [
    { icon: <Battery size={24} />, title: "UPS Systems", desc: "Uninterruptible Power Supply (UPS) systems from 0.4KVA to 2400KVA, including installation and maintenance." },
    { icon: <Zap size={24} />, title: "Rectifiers & Stabilizers", desc: "Switched Mode Rectifiers (SMR) from 25Amp to 100Amp per module and Voltage Stabilizers." },
    { icon: <Sun size={24} />, title: "Hybrid Solar Solutions", desc: "Hybrid solar solutions, solar panels, inverters, and equipment for sustainable energy." },
    { icon: <Battery size={24} />, title: "Sealed Lead Acid Battery", desc: "Supply of maintenance-free batteries and sealed lead acid batteries for various power applications." },
    { icon: <Radio size={24} />, title: "Telecommunication Equipment", desc: "Supply of telecommunication equipment and accessories." },
    { icon: <Cctv size={24} />, title: "Digital Signage & Kiosks", desc: "Equipment for video walls, digital signage, interactive kiosks, and solar panels." },
  ];

  return (
    <div className="pt-24 pb-20 bg-light">
      <div className="bg-primary text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Comprehensive Mechanical & Electrical solutions and Power Equipment supply.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* M&E Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-dark mb-4">Mechanical & Electrical Systems</h2>
          <div className="w-20 h-1 bg-secondary mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meServices.map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary">
                <div className="text-primary mb-3">{service.icon}</div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Power Equipment Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-dark mb-4">Power Equipment</h2>
          <div className="w-20 h-1 bg-secondary mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {powerServices.map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-secondary">
                <div className="text-secondary mb-3">{service.icon}</div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solar Diagram Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-dark mb-4">Solar & Renewable Energy Solutions</h2>
          <div className="w-20 h-1 bg-secondary mb-6"></div>
          <p className="text-gray-600 mb-8 max-w-3xl">
            We provide end-to-end solar solutions, from design and supply to installation and commissioning. Our systems integrate seamlessly with existing TNB power sources and battery banks.
          </p>
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden">
            {/* Replace with the solar diagram from the PDF or a similar solar image */}
            <Image src="/solar-diagram.jpg" alt="Solar System Diagram" fill className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}