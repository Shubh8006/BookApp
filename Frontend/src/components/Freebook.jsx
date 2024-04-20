import React, {useState, useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from "axios";

function Freebook() { 
  const [book, setBook]= useState([])
  useEffect(() =>{
   const getBook =  async ()=>{
    try {
       const res = await axios.get("/book")

       const data = res.data.filter((data) => data.Category === 'Free')
       console.log(data);
       setBook(data);
    } catch (error) {
      console.log("error:" , error);
    }
   }
   getBook();
  }, [])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
 <>
 <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
   <div>
   <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
    <p>
    Free Book Promotions must be scheduled at least one day before your desired start date. The earliest possible date to begin your Free Book Promotion is the second day of your KDP Select enrollment period. The scheduled start and end dates are usually midnight Pacific time.
    </p>
   </div>

 <div>
 <Slider {...settings}>
      {book.map((item) =>(
        <Cards item ={item} key ={item.Id}/>
      ))}
      </Slider>

 </div>
 </div>
 </>
  )
}

export default Freebook

