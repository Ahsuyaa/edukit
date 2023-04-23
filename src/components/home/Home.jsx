import React from 'react'
import Logo from "../../images/logo.png"
import { Carousel } from 'flowbite-react'
import Head from '../Header/Head'

const Home = () => {
 

  return (
  <>
  <Head/>
  <div className="w-auto h-[300px]  sm:h-[400px]  md:h-[450px] 2xl:h-[600px]">
  <Carousel>
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
      alt="..."
    />
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
      alt="..."
    />
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
      alt="..."
    />
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
      alt="..."
    />
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
      alt="..."
    />
  </Carousel>
</div>

  </>
  )
}

export default Home
