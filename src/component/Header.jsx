import rightsideimage from "../Image/rightheader.png";

export default function Header() {
  return (
    <div className=" flex items-center justify-between gap-8 ">
      {/* Left: Text */}
      <div className="w-1/2 height-[620px] flex flex-col justify-center">
        <div>
          <p className="text-teal-700 font-medium tracking-wide uppercase">
            Advanced
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Physiotherapy
          </h1>
          <h2 className="mt-2 text-xl md:text-2xl font-semibold text-teal-800">
            for Pain Relief & Mobility
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl">
            Experience expert physiotherapy care in a warm, supportive
            environment focused on your long-term well-being.
          </p>
        </div>
        <div className="mt-6 flex gap-4">
          <button className="px-5 py-3 rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition">
            Book on WhatsApp
          </button>
          <button className="px-5 py-3 rounded-lg border border-teal-600 text-teal-700 hover:bg-teal-50 transition">
            View Treatments
          </button>
        </div>
      </div>

      {/* Right: Image */}
      <div className="w-1/2 height-[820px] flex items-center justify-center">
        <img
          className="w-full h-full object-contain md:object-cover rounded-lg"
          src={rightsideimage}
          alt="Right Side"
        />
      </div>
    </div>
  );
}
