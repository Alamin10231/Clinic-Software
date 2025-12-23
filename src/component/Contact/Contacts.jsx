import React from "react";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { postContact } from "../../api/api.js";
import {
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  Send,
  Navigation,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const info = [
    {
      icon: <Mail className="w-5 h-5 text-teal-800" />,
      title: "Email Address",
      lines: ["debbie.baker@example.com", "debra.holt@example.com"],
    },
    {
      icon: <Phone className="w-5 h-5 text-teal-800" />,
      title: "Phone Number",
      lines: ["(310) 555-0118", "(224) 555-0116"],
    },
    {
      icon: <MapPin className="w-5 h-5 text-teal-800" />,
      title: "Hospital Location",
      lines: ["21 Ranchview Dr. Richardson", "California 62639"],
    },
    {
      icon: <CalendarDays className="w-5 h-5 text-teal-800" />,
      title: "Working Day",
      lines: ["Mon–Fri (09:00–20:00)", "Sun (10:00–16:00), Sat (Closed)"],
    },
  ];

  const updateField = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));
  const { mutate, isPending, isSuccess, isError, error, reset } = useMutation({
    mutationFn: postContact,
    onSuccess: () => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formData);
  };

  return (
    <section className=" py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-800">
            Contact Our Physiotherapy Team
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Have questions about your recovery or our treatments? Send us a
            message and our team will respond promptly to guide you.
          </p>
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-white/70 rounded-xl p-6 border border-teal-100">
          {info.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div>
                <div className="bg-[#B0E4DD] p-2 text-teal-800 text-center w-9 h-9 mx-auto rounded-full shadow-sm">
                  {item.icon}
                </div>
                <div className="font-semibold text-gray-800">{item.title}</div>
                {item.lines.map((line, idx) => (
                  <div key={idx} className="text-gray-600 text-sm">
                    {line}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Framed contact area */}
        <div className="mt-8 rounded-xl  bg-[#E6F6F4]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {/* Left: Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-semibold text-xl text-gray-800 text-center">
                Reach Out Anytime
              </h3>
              <p className="text-gray-600 text-md text-center max-w-xs mx-auto">
                We're here to answer your questions and assist with your
                physiotherapy needs.
              </p>

              {isSuccess && (
                <div className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-md p-2 text-center">
                  Message sent successfully. We'll get back to you soon.
                </div>
              )}
              {isError && (
                <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-md p-2 text-center">
                  {error?.response?.data?.message ||
                    error?.message ||
                    "Failed to send message."}
                </div>
              )}

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Name*
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className="w-full border-b rounded-md h-10 px-3 bg-[#D9F2EF] focus:outline-none focus:ring-2 focus:ring-teal-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Email*
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="w-full border-b rounded-md h-10 px-3 bg-[#D9F2EF] focus:outline-none focus:ring-2 focus:ring-teal-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Phone*
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  className="w-full border-b rounded-md h-10 px-3 bg-[#D9F2EF] focus:outline-none focus:ring-2 focus:ring-teal-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Subject*
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => updateField("subject", e.target.value)}
                  className="w-full border-b rounded-md h-10 px-3 bg-[#D9F2EF] focus:outline-none focus:ring-2 focus:ring-teal-300"
                >
                  <option value="">Select…</option>
                  <option value="General ">General </option>
                  <option value="Appointment">Appointment</option>
                  <option value="Billing">Billing</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Message*
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  className="w-full border-b rounded-md min-h-[130px] p-3 bg-[#D9F2EF] focus:outline-none focus:ring-2 focus:ring-teal-300"
                  required
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  disabled={isPending}
                  className="px-5 py-2 rounded-full bg-teal-600 text-white hover:bg-teal-700 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isPending ? "Sending..." : "Send Message"}{" "}
                  <Send className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      subject: "",
                      message: "",
                    })
                  }
                  className="px-5 py-2 rounded-full border hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </form>

            {/* Right: Map + Directions */}
            <div className="flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1200&auto=format&fit=crop"
                alt="Map"
                className="w-full h-[260px] object-cover rounded-md"
              />
              <div className="mt-3 ">
                <button className="px-5 py-2 rounded-full border bg-white hover:bg-gray-50 flex items-center gap-2">
                  <Navigation className="w-4 h-4" /> Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-8 text-center bg-[#B0E4DD] rounded-xl p-6 border border-teal-100">
          <h4 className="text-2xl font-semibold text-teal-800">
            Prefer to book directly?
          </h4>
          <p className="text-gray-600 text-md max-w-xl mx-auto mt-1">
            Visit our desk for quick appointments and in‑person support. You can
            also follow the phone and book directly via WhatsApp.
          </p>
          <div className="mt-3">
            <a
              href="#"
              aria-label="Book on WhatsApp"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#25D366] text-white hover:bg-[#1ebe5c]"
            >
              <FaWhatsapp size={18} /> Book on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
