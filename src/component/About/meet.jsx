import React from "react";
import doctorimg1 from "../../Image/doctor1.png";
import doctorimg2 from "../../Image/doctor2.png";
import doctorimg3 from "../../Image/doctor3.png";
import doctorimg4 from "../../Image/doctor4.png";
export default function Meet() {
  const team = [
    {
      name: "Dr. Wade Warren",
      title: "Senior Physiotherapist",
      specialty: "Orthopedic Rehabilitation",
      image: doctorimg1,
    },
    {
      name: "Dr. Jenny Wilson",
      title: "Consultant Physiotherapist",
      specialty: "Sports Injury Rehabilitation",
      image: doctorimg2,
    },
    {
      name: "Dr. Robert Fox",
      title: "Clinical Physiotherapist",
      specialty: "Post-Surgical Therapy",
      image: doctorimg3,
    },
    {
      name: "Dr. Cody Fisher",
      title: "Physiotherapy Specialist",
      specialty: "Pain Management & Manual Therapy",
      image: doctorimg4,
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-teal-600">Meet</span> the Team
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Our experienced physiotherapists are dedicated to providing
          personalized care and effective treatment for every patient.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {team.map((member, idx) => (
            <div
              key={idx}
              className=" rounded-xl  p-4"
            >
              {/* Teal tile background with overlapping doctor image */}
              <div className="relative mb-4">
                <div className=" rounded-2xl h-52 bg-[#B0E4DD]"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-x-0 bottom-0 mx-auto h-64 object-contain drop-shadow-xl"
                />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-teal-700 text-sm">{member.title}</p>
              <p className="text-gray-500 text-xs mt-1">{member.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
