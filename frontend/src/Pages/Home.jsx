import React from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import Services from "./Services";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import ChatWidgetForm from "./../Components/ChatWidgetForm";
const Home = () => {
  return (
    <>
      <div id="Home">
        <Navbar />
        <Card />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <ChatWidgetForm></ChatWidgetForm>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
