import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ React Router ka Link import kiya

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-800 flex flex-col md:flex-row p-4 items-center justify-between relative transition-all duration-300">
        {/* Logo */}
        <Link to="/" className="self-start md:self-auto"> {/* ✅ href ko Link se replace kiya */}
          <div className="logo font-bold px-4 text-white hover:font-serif">
            <div className="logo font-bold text-white text-xl">
              <span className="text-white">&lt;</span>Pass
              <span className="text-yellow-500">Wallet🔐/&gt;</span>
            </div>
          </div>
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-white text-2xl self-end"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <div
          className={`w-full md:w-auto transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[500px] py-4 flex flex-col items-center" : "max-h-0"
          } md:max-h-full md:flex md:flex-row md:items-center gap-3`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-10 text-center md:text-left">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Login", path: "/login" },
              { name: "Logout", path: "/logout" }
            ].map((item, index) => (
              <li key={index} className="py-2 md:py-0">
                <Link
                  className="hover:font-serif hover:font-bold text-white font-bold hover:text-yellow-500 block md:inline"
                  to={item.path} // ✅ href ko React Router ke "to" se replace kiya
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* GitHub Button (Centered only when navbar is open) */}
          <div className={`w-full mt-4 md:mt-0 ${isOpen ? "flex justify-center" : "flex md:justify-start"}`}>
            <button className="text-white bg-gray-500 rounded-full flex items-center hover:bg-yellow-600 hover:text-black px-3 py-1 ring-white">
              <img className="invert w-6 mr-2" src="/github.png" alt="github-logo" />
              <span className="font-bold">GitHub</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
