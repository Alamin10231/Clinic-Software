import React from "react";
import { Users, Heart, Lightbulb, Smile } from "lucide-react";
import icon1 from "../../Image/icon/adoption_12969191 1.svg";
import icon2 from "../../Image/icon/consultation_10523215.svg";
import icon3 from "../../Image/icon/idea_17318206.svg";
import icon4 from "../../Image/icon/worldwide_5723155.svg";
const WhyChooseUs = () => {
  const features = [
    {
      title: "Expert Therapists",
      description:
        "Highly trained and certified physiotherapists dedicated to accurate diagnosis and effective treatment.",
      icon: <img src={icon1} alt="Expert Therapists" className="w-20 h-20" />,
    },
    {
      title: "Personalized Care",
      description:
        "Every treatment plan is tailored to your condition, goals, and lifestyle for maximum recovery.",
      icon: <img src={icon2} alt="Personalized Care" className="w-20 h-20" />,
    },
    {
      title: "Modern Techniques",
      description:
        "We use advanced physiotherapy methods and up-to-date clinical practices for better results.",
      icon: <img src={icon3} alt="Modern Techniques" className="w-20 h-20" />,
    },
    {
      title: "Friendly Environment",
      description:
        "Experience compassionate care in a calm and welcoming clinic that prioritizes your comfort.",
      icon: (
        <img src={icon4} alt="Friendly Environment" className="w-20 h-20" />
      ),
    },
  ];

  return (
    <section className="bg-cyan-50 py-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-teal-600">Why</span> Choose Us
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          With a patient-centered approach and evidence-based therapy, we
          deliver care that truly makes a difference. From accurate assessment
          to ongoing support, we guide you through every step of your healing
          journey.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/60 p-8 rounded-lg flex flex-col items-center text-center shadow-sm border border-cyan-100"
            >
              {/* Icon Circle */}
              <div className=" text-white   rounded-full p-6 mb-6 w-40 h-40 flex items-center justify-center">
                {feature.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-teal-700 text-xl font-bold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
