import React from "react";
import logo from "../assets/logo.jpg";
const Footer = () => {
  return (
    <div className="bg-blue-200 flex justify-around items-center py-4 ">
      <img className="w-12 h-12 rounded-4xl" src={logo} alt="" />
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
