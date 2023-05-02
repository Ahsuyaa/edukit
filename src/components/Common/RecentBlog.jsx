import { Card } from 'flowbite-react'
import React from 'react'

const RecentBlog = (props) => {

  return (
   <>
     <div className=' hidden  md:inline-flex '>
      <div className=''>
        <img src={props.imgsrc}/> 
      </div>
      <div>
      <h5 className="text-xs font-bold tracking-tight text-gray-900 dark:text-white">
      {props.title}
    </h5>
      </div>
    </div>
{/* <div className="sm:w-[full] sm:px-20 ">
  <Card 
    horizontal={true}
    imgSrc={props.imgsrc}
  >
    <h5 className="text-xs font-bold tracking-tight text-gray-900 dark:text-white">
     {props.title}
    </h5>
  
  </Card>
</div> */}
   </>
  )
}

export default RecentBlog