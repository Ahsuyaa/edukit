import { Button } from 'flowbite-react'
import React from 'react'
import seo from "../../images/seo.png"
const LearnMore = () => {
  return (
 <>
 <div className='md:flex'>
    <div className='md:w-[60%] m-10'>
    <div><img className='h-60 w-full' src={seo} alt="image"/></div>
        <div>
            <h1 className='text-2xl md:text-4xl font-semibold my-2 '>Lorem ipsum dolor sit amet consectetur </h1>
            <p className='md:text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, nesciunt at voluptas aliquid eveniet nemo tenetur! Molestias nesciunt, alias, rerum modi sed assumenda delectus ipsum deserunt eveniet saepe et dolore minus dolorum repellat tempore quia ex mollitia. Error eveniet quia laboriosam magnam obcaecati sint voluptate sequi? Optio ducimus fuga numquam!</p>
        </div>
    </div>
    <div className='md:w-[30%] flex-grow mx-5'  >
    <div className="mt-10 shadow-xl rounded ">
        <h1 className='text-xl m-2'>Send a Quick Enquiry</h1>
          <div className="p-4 ">
            <label>
              Name <span className="text-red-600 ">*</span>
            </label>
            <input
              className="w-full bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs"
              type="text"
              placeholder=" Your Name"
            />
          </div>
          <div className="p-4 ">
            <label>Email</label>
            <input
              className="w-full bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs"
              type="text"
              placeholder="Your Email"
            />
          </div>
          <div className="p-4 ">
            <label>Phone Number</label>
            <input
              className="w-full bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs"
              type="number"
              placeholder="Your Number"
            />
          </div>
          <div className="p-4 ">
            <label>Subject</label>
            <input
              className="w-full bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs"
              type="text"
              placeholder=" Your Name"
            />
          </div>
          <div className="p-4 ">
            <label>Messages</label>
            <textarea
              className="w-full bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs h-32"
              type="text"
              placeholder="leave your message"
            />
          </div>
          <div className="flex justify-center mb-10">
            <Button className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br">
              {" "}
              Submit
            </Button>
          </div>
        </div>

        
    </div>
 </div>
 
 </>
  )
}

export default LearnMore