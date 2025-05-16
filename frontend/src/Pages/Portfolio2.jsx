import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import about from "../assets/about.png";
import Navbar from "../Components/Navbar";
import { Link as RouterLink } from "react-router-dom";
import image1 from "../assets/portfolioImages/1.png";
import image2 from "../assets/portfolioImages/2.webp";
import image3 from "../assets/portfolioImages/3.webp";
import image4 from "../assets/portfolioImages/4.webp";
import image5 from "../assets/portfolioImages/5.webp";
import image6 from "../assets/portfolioImages/6.webp";
import image7 from "../assets/portfolioImages/7.webp";
import image8 from "../assets/portfolioImages/8.webp";
import image9 from "../assets/portfolioImages/9.webp";
import image10 from "../assets/portfolioImages/10.webp";
import tick from "../assets/tick.png";
import { BsArrowUpRight } from "react-icons/bs";
import { HiMiniSquaresPlus } from "react-icons/hi2";
import logo from "../assets/logo.png";
import { CiMail } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import clientRating from "../assets/portfolioImages/clientRating.jpg";

const Portfolio = () => {
  const portfolioImageObjects = [
    { title: "Digital Business Funnel", imageSrc: image1, category: "funnels" },
    { title: "Healthcare Dashboard", imageSrc: image2, category: "dashboards" },
    { title: "Customer Feedback Form", imageSrc: image3, category: "forms" },
    {
      title: "Email Automation Flow",
      imageSrc: image4,
      category: "automation",
    },
    { title: "Lead Generation Survey", imageSrc: image5, category: "surveys" },
    { title: "Marketing Funnel", imageSrc: image6, category: "funnels" },
    {
      title: "Task Automation System",
      imageSrc: image7,
      category: "automation",
    },
    { title: "Analytics Dashboard", imageSrc: image8, category: "dashboards" },
    { title: "Contact Form", imageSrc: image9, category: "forms" },
    { title: "Customer Survey", imageSrc: image10, category: "surveys" },
  ];

  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = portfolioImageObjects.filter((project) =>
    activeFilter === "all" ? true : project.category === activeFilter
  );

  const testimonials = [
    {
      stars: 5,
      date: "Dec 25, 2024",
      text: "They make great websites, communicate with you well and are very easy to work with",
      author: "AbdulRahman Tijani",
    },
    {
      stars: 5,
      date: "Dec 25, 2024",
      text: "Their Websites are smooth and Aesthetic and their communicaton is great",
      author: "Naveed Khan",
    },
    {
      stars: 5,
      date: "Dec 25, 2024",
      text: "Another sample review. The team is very professional and helpful.",
      author: "Jenna James",
    },
    {
      stars: 5,
      date: "Dec 25, 2024",
      text: "Very satisfied with the results. Will work again!",
      author: "Samantha Lee",
    },
  ];

  const [current, setCurrent] = useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setCurrent((prev) => (prev + 1) % testimonials.length),
    onSwipedRight: () =>
      setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1)),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div id="Portfolio" className="pb-30 lg:mx-5 rounded-4xl">
      <div className="lg:grid lg:grid-cols-2 lg:gap-2">
        <div className="flex flex-col justify-center items-center ">
          <div className="p-6 pt-20">
            <img
              className="border-0 h-70 rounded-2xl"
              src={about}
              alt="Portfolio Image"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-3xl px-6 mb-10 mt-6 sm:text-center md:text-5xl md:px-8 md:text-center md:mt-24">
            Have Any Projects in Mind? Don't Hesitate to Contact US
          </div>
          <div className="text-lg px-6 mb-2 text-center">
            Are you ready to make something awesome? Let's get on a call.
          </div>
          <div className="flex flex-row flex-wrap justify-center gap-2 sm:w-full">
            <button className="py-6 px-2 mt-6 w-full border-0 rounded-full h-10 flex items-center justify-center bg-black text-gray-50 text-md sm:w-1/4 sm:py-5">
              <Link
                to="Contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Schedule a Call
              </Link>
            </button>
            <button className="py-6 mt-6 w-full border-0 rounded-full px-2 h-10 flex items-center justify-center bg-white text-black text-md sm:w-1/4 sm:py-5 max-md:mt-1">
              <Link
                to="Contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Contact Us
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-blue-200 mx-15 rounded-4xl mt-20">
        <div className="flex flex-col items-center p-4">
          <div className="text-4xl mt-16 font-semibold mb-8">Our Portfolio</div>
          <div className="pt-6 rounded-4xl flex flex-col items-center md:gap-2 w-full">
            <div className="flex justify-center items-center sm:gap-6 w-full md:flex-row md:pt-8 flex-wrap md:max-w-4/5 md:gap-2 gap-2">
              <button
                onClick={() => setActiveFilter("all")}
                className={`filter-btn ${
                  activeFilter === "all"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                } border-0 sm:px-6 sm:py-1.5 px-2 py-2 sm:rounded-full rounded-4xl flex items-center justify-between gap-2 transition-colors duration-300 hover:bg-black hover:text-white`}
              >
                <HiMiniSquaresPlus className="w-4 h-4" />
                <span className="hidden sm:block">All</span>
              </button>

              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setActiveFilter("dashboards")}
                  className={`filter-btn ${
                    activeFilter === "dashboards"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } border-0 px-4 py-2 rounded-full transition-colors duration-300 hover:bg-black hover:text-white`}
                >
                  Custom Dashboards
                </button>
                <button
                  onClick={() => setActiveFilter("forms")}
                  className={`filter-btn ${
                    activeFilter === "forms"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } border-0 px-4 py-2 rounded-full transition-colors duration-300 hover:bg-black hover:text-white`}
                >
                  Forms
                </button>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setActiveFilter("funnels")}
                  className={`filter-btn ${
                    activeFilter === "funnels"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } border-0 px-4 py-2 rounded-full transition-colors duration-300 hover:bg-black hover:text-white`}
                >
                  Funnels/Websites
                </button>
                <button
                  onClick={() => setActiveFilter("surveys")}
                  className={`filter-btn ${
                    activeFilter === "surveys"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } border-0 px-4 py-2 rounded-full transition-colors duration-300 hover:bg-black hover:text-white`}
                >
                  Surveys
                </button>
                <button
                  onClick={() => setActiveFilter("automation")}
                  className={`filter-btn ${
                    activeFilter === "automation"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } border-0 px-4 py-2 rounded-full transition-colors duration-300 hover:bg-black hover:text-white`}
                >
                  Automation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 py-13 sm:px-12">
          {filteredProjects.map((element, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white m-3 py-2 border-0 rounded-2xl h-[600px] overflow-hidden"
            >
              <div className="flex items-center justify-between px-5 pt-6 pb-3">
                <div className="text-2xl font-medium">{element.title}</div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-black px-2.5 py-2.5 rounded-3xl cursor-pointer"
                >
                  <BsArrowUpRight className="text-white" />
                </motion.div>
              </div>
              <div className="overflow-hidden h-[500px] rounded-3xl p-4 group">
                <motion.div
                  className="w-full"
                  initial={{ y: 0 }}
                  whileHover={{ y: "-50%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <img
                    className="h-[500px] w-full object-cover rounded-3xl"
                    src={element.imageSrc}
                    alt="Primary"
                  />
                  <img
                    className="h-[500px] w-full object-cover rounded-3xl"
                    src={
                      index === 0
                        ? "https://plus.unsplash.com/premium_photo-1722945683602-fa3b05086316?w=1000&auto=format&fit=crop&q=60"
                        : index === 1
                        ? "https://images.unsplash.com/photo-1674027326254-88c960d8e561?w=1000&auto=format&fit=crop&q=60"
                        : index === 2
                        ? "https://images.unsplash.com/photo-1674027326254-88c960d8e561?w=1000&auto=format&fit=crop&q=60"
                        : index === 3
                        ? "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?w=1000&auto=format&fit=crop&q=60"
                        : "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=1000&auto=format&fit=crop&q=60"
                    }
                    alt="Secondary"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
