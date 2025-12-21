import React from "react";
import img1 from "../../Image/Mask group (4).png";
import img2 from "../../Image/Mask group (5).png";
import img3 from "../../Image/image 12.png";
import img4 from "../../Image/Mask group (6).png";
import img5 from "../../Image/image 14.png";
import img6 from "../../Image/image 15.png";
export default function Services() {
  const services = [
    {
      title: "Sports Injury Rehabilitation",
      description:
        "Recover from sprains, strains, and sports-related injuries with targeted, performance-focused therapy.",
      image: img1,
    },
    {
      title: "Post-Surgical Therapy",
      description:
        "Restore strength, mobility, and confidence after surgery through safe, personalized rehabilitation.",
      image: img2,
    },
    {
      title: "Orthopedic Physiotherapy",
      description:
        "Effective treatment for joint pain, fractures, and musculoskeletal conditions to improve daily movement.",
      image: img3,
    },
    {
      title: "Pain Management Therapy",
      description:
        "Reduce chronic or acute pain using evidence-based techniques designed to enhance comfort and function.",
      image: img4,
    },
    {
      title: "Manual Therapy & Massage",
      description:
        "Hands-on treatment to relieve tension, improve flexibility, and support your body’s natural healing.",
      image: img5,
    },
    {
      title: "Sports Injury Rehabilitation",
      description:
        "Recover from sprains, strains, and sports-related injuries with targeted, performance-focused therapy.",
      image: img6,
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#f8fbfd]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003d2b]">
            Comprehensive Physiotherapy Care
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            From injury rehabilitation to pain management, our services are
            tailored to meet your individual health needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-56 md:h-80 object-cover rounded-lg shadow-sm ring-1 ring-gray-200/60"
              />
              <h3 className="mt-4 text-2xl font-semibold text-gray-800">
                {s.title}
              </h3>
              <p className="text-md text-gray-600 mt-2">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
