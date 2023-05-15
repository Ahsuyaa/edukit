import React, { useEffect, useState } from 'react'
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
import EduKit from './EduKit'

const Home = () => {
  let API = "https://pdeng.valleyhomecareservice.com/api/slides";
  const [lists, setLists] = useState([]);
  

  useEffect(() => {
    const fetchSlider = async () => {
      try {
        const response = await fetch(API);

        const data = await response.json();
       
        setLists(data);
        console.log(data)
      } catch (error) {
        console.log("Error fetching slider:", error);
      }
    };
    fetchSlider();
    
  }, []);
  return (
  <>
    <div className="w-100 h-[200px]  sm:h-[400px]  md:h-[500px] 2xl:h-[800px] ">

  {/* <Carousel>
 {lists.image.map((val, ind) => {
    <img 
      src={`https://pdeng.valleyhomecareservice.com/storage/${val.image.url}`}
      alt="..."
    />

   
   
  })}
  </Carousel> */}
 </div>


 
<Courses/>

< Blog/>
<About/>
<Testimonials/>
<EduKit/>
< Team/>
  </>
  )
}

export default Home
