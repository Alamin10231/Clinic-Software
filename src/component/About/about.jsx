import React from "react";
import img1 from "../../Image/image 8.png";
import img3 from "../../Image/image 7.png";
import img2 from "../../Image/image 9.png";
export default function About() {
  const hero = {
    title: "Dedicated to Your Recovery",
    description:
      "Our clinic combines experienced therapists, modern techniques, and compassionate care to support you on your recovery journey.",
  };

  const sections = [
    {
      highlight: "Trusted",
      title: "Physiotherapy Care",
      description:
        "Our hospital is dedicated to delivering high-quality physiotherapy services in a safe and professional environment. With modern facilities and patient‑focused care, we aim to support recovery, improve mobility, and enhance overall quality of life for every individual we serve.",
      image:
        img1,
    },
    {
      highlight: "Focused Care",
      title: "for Every Patient",
      description:
        "We provide personalized treatment plans, flexible appointment options, and continuous guidance throughout the recovery process. Our goal is to ensure each patient feels supported, informed, and confident at every stage of their therapy journey.",
      image:
        img2,
    },
    {
      highlight: "Meet Our",
      title: "Physiotherapy Specialists",
      description:
        "Our team consists of experienced and certified physiotherapists who specialize across a variety of conditions. We combine accurate assessment, evidence‑based treatment, and effective communication tailored to individual needs.",
      image:
       img3,
    },
  ];

  return (
    <section className=" py-16 px-4">
      <div className="max-w-8xl mx-auto px-20">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-6xl font-bold text-teal-900">
            {hero.title}
          </h1>
          <p className="text-gray-600 mt-3 text-md max-w-2xl mx-auto">
            {hero.description}
          </p>
        </div>

        {/* Sections mapped from dummy data */}
        {sections.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center"
          >
            {" "}
            {/* Text */}
            <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
              <h2 className="text-2xl md:text-5xl font-bold mb-2">
                <span className="text-teal-600">{item.highlight}</span>{" "}
                {item.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
            {/* Image */}
            <div className={idx % 2 === 2 ? "lg:order-2" : ""}>
              <img
                src={item.image}
                alt={`${item.highlight} ${item.title}`}
                className="w-full h-[340px] md:h-[820px] object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
