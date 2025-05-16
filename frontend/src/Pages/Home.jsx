import React from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import Services from "./Services";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import ChatWidgetForm from "./../Components/ChatWidgetForm";
import Values from "../Components/Values";
import ThereIsAReason from "../Components/There _is_a_reason";
import Portfolio2 from "./Portfolio2";
import RatingSection from "../Components/RatingSection";
const Home = () => {
  return (
    <>
      <div id="Home">
        <Navbar />
        <Card />
        <About />
        <Services />
        <Portfolio2 />
        <Values />
        <ThereIsAReason />
        <RatingSection />
        <Contact />
        <ChatWidgetForm></ChatWidgetForm>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
