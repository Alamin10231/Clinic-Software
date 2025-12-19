import React from "react";

export default function Working() {
  return (
    <section className="w-full   rounded-xl p-6  md:p-8">
      <div className="mx-auto max-w-5xl text-center py-10">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
          <span className="text-[#00A991] ">Our Working</span> <span>Hours</span>
        </h2>
        <p className="mt-2 text-gray-700 text-2xl py-2">
          Check our weekly schedule and book your appointment at a convenient
          time.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="rounded-lg bg-[#E6F6F4] backdrop-blur-sm px-6 py-10  shadow-sm">
            <p className="text-gray-700 font-semibold text-2xl">Mon-Fri</p>
            <p className="mt-1 text-3xl font-bold text-[#525252]">
              (8:00-9.00)
            </p>
          </div>

          <div className="rounded-lg bg-[#E6F6F4] backdrop-blur-sm px-6 py-10 shadow-sm">
            <p className="text-gray-700 font-semibold text-2xl">Friday</p>
            <p className="mt-1 text-3xl font-bold text-[#525252]">
              (10:00-16.00)
            </p>
          </div>

          <div className="rounded-lg bg-[#E6F6F4] backdrop-blur-sm px-6 py-10  shadow-sm">
            <p className="text-gray-700 font-semibold text-2xl">Saturday</p>
            <p className="mt-1 text-3xl font-bold text-[#525252]">(Closed)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
