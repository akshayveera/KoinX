
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rArrow from "../assets/next-arrow.png";
import lArrow from "../assets/prev-arrow.png";

const PreviousBtn = (props) => {
  // console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <div className=''>
        <img className='h-5' src={lArrow} alt="image" />
      </div>
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img className='h-5' src={rArrow} alt="image" />
    </div>
  );
};


const CoinDetailsSentiment = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow : <PreviousBtn/>,
    nextArrow : <NextBtn/>,
    responsive: [
      {
        breakpoint: 768, // for screens between 768px and 1024px wide
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=' bg-white rounded-lg p-7 flex flex-col gap-5'>

        <h1 className='text-3xl font-semibold mb-5'>Sentiment</h1>

        <div className='flex items-center gap-2'>
          <h3 className='text-xl text-gray-500 font-semibold'>Key Events</h3>
          <p className='w-5 h-5 text-white bg-gray-500 font-semibold rounded-full flex items-center justify-center text-sm'>i</p>

        </div>

        <div className='mb-5'>

          <Slider {...settings}>

              <div className='flex flex-col gap-2 bg-blue-100 p-5 rounded-lg'>
                <h1 className='font-semibold'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, deserunt!
                </h1>
                <p className='text-gray-600'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa dolorum molestiae dolorem necessitatibus iusto aliquam consequuntur voluptatum! Ratione nam
                </p>
              </div>

              <div className='flex flex-col gap-2 bg-green-100 p-5 rounded-lg'>
                <h1 className='font-semibold'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, deserunt!
                </h1>
                <p className='text-gray-600'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa dolorum molestiae dolorem necessitatibus iusto aliquam consequuntur voluptatum! Ratione nam
                </p>
              </div>

              <div className='flex flex-col gap-2 bg-red-100 p-5 rounded-lg'>
                <h1 className='font-semibold'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, deserunt!
                </h1>
                <p className='text-gray-600'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa dolorum molestiae dolorem necessitatibus iusto aliquam consequuntur voluptatum! Ratione nam
                </p>
              </div>

              <div className='flex flex-col gap-2 bg-purple-100 p-5 rounded-lg'>
                <h1 className='font-semibold'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, deserunt!
                </h1>
                <p className='text-gray-600'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa dolorum molestiae dolorem necessitatibus iusto aliquam consequuntur voluptatum! Ratione nam
                </p>
              </div>

          </Slider>

        </div>

        <div className='flex items-center gap-2'>
          <h3 className='text-xl text-gray-500 font-semibold'>Analyst Estimates</h3>
          <p className='w-5 h-5 text-white bg-gray-500 font-semibold rounded-full flex items-center justify-center text-sm'>i</p>

        </div>

        <div className='flex sm:gap-14 gap-5 items-center'>

          <div className='flex items-center justify-center sm:w-36 sm:h-36 sm:text-5xl w-28 h-28 text-3xl bg-green-50 rounded-full text-green-600 '>
              76%
          </div>

          <div className='w-[60%] flex flex-col gap-2'>

              <div className='flex gap-5 items-center '>
                <p className='text-lg font-semibold text-gray-500 w-10'>Buy</p>
                <div className='h-2.5 w-[76%] bg-green-500 rounded'></div>
                <p className='text-lg font-semibold text-gray-500'>76%</p>
              </div>

              <div className='flex gap-5 items-center '>
                <p className='text-lg font-semibold text-gray-500 w-10'>Hold</p>
                <div className='h-2.5 w-[8%] bg-gray-400 rounded'></div>
                <p className='text-lg font-semibold text-gray-500'>8%</p>
              </div>

              <div className='flex gap-5 items-center '>
                <p className='text-lg font-semibold text-gray-500 w-10'>Sell</p>
                <div className='h-2.5 w-[16%] bg-red-500 rounded'></div>
                <p className='text-lg font-semibold text-gray-500'>16%</p>
              </div>

          </div>


        </div>







    </div>
  )
}

export default CoinDetailsSentiment