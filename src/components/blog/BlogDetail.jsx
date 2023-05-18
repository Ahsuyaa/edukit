import React, { useEffect, useState } from 'react'
import seo from "../../images/seo.png"
import { useParams } from 'react-router-dom';
const BlogDetail = () => {
  const [lists, setLists] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    fetch( "https://pdeng.valleyhomecareservice.com/api/blog/" + slug)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setLists(resp.data.blog);
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err.message.vacancy);
      });
  }, []);
  return (
    <>
    <div className='md:mx-40 max-w-4xl'>
        <div><img className='h-60 w-full mt-5' src={seo} alt="image"/></div>
        <div>
            <h1 className='text-2xl md:text-4xl font-semibold my-2 '>{lists?.title} </h1>
            <p className='md:text-xl'dangerouslySetInnerHTML={{ __html: lists.description}}></p>
        </div>
         
    </div>
    </>
  )
}

export default BlogDetail