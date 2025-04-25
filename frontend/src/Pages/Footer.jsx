import React from "react";
import logo from "../assets/logo.jpg";
const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white rounded-tl-2xl rounded-tr-2xl mx-5 py-3 sm:mx-16 md:flex-row md:justify-around">
      <img className="w-22 h-22" src={logo} alt="" />
      <p>
        Copyright © 2024 <span className="font-bold">Naxon Solution</span>. All
        rights reserved.
      </p>
      <div className="md:flex md:flex-col md: gap-5 md:items-center">
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
  );
};

export default Footer;
