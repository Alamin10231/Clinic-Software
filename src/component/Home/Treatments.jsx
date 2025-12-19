import React from 'react';
import group1 from "../../Image/Maskgroup.png";
import group2 from "../../Image/Maskgroup (1).png";
import group3 from "../../Image/Maskgroup (2).png";
import group4 from "../../Image/Maskgroup (3).png";

const items = [
  {
    title: "Musculoskeletal Physiotherapy",
    description: "Expert care for back, neck, joint, and muscle pain.",
    image: group1,
    alt: "Patient receiving musculoskeletal physiotherapy",
  },
  {
    title: "Sports Injury Rehabilitation",
    description: "Get back to your sport stronger and safer after an injury.",
    image: group2,
    alt: "Athlete doing rehab with therapist",
  },
  {
    title: "Post-Surgical Rehabilitation",
    description: "Guided recovery to restore function after surgery.",
    image: group3,
    alt: "Senior in wheelchair assisted by therapist",
  },
  {
    title: "Physiotherapy",
    description: "Regaining independence after a stroke or neurological condition.",
    image: group4,
    alt: "Therapist supporting patient during physiotherapy",
  },
];

export default function Treatments() {
  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            <span className="text-[#00A991]">Specialized</span> Treatments
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#525252] leading-relaxed">
            We offer advanced therapy solutions tailored to your specific needs
            and health goals. From injury rehabilitation to chronic pain relief,
            each treatment is focused on long-term wellness.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="group text-left flex flex-col h-full bg-white rounded-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Container with Fixed Aspect Ratio */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-sm">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Subtle Overlay on Hover */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
              </div>

              {/* Text Content */}
              <div className="pt-6 pb-2">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#00A991] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}