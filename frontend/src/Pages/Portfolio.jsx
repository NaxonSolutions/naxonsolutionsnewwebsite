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
import { BsArrowUpRight } from "react-icons/bs";
import { HiMiniSquaresPlus } from "react-icons/hi2";
import clientRating from "../assets/portfolioImages/clientRating.jpg";
import Footer from "./Footer";

const Portfolio = () => {
  const portfolioImageObjects = [
    {
      title: "Digital Business Funnel",
      imageSrc: image1,
      category: "funnels",
    },
    {
      title: "Healthcare Dashboard",
      imageSrc: image2,
      category: "dashboards",
    },
    {
      title: "Customer Feedback Form",
      imageSrc: image3,
      category: "forms",
    },
    {
      title: "Email Automation Flow",
      imageSrc: image4,
      category: "automation",
    },
    {
      title: "Lead Generation Survey",
      imageSrc: image5,
      category: "surveys",
    },
    {
      title: "Marketing Funnel",
      imageSrc: image6,
      category: "funnels",
    },
    {
      title: "Task Automation System",
      imageSrc: image7,
      category: "automation",
    },
    {
      title: "Analytics Dashboard",
      imageSrc: image8,
      category: "dashboards",
    },
    {
      title: "Contact Form",
      imageSrc: image9,
      category: "forms",
    },
    {
      title: "Customer Survey",
      imageSrc: image10,
      category: "surveys",
    },
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
    <>
      <RouterLink to="/">
        <Navbar></Navbar>
      </RouterLink>
      <div id="Portfolio" className=" pb-30">
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
            <div className="text-3xl  px-6 mb-10 mt-6 sm:text-center md:text-5xl md:px-8 md:text-center md:mt-24">
              Have Any Projects in Mind? Don't Hesitate to Contact US
            </div>
            <div className="text-lg px-6 mb-2 text-center">
              Are you ready to make something awesome? Let's get on a call.
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-2 sm:w-full">
              <button className=" py-6 px-2 mt-6 w-full border-0 rounded-full h-10 flex items-center justify-center bg-black text-gray-50 text-md sm:w-1/4 sm:py-5 ">
                <RouterLink
                  to="/getstarted"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  Schedule a Call
                </RouterLink>
              </button>
              <button className=" py-6 mt-6 w-full border-0 rounded-full px-2 h-10 flex items-center justify-center bg-white text-black text-md sm:w-1/4 sm:py-5 max-md:mt-1 ">
                <RouterLink
                  to="/getstarted"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  Contact Us
                </RouterLink>
              </button>
            </div>
          </div>
        </div>
        {/* bg-[#f8f8f8] */}
        <div className="bg-blue-200 mx-15 rounded-4xl mt-20">
          <div className="flex flex-col items-center p-4 ">
            <div className="text-4xl mt-16  font-semibold mb-8">
              Our Portfolio
            </div>
            <div className=" pt-6 rounded-4xl flex flex-col items-center md:gap-2 w-full ]">
              <div className="flex justify-center items-center sm:gap-6 w-full md:flex-row md:pt-8 flex-wrap md:max-w-4/5 md:gap-2 gap-2">
                <button
                  onClick={() => setActiveFilter("all")}
                  className={`filter-btn ${
                    activeFilter === "all" ? "active" : ""
                  }`}
                >
                  <HiMiniSquaresPlus className="w-4 h-4" />
                  <span className="hidden sm:block">All</span>
                </button>

                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => setActiveFilter("dashboards")}
                    className={`filter-btn ${
                      activeFilter === "dashboards" ? "active" : ""
                    }`}
                  >
                    Custom Dashboards
                  </button>
                  <button
                    onClick={() => setActiveFilter("forms")}
                    className={`filter-btn ${
                      activeFilter === "forms" ? "active" : ""
                    }`}
                  >
                    Forms
                  </button>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => setActiveFilter("funnels")}
                    className={`filter-btn ${
                      activeFilter === "funnels" ? "active" : ""
                    }`}
                  >
                    Funnels/Websites
                  </button>
                  <button
                    onClick={() => setActiveFilter("surveys")}
                    className={`filter-btn ${
                      activeFilter === "surveys" ? "active" : ""
                    }`}
                  >
                    Surveys
                  </button>
                  <button
                    onClick={() => setActiveFilter("automation")}
                    className={`filter-btn ${
                      activeFilter === "automation" ? "active" : ""
                    }`}
                  >
                    Automation
                  </button>
                </div>
              </div>
              {/* Projects */}
            </div>
          </div>

          {/* Projects */}
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
                  <div className="bg-black px-2.5 py-2.5 rounded-3xl">
                    <BsArrowUpRight className="text-white" />
                  </div>
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
        {/* Rating Section */}
        <div className="flex flex-col gap-12 items-center mt-40">
          <div className="flex items-center bg-black border-0 rounded-4xl gap-3 px-4 py-3">
            <div className="bg-white py-1.5 px-1.5 rounded-2xl">
              <img src={clientRating} className="w-5 h-5" alt="" />
            </div>
            <div className="text-white">Rated 5/5 By Our Clients</div>
          </div>

          <div className="text-5xl text-center px-6">
            Words of praise from others about our presence.
          </div>
          <div className="w-full max-w-xl mx-auto mt-10">
            <div
              {...swipeHandlers}
              className="bg-stone-100 p-6 rounded-2xl shadow-md transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2 text-yellow-500">
                  {"★".repeat(testimonials[current].stars)}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonials[current].date}
                </div>
              </div>
              <p className="text-lg text-gray-700 italic mb-8">
                “{testimonials[current].text}”
              </p>
              <div className="text-right font-semibold text-gray-800">
                — {testimonials[current].author}
              </div>
            </div>

            <div className="flex justify-center gap-3 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-8 h-8 text-sm rounded-full ${
                    idx === current
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-700"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Portfolio;
