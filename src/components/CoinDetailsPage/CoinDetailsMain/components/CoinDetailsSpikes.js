

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import SpikesTrending from '../../CoinDetailsMain/components/SpikesTrending';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rArrow from "../../../../assets/next-arrow.png";
import lArrow from "../../../../assets/prev-arrow.png";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <div className=''>
        <img className='h-5' src={lArrow} alt="logo" />
      </div>
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img className='h-5' src={rArrow} alt="logo" />
    </div>
  );
};

const CoinDetailsSpikes = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow : <PreviousBtn/>,
        nextArrow : <NextBtn/>,
        responsive: [
          {
            breakpoint: 800, // for screens between 768px and 1024px wide
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 500, // for screens between 768px and 1024px wide
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
    };

    const data = useSelector(store=>store.app.spikesArray);

    const [spikesArr, setSpikesArr] = useState(null);


    useEffect(()=>{
        setSpikesArr(data);
    }, [data])


    if(spikesArr === null)
    {
        return <h1>loading...</h1>
    }

  return (
    <div className='bg-white p-7 flex flex-col gap-10 rounded-lg'>

        <h1 className='text-3xl font-semibold'>Trending Coins</h1>

        <div>

            <div>
                <Slider {...settings}>

                    {spikesArr.map((data)=>{
                        return <SpikesTrending key={data?.item?.id + "-" + data?.item?.coin_id} info={data?.item}/>
                    }) }

                </Slider>

            </div>
        </div>

        <div>

            <div>
                <Slider {...settings}>

                    {[...spikesArr].reverse().map((data)=>{
                        return <SpikesTrending key={data?.item?.id + "-" + data?.item?.coin_id} info={data?.item}/>
                    }) }

                </Slider>

            </div>
        </div>

    </div>
  )
}

export default CoinDetailsSpikes