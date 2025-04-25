import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import about from "../assets/about.png";
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
import logo from "../assets/logo.jpg";
import { CiMail } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import clientRating from "../assets/portfolioImages/clientRating.jpg";
const Portfolio = () => {
  const portfolioImageObjects = [
    { title: "Digital Business Funnel", imageSrc: image1 },
    { title: "Healthcare Funnel", imageSrc: image2 },
    { title: "Digital Funnel", imageSrc: image3 },
    { title: "Digital Business Funnel", imageSrc: image4 },
    { title: "Digital Business Funnel", imageSrc: image5 },
    { title: "Digital Business Funnel", imageSrc: image6 },
    { title: "Digital Business Funnel", imageSrc: image7 },
    { title: "Digital Business Funnel", imageSrc: image8 },
    { title: "Digital Business Funnel", imageSrc: image9 },
    { title: "Digital Business Funnel", imageSrc: image10 },
  ];

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

  const values = [
    {
      title: "Awarded",
      description:
        "Recognized for excellence, we proudly display accolades that reflect our commitment to outstanding performance",
    },
    {
      title: "Professional",
      description:
        "With a professional ethos, we deliver top-tier services backed by expertise and reliability.",
    },
    {
      title: "Innovative",
      description:
        "At the forefront of innovation, we consistently pioneer new solutions to keep you ahead in a dynamic market.",
    },
    {
      title: "Supported",
      description:
        "Your success is our priority, and our unwavering support ensures you thrive at every step of your journey.",
    },
    {
      title: "Dedicated",
      description:
        "Our team is dedicated to exceeding expectations, ensuring unwavering commitment to your success.",
    },
    {
      title: "Global",
      description:
        "Operating on a global scale, our reach extends far and wide to serve clients with a truly international perspective.",
    },
    {
      title: "Creative",
      description:
        "Infusing creativity into every project, our solutions are tailored to leave a lasting and impactful impression.",
    },
    {
      title: "Focussed",
      description:
        "With a laser-focused approach, we channel our efforts to meet and exceed your specific business goals.",
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
            <button className=" py-6 mt-6 w-full border-0 rounded-full px-2 h-10 flex items-center justify-center bg-white text-black text-md sm:w-1/4 sm:py-5 max-md:mt-1 ">
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
      {/* bg-[#f8f8f8] */}
      <div className="flex flex-col items-center p-4 ">
        <div className="text-4xl mt-16  font-semibold mb-8">Our Portfolio</div>
        <div className=" pt-6 px-6 rounded-4xl mx-9 flex flex-col items-center md:gap-2">
          <div className="flex justify-center items-center sm:gap-6 w-full md:flex-row md:pt-8 flex-wrap md:max-w-4/5 md:gap-2 gap-2">
            <div className="border-1 sm:px-6 sm:py-1.5 px-2 py-2 sm:rounded-full rounded-4xl flex items-center justify-between gap-2">
              <HiMiniSquaresPlus className="w-4 h-4" />
              <p className="hidden sm:block">All</p>
            </div>

            {/* First Button Row */}
            <div className="flex flex-wrap justify-center gap-4">
              <button className="primary-btn">Custom dashboards</button>
              <button className="primary-btn">Forms</button>
            </div>

            {/* Second Button Row */}
            <div className="flex flex-wrap justify-center gap-4">
              <button className="primary-btn">Funnels/Websites</button>
              <button className="primary-btn">Surveys</button>
            </div>
          </div>
          {/* Projects */}
        </div>
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 py-13 sm:px-12">
        {portfolioImageObjects.map((element, index) => (
          <div
            key={index}
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
          </div>
        ))}
      </div>

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

      {/* AfterProject Grid */}

      <div className="grid grid-cols-1 mt-20 gap-6 md:grid-cols-2 md:mx-15 xl:grid-cols-3 sm:grid sm:grid-cols-2 sm:mx-16 ">
        {values.map((element, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-stone-50 gap-4 py-8 mx-8 sm:mx-0 rounded-2xl md:mx-0 "
          >
            <img
              src={tick}
              alt=""
              className="h-20 mb-4 px-2.5 py-3.5 border rounded-[500px] border-black bg-green-300"
            />
            <div className="text-2xl font-semibold mb-2">{element.title}</div>
            <div className="px-4 text-gray-600 text-center">
              {element.description}
            </div>
          </div>
        ))}
      </div>

      {/* AfterProject Grid After */}
      <div className="flex mt-35 gap-4 mx-4 border-0 rounded-2xl ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center sm:grid sm:grid-cols-2 md:mx-15">
          <div>
            <img
              className="border-0 h-110 lg:h-136 object-cover  rounded-2xl"
              src="https://images.unsplash.com/photo-1534665482403-a909d0d97c67?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29mdHdhcmUlMjBlbmdpbmVlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center items-start p-10 gap-5  border-0 rounded-2xl md:px-18 bg-blue-200 ">
            <div className="">
              <img src={logo} className="h-16 rounded-4xl" alt="" />
            </div>
            <div className="text-4xl sm:text-center">
              Schedule a call with us to see how we can help you
            </div>
            <div>
              Exploring Solution Together: Book a Consultaion for Personalized
              Assistance
            </div>

            <hr className="w-full border-t-2 border-gray-400 my-2" />

            <div className="flex g-4  ">
              <CiMail className="w-6 h-6 mr-2" />
              <div>info@naxon.com</div>
            </div>
            <div className="flex">
              <IoMdCall className="w-6 h-6 mr-2" />
              <a href="">+92 3435395571</a>
            </div>
            <div className="flex">
              <CiLocationOn className="w-6 h-6 mr-2" />
              <div>Gulberg Islamabad, Federal Region Islamabad - Pakistan</div>
            </div>
          </div>
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
  );
};

export default Portfolio;
