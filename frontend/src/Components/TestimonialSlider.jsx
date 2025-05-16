import React from "react";

const testimonials = [
  {
    text: "Completely transformed our sales process. Their CRM automation helped us track leads effortlessly and improve follow-ups.",
    name: "James A.",
    role: "Startup Founder",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    text: "Their funnel design brought in more qualified leads than all last quarter. Finally, a system that scales.",
    name: "Nina C.",
    role: "Marketing Director",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    text: "From custom pipelines to full CRM, they gave us the tools to operate smarter—not harder.",
    name: "Alex T.",
    role: "Agency Owner",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
  },
  {
    text: "Our conversion rate doubled thanks to their CRM and pipeline automation. Best investment this year.",
    name: "Clara B.",
    role: "Sales Manager",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    text: "They automated everything—email, SMS, lead tracking. It's completely hands-off now.",
    name: "Leo G.",
    role: "Business Consultant",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const TestimonialSlider = () => {
  const duplicateTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="py-16 px-4 text-center">
      <p className="lg:text-5xl md:text-2xl sm:text-xl text-[#0f2342] mb-12 font-semibold">
        What our clients say
      </p>

      <div className="overflow-hidden relative">
        <div className="flex gap-8 animate-scrollLoop w-max hover:[animation-play-state:paused]">
          {duplicateTestimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="flex-none w-[350px] bg-white border-2 border-[#f0f0f0] rounded-2xl p-6 text-left transition-all"
            >
              <p className="text-base sm:text-sm text-[#333] leading-relaxed mb-6 font-sans">
                <span className="text-yellow-400 text-2xl sm:text-xl font-bold">
                  "
                </span>
                {testimonial.text}
                <span className="text-yellow-400 text-2xl sm:text-xl font-bold float-right ml-2">
                  "
                </span>
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-[#0f2342] text-base sm:text-sm m-0">
                    {testimonial.name}
                  </h4>
                  <span className="text-sm sm:text-xs text-gray-500">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLoop {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scrollLoop {
          animation: scrollLoop 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TestimonialSlider;
