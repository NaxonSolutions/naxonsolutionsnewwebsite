import React from "react";
import { Link } from "react-scroll";
import { CiMail, CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import logo from "../assets/logo.png";

const ThereIsAReason = () => {
  return (
    <div className="container mx-auto">
      {/* AfterProject Text */}
      <div className="flex flex-col items-center mt-20 md:px-18">
        <div className="text-4xl text-center px-4 mb-5 font-semibold">
          There is a reason why we are crashing it on a global market
        </div>
        <div className="text-lg text-center mb-5 px-4">
          Our success stems from innovative strategies and a commitment to
          excellence, setting us apart in the market.
        </div>
        <div>
          <button className="px-6 py-2 bg-black text-white rounded-4xl text-xl cursor-pointer">
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Talk to sales
            </Link>
          </button>
        </div>
      </div>

      {/* Contact Information Grid */}
      <div className="flex mt-35 gap-4 mx-4 border-0 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center sm:grid sm:grid-cols-2 md:mx-15">
          <div>
            <img
              className="border-0 h-110 lg:h-136 object-cover rounded-2xl"
              src="https://images.unsplash.com/photo-1534665482403-a909d0d97c67?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29mdHdhcmUlMjBlbmdpbmVlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Software Engineer"
            />
          </div>
          <div className="flex flex-col justify-center items-start p-10 gap-5 border-0 rounded-2xl md:px-18 bg-blue-200">
            <div>
              <img src={logo} className="h-16 rounded-4xl" alt="Company Logo" />
            </div>
            <div className="text-4xl sm:text-center">
              Schedule a call with us to see how we can help you
            </div>
            <div>
              Exploring Solution Together: Book a Consultaion for Personalized
              Assistance
            </div>

            <hr className="w-full border-t-2 border-gray-400 my-2" />

            <div className="flex g-4">
              <CiMail className="w-6 h-6 mr-2" />
              <div>info@naxon.com</div>
            </div>
            <div className="flex">
              <IoMdCall className="w-6 h-6 mr-2" />
              <a href="tel:+923435395571">+92 3435395571</a>
            </div>
            <div className="flex">
              <CiLocationOn className="w-6 h-6 mr-2" />
              <div>Gulberg Islamabad, Federal Region Islamabad - Pakistan</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThereIsAReason;
