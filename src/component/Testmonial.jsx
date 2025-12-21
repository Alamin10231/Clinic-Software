import React from "react";
import { Star, Upload } from "lucide-react";

export default function Testmonial() {
  const testimonials = [
    {
      name: "Mitchell",
      rating: 5,
      text: "I highly recommend this clinic. Their evidence‑based treatments and compassionate care helped me regain strength and reduce pain.",
      image: "https://i.pravatar.cc/80?u=mitchell",
    },
    {
      name: "Sarah Angel",
      rating: 5,
      text: "Professional and friendly. The physiotherapists provided a clear plan and regular guidance throughout my recovery.",
      image: "https://i.pravatar.cc/80?u=sarah-angel",
    },
    {
      name: "Esther Howard",
      rating: 4,
      text: "Great service and modern techniques. I felt supported in every session and noticed improvement quickly.",
      image: "https://i.pravatar.cc/80?u=esther-howard",
    },
    // Ghost rows to mimic the faded list in your screenshot
    {
      name: "Alexo Mitchell",
      rating: 4,
      text: "…",
      image: "https://i.pravatar.cc/80?u=alex-1",
      ghost: true,
    },
    {
      name: "Also Mitchell",
      rating: 5,
      text: "…",
      image: "https://i.pravatar.cc/80?u=alex-2",
      ghost: true,
    },
  ];

  return (
    <section className=" py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-800">
            What Our Patient Say
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Hear real stories from patients who regained strength, mobility, and
            confidence through our care.
          </p>
        </div>

        {/* Framed box */}
        <div className="rounded-xl  bg-[#E6F6F4] shadow-sm ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {/* Left: Recent Feedbacks */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">
                Recent Feedbacks
              </h3>
              <div className="space-y-4">
                {testimonials.map((t, idx) => (
                  <div
                    key={idx}
                    className={
                      "flex items-start gap-4 p-4 rounded-lg border border-cyan-100 bg-[#D9F2EF]" +
                      (t.ghost ? " opacity-50" : "")
                    }
                  >
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-800">
                          {t.name}
                        </span>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={
                                i < t.rating
                                  ? "text-[#e67e22]"
                                  : "text-gray-300"
                              }
                              fill={i < t.rating ? "#e67e22" : "none"}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mt-1">{t.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Add a Review */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Add a Review</h3>

              {/* Rating */}
              <label className="block text-sm text-gray-600 mb-1">
                Add Your Rating
              </label>
              <div className="flex gap-2 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} className="text-gray-400" />
                ))}
              </div>

              {/* Name */}
              <label className="block text-sm text-gray-600 mb-1">Name*</label>
              <input
                type="text"
                className="w-full border-b rounded-md h-10 px-3 bg-teal-50/40 focus:outline-none focus:ring-2 focus:ring-teal-300"
                placeholder="Your name"
              />

              {/* Email */}
              <label className="block text-sm text-gray-600 mt-3 mb-1">
                Email*
              </label>
              <input
                type="email"
                className="w-full border-b rounded-md h-10 px-3 bg-teal-50/40 focus:outline-none focus:ring-2 focus:ring-teal-300"
                placeholder="name@example.com"
              />

              {/* Message */}
              <label className="block text-sm text-gray-600 mt-3 mb-1">
                Write Your Message*
              </label>
              <textarea
                className="w-full border-b rounded-md min-h-[130px] p-3 bg-teal-50/40 focus:outline-none focus:ring-2 focus:ring-teal-300"
                placeholder="Share your experience…"
              />

              {/* Upload */}
              <label className="block text-sm text-gray-600 mt-3 mb-1">
                Media Upload (optional)
              </label>
              <div className="border-b rounded-md bg-teal-50/40 p-3 text-center">
                <input id="fileUpload" type="file" className="hidden" />
                <label
                  htmlFor="fileUpload"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-full border bg-transparent  hover:bg-bg-teal-700 border-2 border-teal-700 cursor-pointer"
                >
                  <Upload size={16} />
                  Browse Files
                </label>
               
              </div>

              {/* Actions */}
              <div className=" items-center gap-3 mt-4">
                 <p className="text-sm text-gray-500 mt-2">
                  Only support: .jpeg, .png, and .jpg files.
                </p>
                <button className="px-5 py-2 my-3 mr-4 rounded-full bg-teal-600 text-white hover:bg-teal-700">
                  Submit Now
                </button>
                <button className="px-5 py-2 rounded-full border hover:bg-gray-50">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
