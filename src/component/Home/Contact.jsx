import React, { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const onChange = (field) => (e) =>
    setForm((p) => ({ ...p, [field]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! We will get back to you soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="bg-[#f0fdfa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-teal-600">Ready to</span> Feel Better?
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Let our specialists help you restore mobility, relieve pain, and get
            back to what you love.
          </p>
          <p className="text-gray-600 text-sm">
            Your healing journey starts today.
          </p>
        </div>

        {/* Card */}
        <div className="bg-[#E6F6F4] rounded-xl p-6 md:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Left: Info */}
            <div>
              <p className="text-gray-800 text-lg">Consult With Our</p>
              <h3 className="text-3xl font-extrabold text-teal-800">
                Physiotherapists
              </h3>
              <p className="text-gray-600 text-sm mt-2 max-w-xs">
                Let our expert therapists understand your condition and design a
                personalized treatment plan.
              </p>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3 text-gray-700 text-sm">
                  <div className="bg-gray-700 p-2 rounded-md">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span>(704) 555-0127</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 text-sm">
                  <div className="bg-gray-700 p-2 rounded-md">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <span>tim.jennings@example.com</span>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Name*
                </label>
                <input
                  value={form.name}
                  onChange={onChange("name")}
                  className="w-full bg-[#D9F2EF] rounded-md h-10 px-3 outline-none focus:ring-2 focus:ring-teal-300"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Email*
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={onChange("email")}
                  className="w-full bg-[#D9F2EF] rounded-md h-10 px-3 outline-none focus:ring-2 focus:ring-teal-300"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Phone*
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={onChange("phone")}
                  className="w-full bg-[#D9F2EF] rounded-md h-10 px-3 outline-none focus:ring-2 focus:ring-teal-300"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Message*
                </label>
                <textarea
                  value={form.message}
                  onChange={onChange("message")}
                  className="w-full bg-[#D9F2EF] rounded-md min-h-[120px] p-3 outline-none focus:ring-2 focus:ring-teal-300"
                  required
                />
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="px-6 py-2 rounded-full bg-teal-600 text-white hover:bg-teal-700 flex items-center gap-2"
                >
                  Send <Send className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setForm({ name: "", email: "", phone: "", message: "" })
                  }
                  className="px-6 py-2 rounded-full border hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
