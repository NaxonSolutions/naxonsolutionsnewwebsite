import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
const Getstarted = () => {
  return (
    <>
      <Link to={"/"}>
        <Navbar></Navbar>
      </Link>
      <div className="bg-stone-50 py-10 px-6 sm:px-12">
        <h1 className="text-4xl font-bold text-center text-teal-700 mb-10">
          Let’s Get Started
        </h1>

        {/* Responsive grid for two forms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* General Inquiry Form */}
          <form
            action="https://deploy-company-website-jhgf.vercel.app/api/contact"
            method="POST"
            className="flex flex-col gap-6 bg-white rounded-3xl p-8 shadow-md"
          >
            <h2 className="text-2xl font-semibold text-teal-600 mb-2">
              General Inquiry
            </h2>

            <div>
              <label htmlFor="name" className="block mb-1 font-medium">
                Full Name
              </label>
              <input
                id="name"
                name="fullName"
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div>
              <label htmlFor="inquiry-email" className="block mb-1 font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your message..."
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="self-start border-2 border-teal-500 text-teal-700 hover:bg-teal-500 hover:text-white transition-all rounded-3xl px-8 py-2 cursor-pointer"
            >
              Submit
            </button>
          </form>

          {/* Hire Us Form */}
          <form
            action="https://deploy-company-website-jhgf.vercel.app/api/contact"
            method="POST"
            className="flex flex-col gap-6 bg-white rounded-3xl p-8 shadow-md"
          >
            <h2 className="text-2xl font-semibold text-teal-600 mb-2">
              Hire Us
            </h2>

            <div>
              <label htmlFor="name" className="block mb-1 font-medium">
                Full Name
              </label>
              <input
                id="name"
                name="fullName"
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-medium">
                What do you need?
              </label>
              <input
                id="message"
                name="service"
                type="text"
                placeholder="e.g. Website, App, Branding"
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div>
              <label htmlFor="hire-message" className="block mb-1 font-medium">
                Project Details
              </label>
              <textarea
                id="hire-message"
                name="projectDetails"
                rows="4"
                placeholder="Briefly describe your project..."
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="self-start border-2 border-teal-500 text-teal-700 hover:bg-teal-500 hover:text-white transition-all rounded-3xl px-8 py-2 cursor-pointer"
            >
              Hire Us
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Getstarted;
