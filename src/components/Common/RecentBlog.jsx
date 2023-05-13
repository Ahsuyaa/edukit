import { Card } from 'flowbite-react'
import React from 'react'

const RecentBlog = (props) => {

  return (
   <>
     <div className='hidden md:grid grid-cols-2 gap-0'>
      <div>
        <img className='w-full h-24'   src={props.imgsrc}/> 
      </div>
      <div >
      <h5 className="text-xs font-bold tracking-tight text-gray-900 dark:text-white p-2">
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