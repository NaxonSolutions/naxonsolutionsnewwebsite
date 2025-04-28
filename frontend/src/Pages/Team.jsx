import React from "react";
import img1 from "../assets/Team/1.JPG";
import img2 from "../assets/Team/2.JPG";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
const Team = () => {
  let team = [
    {
      name: "Hameed Khan",
      role: "CEO and Founder @ Naxon Solution",
      img: img2,
    },
    {
      name: "Touseef Khattak",
      role: "Project Manager and Co-Founder @ Naxon Solution",
      img: img1,
    },
  ];

  return (
    <>
      {" "}
      <Link to="/">
        <Navbar></Navbar>
      </Link>
      <div className="flex justify-around items-center h-[85vh] pt-20 pb-20 bg-white">
        {team.map((item, index) => (
          <div key={index} className="flex flex-col">
            <img
              src={item.img}
              className="w-52 h-64 rounded-2xl "
              alt={`${item.name}'s picture`}
            />
            <p className="text-2xl font-bold my-3">{item.name}</p>
            <p>{item.role}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Team;
