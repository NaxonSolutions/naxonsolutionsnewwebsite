import React from "react";
import tick from "../assets/tick.png";

const Values = () => {
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

  return (
    <section className="py-16 bg-[#e5e7eb]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our core values define who we are and guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 mt-20 gap-6 md:grid-cols-2 md:mx-15 xl:grid-cols-3 sm:grid sm:grid-cols-2 sm:mx-16">
          {values.map((element, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-stone-50 gap-4 py-8 mx-8 sm:mx-0 rounded-2xl md:mx-0"
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
      </div>
    </section>
  );
};

export default Values;
