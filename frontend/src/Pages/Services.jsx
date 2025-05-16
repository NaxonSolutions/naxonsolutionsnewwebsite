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
    title: "End-to-End GHL Platform Implementation",
    description:
      "End-to-end GoHighLevel setup including account configuration, branding, and essential modules to get you fully operational.",
  },
  {
    image: icon2,
    title: "Custom Web Assets & Conversion Systems",
    description:
      "Custom websites, sales funnels, calendars, forms, and surveys designed and deployed directly in GHL.",
  },
  {
    image: icon3,
    title: "Advanced Workflow & Automation Engineering",
    description:
      "Advanced automation systems to engage leads, onboard clients, and streamline business operations.",
  },
  {
    image: icon4,
    title: "Seamless Third-Party Integration Solutions",
    description:
      "Connect your systems with tools like Zapier, N8N, and Integromat for seamless data flow and task automation.",
  },
  {
    image: icon5,
    title: "Custom Development & API Integration",
    description:
      "Tailored coding and API integrations to extend GoHighLevel's capabilities and solve unique business needs.",
  },
  {
    image: icon6,
    title: "A2P 10DLC Compliance & Twilio Configuration",
    description:
      "Full support for Twilio integration, A2P 10DLC registration, number setup, and message deliverability optimization.",
  },
  {
    image: icon7,
    title: "Automated Client Onboarding Systems",
    description:
      "Automated onboarding workflows with forms, tasks, and welcome emails to guide new clients from signup to success.",
  },
  {
    image: icon8,
    title: "Scalable Snapshot Creation & Deployment",
    description:
      "Build and deploy reusable GHL snapshots for efficient replication of your proven setups across accounts.",
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
