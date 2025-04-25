import React from "react";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="min-h-screen overflow-x-hidden sm:px-12 lg:grid lg:grid-cols-2"
    >
      <div className="flex pb-10  flex-col bg-white  m-6 p-6 border-0 rounded-3xl py-14 gap-12">
        <div className="text-4xl font-medium">+92 3435395571</div>
        <hr />
        <div className="text-2xl">Address</div>
        <div>Islambad Gulberg Green, Golden Height</div>
        <hr />
        <div className="text-3xl">Email</div>
        <div>info@naxonsolutions.com</div>
      </div>
      {/* Form Contact */}
      <div className="flex pb-10 flex-col bg-stone-50 m-6 p-6 border-0 rounded-3xl py-14 gap-12 sm:px-14">
        <form
          action="https://deploy-company-website-jhgf.vercel.app/api/contact"
          method="POST"
          className="flex flex-col gap-6 w-full max-w-xl mx-auto"
        >
          <button className="text-3xl font-semibold hover:bg-black hover:text-white">
            Contact Us
          </button>
          <hr className="w-full border-t-2 border-gray-300" />

          <div>
            <label For="name" className="block text-lg font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div>
            <label For="email" className="block text-lg font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div>
            <label For="message" className="block text-lg font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              placeholder="Write your message..."
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
            ></textarea>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="border-2 border-teal-500 text-teal-700 hover:bg-teal-500 hover:text-white transition-all rounded-3xl px-8 py-2"
            >
              Contact
            </button>
          </div>

          <hr className="w-full border-t border-gray-200" />

          <div className="text-sm text-gray-500">
            <div>
              <strong>Address:</strong> Islamabad, Gulberg Green, Golden Height
            </div>
            <div>
              <strong>Email:</strong> zahidsher098@gmail.com
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
