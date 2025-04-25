import React from "react";

import icon1 from "../assets/servicesSvgs/1.svg";
import icon2 from "../assets/servicesSvgs/2.svg";
import icon3 from "../assets/servicesSvgs/3.svg";
import icon4 from "../assets/servicesSvgs/4.svg";
import icon5 from "../assets/servicesSvgs/5.svg";
import icon6 from "../assets/servicesSvgs/6.svg";
import icon7 from "../assets/servicesSvgs/7.svg";
import icon8 from "../assets/servicesSvgs/8.svg";

const cards = [
  {
    image: icon1,
    title: "Lead Generation & Management",
    description:
      "Capture leads from multiple sources, automatically assign them to pipelines, and nurture them through smart workflows.",
  },
  {
    image: icon2,
    title: "Automated Follow-Up Sequences",
    description:
      "Create multi-channel automation using SMS, email, and voicemail drops to keep your leads engaged and convert faster.",
  },
  {
    image: icon3,
    title: "Booking & Appointment Scheduling",
    description:
      "Let prospects book directly into your calendar, send reminders, and integrate the process with your sales pipelines.",
  },
  {
    image: icon4,
    title: "Funnel & Landing Page Builder",
    description:
      "Design high-converting funnels and pages using a drag-and-drop builder integrated with forms, calendars, and payment tools.",
  },
  {
    image: icon5,
    title: "CRM & Pipeline Tracking",
    description:
      "Visualize customer journeys, manage pipeline stages, and track sales opportunities all in one centralized CRM.",
  },
  {
    image: icon6,
    title: "Reputation Management",
    description:
      "Collect reviews, monitor feedback, and automatically request testimonials to boost your client’s online presence.",
  },
  {
    image: icon7,
    title: "White-Label Client Portals",
    description:
      "Offer branded dashboards where clients can access reporting, communications, and campaign insights under your agency’s name.",
  },
  {
    image: icon8,
    title: "Social Media & Ad Reporting",
    description:
      "Track performance across Google, Facebook, and Instagram ads alongside organic social insights and ROI metrics.",
  },
];

const Services = () => {
  return (
    <div id="Services">
      <div className="text-center text-4xl font-semibold pt-26">
        Our Services
      </div>
      <div className="grid md:grid-cols-2 gap-6 px-6 pt-12 pb-20 xl:px-20">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex bg-stone-50 flex-col justify-around items-start gap-6 p-4 border-0 rounded-2xl"
          >
            <div>
              <img src={card.image} alt={card.title} className="w-14 h-14" />
            </div>
            <div className="text-2xl font-semibold">{card.title}</div>
            <div className="text-lg">{card.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
