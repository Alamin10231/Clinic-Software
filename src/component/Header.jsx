import rightsideimage from "../Image/rightheader.png";
import wpicon from "../Image/icon/logos_whatsapp-icon.png";
import { Link } from "react-router-dom";

export default function Header() {
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER || ""; // e.g., 8801XXXXXXXXX
  const msg = encodeURIComponent("Hello! I'd like to book an appointment.");
  const waUrl = phone
    ? `https://wa.me/${phone}?text=${msg}`
    : `https://wa.me/?text=${msg}`;
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-4 md:px-0">
      {/* Left: Text */}
      <div className="w-full md:w-1/2 h-auto md:h-[620px] flex flex-col justify-center text-center md:text-left">
        <div>
          <p className="font-medium text-xl md:text-3xl tracking-wide uppercase text-teal-500">
            Advanced
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-teal-700">
            Physiotherapy
          </h1>
          <h2 className="mt-2 text-lg md:text-2xl font-semibold text-gray-900">
            for Pain Relief & Mobility
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto md:mx-0">
            Experience expert physiotherapy care in a warm, supportive
            environment focused on your long-term well-being.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-3xl bg-teal-600 text-white hover:bg-teal-700 transition"
            aria-label="Book on WhatsApp"
          >
            <img className="w-6 h-6" src={wpicon} alt="WhatsApp Icon" />
            Book on WhatsApp
          </a>

          <Link to="/services">
            <button className="px-5 py-3 rounded-3xl border border-teal-600 text-teal-700 hover:bg-teal-50 transition">
              View Treatments
            </button>
          </Link>
        </div>
      </div>

      {/* Right: Image */}
      <div className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[720px] flex items-center justify-center">
        <img
          className="w-full h-full object-contain md:object-cover rounded-lg"
          src={rightsideimage}
          alt="Physiotherapy"
        />
      </div>
    </div>
  );
}
