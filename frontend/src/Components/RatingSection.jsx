import React, { useState } from "react";
import clientRating from "../assets/portfolioImages/clientRating.jpg";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    stars: 5,
    date: "March 2024",
    text: "Working with this company has been an absolute pleasure. Their attention to detail and commitment to excellence is unmatched.",
    author: "John Smith",
  },
  {
    stars: 5,
    date: "February 2024",
    text: "Outstanding service and incredible results. They transformed our digital presence completely.",
    author: "Sarah Johnson",
  },
  {
    stars: 5,
    date: "January 2024",
    text: "Highly professional team with amazing creative skills. Would definitely recommend!",
    author: "Michael Brown",
  },
];

const RatingSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrevious = () => {
    if (current > 0) {
      setDirection(-1);
      setCurrent((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (current < testimonials.length - 1) {
      setDirection(1);
      setCurrent((prev) => prev + 1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (current < testimonials.length - 1) {
        setDirection(1);
        setCurrent((prev) => prev + 1);
      }
    },
    onSwipedRight: () => {
      if (current > 0) {
        setDirection(-1);
        setCurrent((prev) => prev - 1);
      }
    },
  });

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.4,
      },
    }),
  };

  return (
    <div className="flex flex-col gap-12 items-center mt-40">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center bg-black border-0 rounded-4xl gap-3 px-4 py-3 hover:scale-105 transition-transform"
      >
        <div className="bg-white py-1.5 px-1.5 rounded-2xl">
          <img src={clientRating} className="w-5 h-5" alt="rating icon" />
        </div>
        <div className="text-white">Rated 5/5 By Our Clients</div>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-5xl text-center px-6"
      >
        Words of praise from others about our presence.
      </motion.div>

      <div className="w-full max-w-xl mx-auto mt-10">
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrevious}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center ${
              current === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-50"
            }`}
            disabled={current === 0}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-gray-600"
              initial={{ x: 0 }}
              whileHover={{ x: -3 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </motion.svg>
          </motion.button>

          <div {...swipeHandlers} className="relative h-[280px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-stone-100 p-6 rounded-2xl shadow-lg transition-all duration-300"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-between items-center mb-4"
                  >
                    <div className="flex gap-2">
                      {[...Array(testimonials[current].stars)].map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, rotate: -180 }}
                          animate={{ opacity: 1, rotate: 0 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="text-yellow-500"
                        >
                          ★
                        </motion.span>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonials[current].date}
                    </div>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-gray-700 italic mb-8"
                  >
                    "{testimonials[current].text}"
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-right font-semibold text-gray-800"
                  >
                    — {testimonials[current].author}
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center ${
              current === testimonials.length - 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-50"
            }`}
            disabled={current === testimonials.length - 1}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-gray-600"
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </motion.svg>
          </motion.button>
        </div>

        <div className="flex justify-center gap-3 mt-6">
          {testimonials.map((_, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setDirection(idx > current ? 1 : -1);
                setCurrent(idx);
              }}
              className={`w-8 h-8 text-sm rounded-full transition-colors duration-300 ${
                idx === current
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700 hover:bg-blue-300"
              }`}
            >
              {idx + 1}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RatingSection;
