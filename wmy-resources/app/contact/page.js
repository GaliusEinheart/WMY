import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Printer, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 bg-light">
      <div className="bg-primary text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Get in touch for inquiries, quotations, or project consultations.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold text-dark mb-6">Get in Touch</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 p-3 rounded-full text-primary shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-dark">Address</h4>
                <p className="text-gray-600">A-27 KIK Mara Wilayah Persekutuan, KM 13, Off Jalan Batu Caves, 68100 Kuala Lumpur</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 p-3 rounded-full text-primary shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-dark">Phone / WhatsApp</h4>
                <p className="text-gray-600">+6019 490 2009</p>
                <p className="text-gray-600">603-6186 4866</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 p-3 rounded-full text-primary shrink-0">
                <Printer size={24} />
              </div>
              <div>
                <h4 className="font-bold text-dark">Fax</h4>
                <p className="text-gray-600">603-6186 5866</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 p-3 rounded-full text-primary shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-dark">Email</h4>
                <a href="mailto:wmyrmsb@gmail.com" className="text-primary hover:underline">wmyrmsb@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 p-3 rounded-full text-primary shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-dark">Working Hours</h4>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
}