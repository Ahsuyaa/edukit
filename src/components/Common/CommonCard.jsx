import React from 'react'
import { Card } from 'flowbite-react'
import Logo from '../../images/logo.png'
const CommonCard = (props) => {

  return (
    <>
   <div className="grid grid-cols-3 gap-4 mt-[500px] h-96">
    <div className=" p-4"><div className="max-w-sm">


    <Card className='h-60' imgSrc={props.imgSrc}>
    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      {props.title}
    </h5>
 
  </Card>
</div>
</div>
      {/* <div className=" p-4">
      <div className="max-w-sm">
  <Card className='h-60' imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      Noteworthy technology acquisitions 2021
    </h5>
 
  </Card>
</div>
      </div> */}
      {/* <div className=" p-4">
      <div className="grid grid-rows-3 gap-4 mt-5">

<div className="max-w-sm">
   <Card className='h-24'
    horizontal={true}
    imgSrc={Logo}
    >
     <h5 className="text-xs font-bold tracking-tight text-gray-900 dark:text-white">
     Noteworthy technology acquisitions 2021
    </h5>
   
    </Card>
</div>




    </div>
      </div> */}
    </div>
    </>
  )
}

export default CommonCard