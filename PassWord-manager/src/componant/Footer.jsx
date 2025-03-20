import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 w-full mt-auto">
      <div className="text-xl font-bold">
        <span>&lt;Pass</span>
        <span className="text-yellow-500">Vault 🔐/&gt;</span>
      </div>
      <div className="flex justify-center items-center gap-2">
        Created with <img className="w-5" src="/heart.png" alt="heart" /> by Shiv.......!
      </div>
    </footer>
  );
};

export default Footer;
