"use client";
import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Construct WhatsApp message
    const text = `Hello WMY Resources,%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/60194902009?text=${text}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold text-dark mb-6">Send Us a Message</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="+60 12-345 6789"
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
        <textarea
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="How can we help you?"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-blue-800 transition-colors"
      >
        <MessageCircle size={20} />
        Send via WhatsApp
      </button>
      <p className="text-xs text-gray-500 text-center mt-3">
        Clicking the button will open WhatsApp with your message pre-filled.
      </p>
    </form>
  );
}