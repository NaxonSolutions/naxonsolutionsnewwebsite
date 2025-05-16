import React, { useState } from "react";
import clientRating from "../assets/portfolioImages/clientRating.jpg";
import { useSwipeable } from "react-swipeable";

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

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrent((prev) => (prev < testimonials.length - 1 ? prev + 1 : prev)),
    onSwipedRight: () => setCurrent((prev) => (prev > 0 ? prev - 1 : prev)),
  });

  return (
    <div className="flex flex-col gap-12 items-center mt-40">
      <div className="flex items-center bg-black border-0 rounded-4xl gap-3 px-4 py-3">
        <div className="bg-white py-1.5 px-1.5 rounded-2xl">
          <img src={clientRating} className="w-5 h-5" alt="rating icon" />
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
            "{testimonials[current].text}"
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
  );
};

export default RatingSection;
