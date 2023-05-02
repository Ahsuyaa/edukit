import React from 'react'
import Logo from "../../images/logo.png"
import { Carousel } from 'flowbite-react'
import Home1 from '../../images/home1.png'
import Home2 from '../../images/home2.png'
import Home3 from '../../images/home3.png'
import Courses from './Courses';
import About from './About';
import Blog from './Blog';
import Testimonials from './Testimonials';
import Team from './Team'

const Home = () => {
  return (
  <>
 
  <div className="w-100 h-[300px]  sm:h-[400px]  md:h-[600px] 2xl:h-[800px] homeC">
  <Carousel>
    <img 
      src={Home1}
      alt="..."
    />
    <img
      src={Home2}
      alt="..."
    />
    <img
      src={Home3}
      alt="..."
    />
   
   
  </Carousel>
</div>
<Courses/>

< Blog/>
<About/>
<Testimonials/>
< Team/>
  </>
  )
}

export default Home
