import React, { useEffect, useState } from "react";
import cd from "../../images/careerDetail.png";
import careerDetail from "../../data/careerDetail";
import { Button } from "flowbite-react";
import { NavLink, useParams } from "react-router-dom";
import ApplyForm from "./ApplyForm";
const CareerDetail = () => {
    const [showMyModal,setShowModal]=useState(false);
    const handleOnClose = ()=>setShowModal(false);
    let API = "https://pdeng.valleyhomecareservice.com/api/vacancies";
    const [lists, setLists] = useState([]);
  
    const { slug } = useParams();

    useEffect(() => {
      fetch( "https://pdeng.valleyhomecareservice.com/api/vacancy/" + slug)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          setLists(resp.data.vacancy);
          console.log(resp.data);
        })
        .catch((err) => {
          console.log(err.message.vacancy);
        });
    }, []);
    const level1 =()=>
          {
            if(lists?.job_level=="1")
            {
             return <p>senior</p>
            }
            else if(lists?.job_level==="2")
            {
             return <p>mid level</p>
            }
            else
            {
             return <p>internship</p>
            }
          }
          const type1 =()=>
          {
            if(lists?.job_type=="1")
            {
             return <p>Full  Time</p>
            }
            
            else
            {
             return <p>Half Time</p>
            }
          }
          const salary1=()=>
          {
            if(lists?.offered_salary=="1")
            {
             return <p>Negotiable</p>
            }
            
            else
            {
             return <p>fixed</p>
            }
          }
          const dateString = lists?.updated_at;
          const dateObj = new Date(dateString);
          const formattedDate = dateObj.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          });
  return (
    <>
    
              <div className="h-56 bg-[#050a30] ">

                <div className="flex  p-10 ">
                  <NavLink to={"/"}>
                  <h1 className=" text-gray-400">Home /</h1>
                  </NavLink>
                  <NavLink to="/career">
                  <h1 className=" text-gray-400"> Career /</h1>
                  </NavLink>
                  <h1 className="text-white"> Job Detail</h1>
                </div>
                <div className="text-2xl md:text-4xl   text-center text-white ">
                  {lists?.title}
                </div> 
                <div className="flex justify-end  ">
                   
                  <Button className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br mr-10"onClick={()=>setShowModal(true)}>
                    Apply Now
                  </Button>
                  <ApplyForm onClose={handleOnClose} visible={showMyModal}/>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 m-10 ">
                <div className="shadow-md m-10  text-center ">
                  <label className=" font-bold">Job type:</label> <br />{" "}
                  <h1 className="text-gray-600">{type1()}</h1>
                </div>
                <div className="shadow-md m-10  text-center ">
                  <label className=" font-bold">Job Level:</label> <br />{" "}
                  <h1 className="text-gray-600">{level1()}</h1>
                </div>
                <div className="shadow-md m-10  text-center ">
                  <label className=" font-bold">Company:</label> <br />{" "}
                  <h1 className="text-gray-600">{lists?.company}</h1>
                </div>
                <div className="shadow-md m-10  text-center ">
                  <label className=" font-bold">Offered Salary:</label> <br />{" "}
                  <h1 className="text-gray-600">{salary1()}</h1>
                </div>
                <div className="shadow-md m-10  text-center ">
                  <label className=" font-bold">Posted:</label> <br />{" "}
                  <h1 className="text-gray-600">{formattedDate}</h1>
                </div>
                <div className="shadow-md m-10  text-center ">
                  <label className=" font-bold"> Deadline:</label> <br />{" "}
                  <h1 className="text-gray-600">{lists?.deadline_apply}</h1>
                </div>
              </div>
              <div className=" grid  lg:grid-cols-2 mx-20 md:mx-40">
                <div className="mb-5 ">
                <label className="text-3xl">
                  Job specification
                  <br />
                </label>
                <h1 className="my-2  text-xl">Education Level:{lists?.education}</h1>
                <h1 className="mb-2 text-xl">Experience required:{lists?.experience}</h1>
                </div>
                <div>
                <label className="text-3xl  ">
                  Job description
                  <br />
                </label>
                <ul className=" text-xl">
                  
                    <li className="text-md justify-between m-2" dangerouslySetInnerHTML={{ __html: lists.description}}>
                    </li>
                  
                  
                </ul>
               
                </div>
              </div>
              <div className="flex justify-center mt-5  ">
                   
                  <Button className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br mr-10"onClick={()=>setShowModal(true)}>
                    Apply Now
                  </Button>
                  <ApplyForm onClose={handleOnClose} visible={showMyModal}/>
                </div>
           

      
    </>
  );
};

export default CareerDetail;
