import { useState } from "react";
import logo from "../../src/Image/logo.png";

export default function Navbar() {
  const [active, setActive] = useState("Home");

  const itemClass = (name) =>
    `px-4 py-2 rounded cursor-pointer ${
      active === name ? "bg-red-100" : "bg-transparent"
    }`;

  return (
    <div className="flex items-center justify-between px-20 py-8">
      <div>
        <img className="w-36 h-16" src={logo} alt="Logo" />
      </div>
      <div>
        <ul className="flex gap-4 ">
          <li className={itemClass("Home")} onClick={() => setActive("Home")}>
            Home
          </li>
          <li
            className={itemClass("Services")}
            onClick={() => setActive("Services")}
          >
            Services
          </li>
          <li
            className={itemClass("Testmonial")}
            onClick={() => setActive("Testmonial")}
          >
            Testmonial
          </li>
          <li
            className={itemClass("Contact")}
            onClick={() => setActive("Contact")}
          >
            Contact
          </li>
        </ul>
      </div>
      <div className="ml-8 flex items-center gap-1 text-sm font-semibold bg-[#c6f8f1] rounded-4xl">
        <span
          className={`px-3 py-1  text-gray-800 border-2 border-none cursor-pointer  rounded-4xl ${
            active === "EN" ? "bg-[#00A991] text-white" : ""
          }`}
          onClick={() => setActive("EN")}
        >
          EN
        </span>
        <span
          className={`px-3 py-1  text-gray-800 border-2 border-none cursor-pointer  rounded-4xl ${
            active === "ES" ? "bg-[#00A991] text-white" : ""
          }`}
          onClick={() => setActive("ES")}
        >
          ES
        </span>
      </div>
    </div>
  );
}
