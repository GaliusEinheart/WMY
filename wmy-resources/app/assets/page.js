import Image from "next/image";
import { Truck, Wrench, HardDrive, Hammer } from "lucide-react";

const assetCategories = [
  {
    title: "Vehicles",
    icon: <Truck size={28} />,
    images: [
      { src: "/assets/van-front.jpg", alt: "Van Front" },
      { src: "/assets/van-side.jpg", alt: "Van Side" },
      { src: "/assets/lorry-side.jpg", alt: "Lorry Side" },
      { src: "/assets/ford-front.jpg", alt: "Ford Front" },
      { src: "/assets/ford-side.jpg", alt: "Ford Side" },
      { src: "/assets/mitsubishi.jpg", alt: "Mitsubishi 4WD" },
    ],
  },
  {
    title: "Heavy Equipment & Tools",
    icon: <Hammer size={28} />,
    images: [
      { src: "/assets/cable-jack.jpg", alt: "Cable Jack" },
      { src: "/assets/cable-roller.jpg", alt: "Cable Roller" },
      { src: "/assets/pilot-jack.jpg", alt: "Pilot Jack & Stacker Lift" },
      { src: "/assets/road-cutter.jpg", alt: "Road Cutter, Compactor & Genset" },
      { src: "/assets/hydraulic-pump.jpg", alt: "Hydraulic Hand Pump & Cable Cutter" },
      { src: "/assets/gear.jpg", alt: "Power Tools" },
    ],
  },
  {
    title: "Testing & Measurement Equipment",
    icon: <HardDrive size={28} />,
    images: [
      { src: "/assets/megger-tester.jpg", alt: "Megger Tester" },
      { src: "/assets/clamp-meter.jpg", alt: "Clamp Meter" },
      { src: "/assets/earth-tester.jpg", alt: "Earth Tester" },
      { src: "/assets/phase-rotation.jpg", alt: "Phase Rotation Meter" },
      { src: "/assets/generators.jpg", alt: "Generators" },
      { src: "/assets/fiber-equipment.jpg", alt: "Fiber Optic Equipment" },
    ],
  },
];

export default function AssetsPage() {
  return (
    <div className="pt-24 pb-20 bg-light">
      <div className="bg-primary text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Assets & Equipment</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            We own and maintain a comprehensive fleet of vehicles, heavy machinery, and precision testing equipment.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 space-y-16">
        {assetCategories.map((cat, idx) => (
          <div key={idx}>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-primary">{cat.icon}</div>
              <h2 className="text-2xl font-bold text-dark">{cat.title}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.images.map((img, i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md group">
                  <div className="relative h-48 w-full">
                    {/* Replace with actual asset images */}
                    <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-sm font-semibold text-dark">{img.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}