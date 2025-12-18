import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../src/Image/logo.png";

export default function Navbar() {
  const [lang, setLang] = useState("EN");
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const pathname = location.pathname;
  const navActive =
    pathname === "/"
      ? "Home"
      : pathname.startsWith("/services")
      ? "Services"
      : pathname.startsWith("/testmonial")
      ? "Testmonial"
      : pathname.startsWith("/contact")
      ? "Contact"
      : "";

  const itemClass = (name) =>
    `px-4 py-2 rounded cursor-pointer ${
      navActive === name ? "bg-[#00A991] text-white" : "bg-transparent"
    }`;

  return (
    <nav className="px-6 md:px-20 py-4 md:py-8 border-b border-transparent">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img className="w-32 h-14 md:w-36 md:h-16" src={logo} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4">
          <li
            className={itemClass("Home")}
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </li>
          <li
            className={itemClass("Services")}
            onClick={() => {
              navigate("/services");
            }}
          >
            Services
          </li>
          <li
            className={itemClass("Testmonial")}
            onClick={() => {
              navigate("/testmonial");
            }}
          >
            Testmonial
          </li>
          <li
            className={itemClass("Contact")}
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact
          </li>
        </ul>

        {/* Desktop Lang Switcher */}
        <div className="hidden md:flex ml-8 items-center gap-1 text-sm font-semibold bg-[#c6f8f1] rounded-4xl">
          <span
            className={`px-3 py-1  text-gray-800 border-2 border-none cursor-pointer  rounded-4xl ${
              lang === "EN" ? "bg-[#00A991] text-white" : ""
            }`}
            onClick={() => setLang("EN")}
          >
            EN
          </span>
          <span
            className={`px-3 py-1  text-gray-800 border-2 border-none cursor-pointer  rounded-4xl ${
              lang === "ES" ? "bg-[#00A991] text-white" : ""
            }`}
            onClick={() => setLang("ES")}
          >
            ES
          </span>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? (
            <FaTimes className="text-teal-600" />
          ) : (
            <FaBars className="text-teal-600" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden mt-3">
          <ul className="flex flex-col gap-2">
            <li
              className={itemClass("Home")}
              onClick={() => {
                navigate("/");
                setIsOpen(false);
              }}
            >
              Home
            </li>
            <li
              className={itemClass("Services")}
              onClick={() => {
                navigate("/services");
                setIsOpen(false);
              }}
            >
              Services
            </li>
            <li
              className={itemClass("Testmonial")}
              onClick={() => {
                navigate("/testmonial");
                setIsOpen(false);
              }}
            >
              Testmonial
            </li>
            <li
              className={itemClass("Contact")}
              onClick={() => {
                navigate("/contact");
                setIsOpen(false);
              }}
            >
              Contact
            </li>
          </ul>
          <div className="mt-3 flex items-center gap-2 text-sm font-semibold bg-[#c6f8f1] rounded-4xl w-max">
            <span
              className={`px-3 py-1 text-gray-800 border-2 border-none cursor-pointer rounded-4xl ${
                lang === "EN" ? "bg-[#00A991] text-white" : ""
              }`}
              onClick={() => setLang("EN")}
            >
              EN
            </span>
            <span
              className={`px-3 py-1 text-gray-800 border-2 border-none cursor-pointer rounded-4xl ${
                lang === "ES" ? "bg-[#00A991] text-white" : ""
              }`}
              onClick={() => setLang("ES")}
            >
              ES
            </span>
          </div>
        </div>
      )}
    </nav>
  );
}
