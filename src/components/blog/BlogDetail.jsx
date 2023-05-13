import React from 'react'
import seo from "../../images/seo.png"
const BlogDetail = () => {
  return (
    <>
    <div className='md:mx-40 max-w-4xl'>
        <div><img className='h-60 w-full mt-5' src={seo} alt="image"/></div>
        <div>
            <h1 className='text-2xl md:text-4xl font-semibold my-2 '>Lorem ipsum dolor sit amet consectetur </h1>
            <p className='md:text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, nesciunt at voluptas aliquid eveniet nemo tenetur! Molestias nesciunt, alias, rerum modi sed assumenda delectus ipsum deserunt eveniet saepe et dolore minus dolorum repellat tempore quia ex mollitia. Error eveniet quia laboriosam magnam obcaecati sint voluptate sequi? Optio ducimus fuga numquam!</p>
        </div>
         
    </div>
    </>
  )
}

export default BlogDetail