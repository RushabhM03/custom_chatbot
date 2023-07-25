//import React from 'react';
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import bot from "../assets/images/bot.svg";

const Home = () => {
  return (
    <div>
        <Hero image={bot} btn_text="Demo" title="DialogBot" mainheading="Your very own customizable AI chatbot" txt="Create your very own custom chatbot by training it according to your very own application and use it in your app. Click below to view demo" path="/demo"/>
        <Testimonials/>
    </div>
  )
}

export default Home;