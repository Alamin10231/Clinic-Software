import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "Warren",
      text: "The team at the clinic helped me recover from my knee injury faster than I expected. Their personalized care really made a difference!",
      image: "https://i.pravatar.cc/150?u=warren",
    },
    {
      name: "Leslie",
      text: "After my surgery, I struggled with mobility. Thanks to their expert therapists, I'm back to daily activities with confidence.",
      image: "https://i.pravatar.cc/150?u=leslie",
    },
    {
      name: "Mitchell",
      text: "Friendly, professional, and effective! Every session was tailored to my needs, and I felt supported throughout my recovery.",
      image: "https://i.pravatar.cc/150?u=mitchell",
    },
    {
      name: "Mitchell",
      text: "Friendly, professional, and effective! Every session was tailored to my needs, and I felt supported throughout my recovery.",
      image: "https://i.pravatar.cc/150?u=mitchell",
    },
    {
      name: "Mitchell",
      text: "Friendly, professional, and effective! Every session was tailored to my needs, and I felt supported throughout my recovery.",
      image: "https://i.pravatar.cc/150?u=mitchell",
    },
  ];

  return (
    <section className="bg-[#f0fdfa] py-20 px-6 overflow-visible">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start relative">
        {/* Left Side: Header & Navigation */}
        <div className="lg:w-1/4 w-full relative z-10">
          <Quote
            size={80}
            className="text-gray-600 mb-6 opacity-80"
            fill="currentColor"
          />
          <h2 className="text-3xl text-gray-600 font-medium">Hear From</h2>
          <h3 className="text-5xl font-bold text-[#003d2b] mt-2 mb-10">
            Our Patients
          </h3>

          {/* Custom Navigation Controls */}
          <div className="flex items-center gap-4">
            <button className="prev-btn text-gray-800 hover:scale-110 transition-transform">
              <ChevronLeft size={24} />
            </button>
            <div className="custom-pagination h-1 w-32 bg-gray-200 rounded-full relative">
              {/* Pagination progress bar is handled by Swiper CSS */}
            </div>
            <button className="next-btn text-gray-800 hover:scale-110 transition-transform">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Right Side: Slider */}
        <div className="lg:w-3/4 w-full lg:-ml-24 z-0">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{ prevEl: ".prev-btn", nextEl: ".next-btn" }}
            pagination={{ el: ".custom-pagination", type: "progressbar" }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!overflow-visible"
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col">
                  {/* Speech Bubble */}
                  <div className="relative bg-[#e6f7f5] p-8 rounded-2xl mb-8 min-h-[220px] flex flex-col justify-between">
                    <p className="text-gray-700 leading-relaxed italic">
                      "{item.text}"
                    </p>
                    <div className="flex gap-1 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill="#e67e22"
                          className="text-[#e67e22]"
                        />
                      ))}
                    </div>
                    {/* The Triangle Tip */}
                    <div className="absolute -bottom-4 left-10 w-0 h-0 border-l-[15px] border-l-transparent border-t-[20px] border-t-[#e6f7f5] border-r-[15px] border-r-transparent"></div>
                  </div>

                  {/* User Info */}
                  <div className="flex items-center gap-4 ml-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                      <h4 className="font-bold text-[#003d2b]">{item.name}</h4>
                      <p className="text-xs text-gray-500 font-medium">
                        Patient
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Global CSS for the progress bar color */}
      <style jsx global>{`
        .swiper-pagination-progressbar-fill {
          background: #003d2b !important;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSlider;
