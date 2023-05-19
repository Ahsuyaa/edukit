import React from "react";
import Logo from "../../images/logo.png";

import Home1 from "../../images/home1.png";
import Home2 from "../../images/home2.png";
import Home3 from "../../images/home3.png";
import Courses from "./Courses";
import About from "./About";
import Blog from "./Blog";
import Testimonials from "./Testimonials";
import Team from "./Team";
import EduKit from "./EduKit";
import Sliders from "./Sliders";

const Home = () => {
 return (
  <>
      <Sliders/>
      <Courses />
      <Blog />
      <About />
      <Testimonials />
      <EduKit />
      <Team />
    </>
  );
};

export default Home;
