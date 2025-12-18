import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../../src/Image/logo.png";
const Footer = () => {
  return (
    <footer className="w-full bg-[#EAF7F5] text-gray-700">
      <div className="max-w-8xl mx-auto px-20 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Info */}
          <div>
            <div>
              <img src={logo} alt="Clinic Logo " className="w-40 h-20" />
            </div>
            <p className="text-sm mb-4 leading-relaxed">
              We provide expert physiotherapy care to help you recover, stay
              active, and live a pain-free life. Your health and well-being are
              our top priority.
            </p>

            <div className="flex space-x-3 text-teal-600">
              <FaInstagram className="cursor-pointer hover:opacity-75" />
              <FaFacebookF className="cursor-pointer hover:opacity-75" />
              <FaYoutube className="cursor-pointer hover:opacity-75" />
              <FaLinkedinIn className="cursor-pointer hover:opacity-75" />
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-teal-600" />
              <p>72 Westheimer Rd. Santa Ana, Illinois</p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-teal-600" />
              <p>(704) 555-0127</p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-teal-600" />
              <p>tim.jennings@example.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:underline cursor-pointer">Home</li>
              <li className="hover:underline cursor-pointer">About us</li>
              <li className="hover:underline cursor-pointer">Services</li>
              <li className="hover:underline cursor-pointer">Testimonials</li>
              <li className="hover:underline cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">Service</h3>
            <ul className="space-y-2 text-sm">
              <li>Sports Injury Rehabilitation</li>
              <li>Post-Surgical Therapy</li>
              <li>Pain Management Therapy</li>
              <li>Neurological Rehabilitation</li>
              <li>Orthopedic Rehabilitation</li>
              <li>Pediatric & Geriatric Therapy</li>
            </ul>
          </div>

          {/* Time */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">Time</h3>
            <ul className="space-y-2 text-sm">
              <li>Monday - Friday</li>
              <li className="text-gray-500">(8:00 - 9:00)</li>
              <li>Saturday</li>
              <li className="text-gray-500">(10:00 - 6:00)</li>
              <li>Sunday</li>
              <li className="text-gray-500">Closed</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t mt-6 pt-4 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© 2024 Clinic Name</p>
          <div className="flex gap-4">
            <span className="hover:underline cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:underline cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
