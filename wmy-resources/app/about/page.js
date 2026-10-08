import Image from "next/image";
import { Target, Eye, Shield, Lightbulb, Heart, CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <div className="bg-primary text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Established in 1993, WMY Resources is a 100% Bumiputera-owned M&E contractor registered with PKK, JBE, CIDB, and Ministry of Finance.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Company History */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-dark mb-6">Our Journey</h2>
            <div className="w-20 h-1 bg-secondary mb-6"></div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              WMY Resources (M) Sdn Bhd was incorporated on 6th July 1993. We are located at A-27 KIK Mara Wilayah Persekutuan, KM 13, Off Jalan Batu Caves, 68100 Kuala Lumpur.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              In 1996, we were appointed by MLA Power System (PTY) LTD from South Africa as the Sole Distributor of UPS Products in Malaysia. In 2003, we were appointed by AEC PTY LTD from Italy. Since then, WMY has distributed various ranges of UPS Systems to many clients.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Besides our core business as an electrical and mechanical contractor, WMY also supplies power equipment such as Rectifiers, Maintenance-Free Batteries, and UPS systems.
            </p>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
            {/* Replace with an office or historical image */}
            <Image src="/hero-bg.jpg" alt="WMY History" fill className="object-cover" />
          </div>
        </div>

        {/* Vision & Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-primary">
            <Eye size={40} className="text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To inspire people to have real integrity, high purpose and shared direction. To realize our dreams, we have a vision with a caring mindset to strive to build the best people, brands, partnerships, services, systems, community, and the environment.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-secondary">
            <Target size={40} className="text-secondary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <Lightbulb size={20} className="text-secondary shrink-0 mt-1" />
                <span><strong>Wisdom & Knowledge:</strong> We believe in the power of wisdom and knowledge to create greater things.</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield size={20} className="text-secondary shrink-0 mt-1" />
                <span><strong>Integrity:</strong> Integrity is our way of life because it builds trust and reputation.</span>
              </li>
              <li className="flex items-start gap-2">
                <Heart size={20} className="text-secondary shrink-0 mt-1" />
                <span><strong>Meaningful:</strong> The meaning in work is our oxygen in life.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-secondary shrink-0 mt-1" />
                <span><strong>Execution:</strong> We love what we do to make things happen.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* MD Message */}
        <div className="bg-dark text-white rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="relative h-80 md:h-auto">
              <Image src="/md-photo.jpg" alt="Managing Director" fill className="object-cover" />
            </div>
            <div className="md:col-span-2 p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-secondary mb-4">Managing Director's Message</h3>
              <p className="italic mb-6 text-gray-300">
                "Always customer focused and professional, we provide trusted advice and implement innovative solutions for specialist services. This enables our customers to provide a safe, comfortable, compliant and energy efficient environment to their people.
                <br /><br />
                We recognize our responsibility to the health, safety and well-being of our staff and the public. We strive to grow our business with integrity by contributing to the serve while being socially and environmentally conscious."
              </p>
              <div>
                <p className="font-bold text-xl text-white">Walid Bin Jaafar</p>
                <p className="text-sm text-secondary">Managing Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}