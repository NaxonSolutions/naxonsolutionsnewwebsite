import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.jpg";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import Getstarted from "../Pages/Getstarted";
const Navbar = () => {
  let [flag, setFlag] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);

  let handleMenuClick = () => {
    if (flag) setFlag(false);
    else setFlag(true);
  };

  const handleSetActive = (index) => {
    setActiveIndex(index);
  };
  const menuItems = [
    "HOME",
    "ABOUT",
    "SERVICES",
    "PORTFOLIO",
    "CONTACT",
    "TEAM",
  ];
  const menuItemsLarge = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Contact",
    "Team",
  ];

  return (
    <>
      <div className="w-full flex bg-blend-darken backdrop-blur-md h-22 z-50 items-center shadow-md px-2 sticky top-0 gap-10 justify-around">
        <div className="w-1/4 lg:flex lg:justify-end lg:pr-12 lg:w-[17%] lg:pl-5 ">
          <Link to="Home" spy={true} smooth={true} offset={-50} duration={500}>
            <img
              className="w-13.5 h-13.5 rounded-4xl object-contain ml-5"
              src={logo}
              alt=""
            />
          </Link>
        </div>

        <nav className="max-lg:hidden w-[55%] flex-wrap ">
          <ul className="flex gap-4 flex-wrap ">
            {menuItemsLarge.map((item, index) => (
              <button
                key={index}
                onClick={() => handleSetActive(index)}
                className={`menu-btns ${
                  activeIndex === index
                    ? "bg-black border-1 border-black text-amber-50"
                    : ""
                }`}
              >
                <Link
                  to={`${item}`}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  {item}
                </Link>
              </button>
            ))}
          </ul>
        </nav>

        <div className="flex gap-4 mr-5 sm:max-w-3/4 pl-3.5">
          <RouterLink to="/getstarted">
            <button className="py-6 px-7 border rounded-full h-10 flex items-center bg-black text-white justify-center text-[19px]">
              Get Started
            </button>
          </RouterLink>
          <div
            className="flex items-center justify-center pl-2 pr-0 ml-0 mr-0 lg:hidden"
            onClick={handleMenuClick}
          >
            <AiOutlineMenu className="h-7 w-7 font-bold" />
          </div>
        </div>
        {flag ? (
          ""
        ) : (
          <div className="absolute top-3 w-[98%] h-screen bg-[#f3f4f6]">
            <div className="flex items-center justify-between">
              <img
                className="w-14.5 h-14.5 rounded-4xl object-contain ml-5"
                src={logo}
                alt=""
              />
              <p
                className="font-extrabold mr-4 lg:hidden"
                onClick={handleMenuClick}
              >
                CLOSE
              </p>
            </div>
            <div className="flex flex-col items-center mt-10">
              {menuItems.map((element, index) => (
                <>
                  <hr className="w-[94%] border-t-1 border-gray-300" />
                  <p className="py-6 text-2xl font-semibold">{element}</p>
                </>
              ))}
            </div>
            <div class="text-black space-y-6 pl-7">
              <div>
                <h4 class="text-xl text-gray-500 mb-1">Address</h4>
                <p class="font-semibold leading-snug text-2xl">
                  541 Melville Geek,
                  <br />
                  Palo Alto, CA 94301
                </p>
              </div>

              <div>
                <h4 class="text-sm text-gray-500 mb-1">Social Media</h4>
                <ul class="space-y-1">
                  <li>
                    <a href="#" class="hover:underline">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 class="text-sm text-gray-500 mb-1">Contact Us</h4>
                <p>info@Naxon Solution</p>
                <p>+00 333 112234</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
