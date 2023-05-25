import React from "react";

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
