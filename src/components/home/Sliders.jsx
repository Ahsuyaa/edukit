import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchData } from '../fetching/FetchData';
import BASE_URL from "../../API/Consts";
import { Carousel } from "flowbite-react";
const Sliders= () => {
  const API = `${BASE_URL}slides`;
  const [lists, setLists] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData(API);
      setLists(fetchedData);
      console.log(fetchedData);
    };
    getData();
  }, []);


  return (
  <>
  <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
  <Carousel>
  {lists ? (
    <div>
      {lists?.data.sliders.map((val, ind) => {
        return (
          <>
            <div key={ind}>
              <img className="w-full "
                src={`https://pdeng.valleyhomecareservice.com/storage/${val}`}
              />
            </div>
            
          </>
        );
      })}
    </div>
  ) : (
    <p>Loading data...</p>
  )}
  </Carousel>
</div>
  </>
  );
};

export default Sliders;
