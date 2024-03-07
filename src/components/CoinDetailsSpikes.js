

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import SpikesTrending from './SpikesTrending';
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
        <img className='h-5' src={lArrow} alt="" />
      </div>
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img className='h-5' src={rArrow} alt="" />
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

    const [spikesArr, setSpikesArr] = useState([
        {
            "item": {
              "id": "opulous",
              "coin_id": 16548,
              "name": "Opulous",
              "symbol": "OPUL",
              "market_cap_rank": 713,
              "thumb": "https://assets.coingecko.com/coins/images/16548/standard/opulous.PNG?1696516110",
              "small": "https://assets.coingecko.com/coins/images/16548/small/opulous.PNG?1696516110",
              "large": "https://assets.coingecko.com/coins/images/16548/large/opulous.PNG?1696516110",
              "slug": "opulous",
              "price_btc": 0.0000018778935468713931,
              "score": 0,
              "data": {
                "price": "$0.1258",
                "price_btc": "0.00000187789354687139",
                "price_change_percentage_24h": {
                  "aed": 12.144256316849809,
                  "ars": 12.208585102693917,
                  "aud": 10.83050234597916,
                  "bch": 8.44584988545601,
                  "bdt": 12.045180609606073,
                  "bhd": 12.146354873582009,
                  "bmd": 12.144866984650664,
                  "bnb": 6.528387302739803,
                  "brl": 12.090363788999674,
                  "btc": 10.898911094361075,
                  "cad": 11.431100631799145,
                  "chf": 11.48355706904791,
                  "clp": 13.042704745501583,
                  "cny": 12.084112566442283,
                  "czk": 12.145997700426385,
                  "dkk": 12.169246118476048,
                  "dot": 7.099501304277635,
                  "eos": 3.5889590551234143,
                  "eth": 13.034341931702773,
                  "eur": 12.161099522397828,
                  "gbp": 11.829670946270188,
                  "gel": 12.144866984650658,
                  "hkd": 12.09748543882468,
                  "huf": 12.836323184104057,
                  "idr": 11.719653543642652,
                  "ils": 12.018393094312199,
                  "inr": 12.020804101750914,
                  "jpy": 10.786391894449762,
                  "krw": 11.529072495433716,
                  "kwd": 12.019474227016465,
                  "lkr": 11.81514288171787,
                  "ltc": 9.395257482215815,
                  "mmk": 12.116572660922582,
                  "mxn": 12.174694745406123,
                  "myr": 11.516836770133853,
                  "ngn": 13.308720336024793,
                  "nok": 11.225313762072595,
                  "nzd": 11.09064034685162,
                  "php": 12.159946012493661,
                  "pkr": 12.076746198183482,
                  "pln": 12.16913900801028,
                  "rub": 12.553038348491555,
                  "sar": 12.14435866236341,
                  "sek": 11.472483022387108,
                  "sgd": 11.73332066078175,
                  "thb": 11.755857109686186,
                  "try": 12.546928349572905,
                  "twd": 11.944052945045678,
                  "uah": 11.694080806177091,
                  "usd": 12.144866984650664,
                  "vef": 12.144866984650573,
                  "vnd": 12.172526330187642,
                  "xag": 9.916175220616342,
                  "xau": 10.886939133036652,
                  "xdr": 12.045098468947687,
                  "xlm": 6.765654102890747,
                  "xrp": 8.652954623041238,
                  "yfi": 10.240296349881408,
                  "zar": 11.659836171984828,
                  "bits": 10.898911094361074,
                  "link": 9.763484632051773,
                  "sats": 10.898911094361077
                },
                "market_cap": "$51,014,202",
                "market_cap_btc": "763.139830080266",
                "total_volume": "$2,136,244",
                "total_volume_btc": "31.9007735571881",
                "sparkline": "https://www.coingecko.com/coins/16548/sparkline.svg",
                "content": null
              }
            }
          },
          {
            "item": {
              "id": "gt-protocol",
              "coin_id": 23118,
              "name": "GT-Protocol",
              "symbol": "GTAI",
              "market_cap_rank": 796,
              "thumb": "https://assets.coingecko.com/coins/images/23118/standard/A1P7aR4m_400x400.jpg?1706178875",
              "small": "https://assets.coingecko.com/coins/images/23118/small/A1P7aR4m_400x400.jpg?1706178875",
              "large": "https://assets.coingecko.com/coins/images/23118/large/A1P7aR4m_400x400.jpg?1706178875",
              "slug": "gt-protocol",
              "price_btc": 0.00007367322265604255,
              "score": 1,
              "data": {
                "price": "$4.93",
                "price_btc": "0.0000736732226560426",
                "price_change_percentage_24h": {
                  "aed": 33.38176501438338,
                  "ars": 33.4582761731259,
                  "aud": 31.819216657610777,
                  "bch": 28.98296659383751,
                  "bdt": 33.26392667708255,
                  "bhd": 33.384260988855196,
                  "bmd": 33.38249132843452,
                  "bnb": 26.702381283171917,
                  "brl": 33.31766649768871,
                  "btc": 31.90058042871487,
                  "cad": 32.53355426221306,
                  "chf": 32.5959447262136,
                  "clp": 34.45035863766616,
                  "cny": 33.31023143925964,
                  "czk": 33.38383617542756,
                  "dkk": 33.4114873020666,
                  "dot": 27.381650967161047,
                  "eos": 23.20629382691846,
                  "eth": 34.44041210182379,
                  "eur": 33.40179793054227,
                  "gbp": 33.00760450582323,
                  "gel": 33.38249132843452,
                  "hkd": 33.32613682202517,
                  "huf": 34.20489321812785,
                  "idr": 32.87675237102199,
                  "ils": 33.23206623065763,
                  "inr": 33.23493382671827,
                  "jpy": 31.766752714527037,
                  "krw": 32.6500797136495,
                  "kwd": 33.23335210470099,
                  "lkr": 32.99032516441178,
                  "ltc": 30.112169864097726,
                  "mmk": 33.34883871917313,
                  "mxn": 33.41796777196052,
                  "myr": 32.63552682712349,
                  "ngn": 34.76675138171433,
                  "nok": 32.28879615508931,
                  "nzd": 32.12861873350176,
                  "php": 33.400425972744046,
                  "pkr": 33.30147005252104,
                  "pln": 33.41135990737476,
                  "rub": 33.86796083641899,
                  "sar": 33.381886741752176,
                  "sek": 32.582773513188705,
                  "sgd": 32.893007721643976,
                  "thb": 32.91981204877364,
                  "try": 33.860693746094725,
                  "twd": 33.14364778956881,
                  "uah": 32.84633675303644,
                  "usd": 33.38249132843452,
                  "vef": 33.382491328434405,
                  "vnd": 33.415388709433145,
                  "xag": 30.731737282502596,
                  "xau": 31.88634125691437,
                  "xdr": 33.26382898089771,
                  "xlm": 26.984580885923155,
                  "xrp": 29.22929214228031,
                  "yfi": 31.117239400218576,
                  "zar": 32.805606983177086,
                  "bits": 31.90058042871487,
                  "link": 30.55013065481865,
                  "sats": 31.900580428714875
                },
                "market_cap": "$42,640,838",
                "market_cap_btc": "637.879663085417",
                "total_volume": "$35,330,930",
                "total_volume_btc": "527.600857875922",
                "sparkline": "https://www.coingecko.com/coins/23118/sparkline.svg",
                "content": null
              }
            }
          },
          {
            "item": {
              "id": "opsec",
              "coin_id": 34284,
              "name": "OpSec",
              "symbol": "OPSEC",
              "market_cap_rank": 380,
              "thumb": "https://assets.coingecko.com/coins/images/34284/standard/IMG_8108.jpeg?1704453267",
              "small": "https://assets.coingecko.com/coins/images/34284/small/IMG_8108.jpeg?1704453267",
              "large": "https://assets.coingecko.com/coins/images/34284/large/IMG_8108.jpeg?1704453267",
              "slug": "opsec",
              "price_btc": 0.000026462521307419506,
              "score": 2,
              "data": {
                "price": "$1.77",
                "price_btc": "0.0000264625213074195",
                "price_change_percentage_24h": {
                  "aed": -22.128533357974796,
                  "ars": -22.083864312358862,
                  "aud": -23.040786485138373,
                  "bch": -24.696657152359975,
                  "bdt": -22.197330199516703,
                  "bhd": -22.127076148341985,
                  "bmd": -22.128109318448868,
                  "bnb": -26.028117437989266,
                  "brl": -22.165955606091348,
                  "btc": -22.993284368288155,
                  "cad": -22.62373909532515,
                  "chf": -22.58731404925024,
                  "clp": -21.504662826044353,
                  "cny": -22.17029637114555,
                  "czk": -22.1273241645881,
                  "dkk": -22.111180775081635,
                  "dot": -25.631543539510748,
                  "eos": -28.069216966833295,
                  "eth": -21.510469851719634,
                  "eur": -22.116837662073326,
                  "gbp": -22.346977217658033,
                  "gel": -22.128109318448868,
                  "hkd": -22.161010428023406,
                  "huf": -21.64797141269625,
                  "idr": -22.423371825639972,
                  "ils": -22.21593109065585,
                  "inr": -22.214256919445432,
                  "jpy": -23.071416190730545,
                  "krw": -22.555708747972187,
                  "kwd": -22.215180366614494,
                  "lkr": -22.357065310720635,
                  "ltc": -24.03740125795303,
                  "mmk": -22.14775651714377,
                  "mxn": -22.107397321660432,
                  "myr": -22.564205071420396,
                  "ngn": -21.31994516983948,
                  "nok": -22.76663473606131,
                  "nzd": -22.860150148311376,
                  "php": -22.117638643871004,
                  "pkr": -22.17541147840988,
                  "pln": -22.111255151151667,
                  "rub": -21.844680600942713,
                  "sar": -22.12846229062359,
                  "sek": -22.595003718640918,
                  "sgd": -22.41388156290746,
                  "thb": -22.39823255522102,
                  "try": -21.84892330219734,
                  "twd": -22.26755189268261,
                  "uah": -22.44112919135712,
                  "usd": -22.128109318448868,
                  "vef": -22.12810931844892,
                  "vnd": -22.108903040088638,
                  "xag": -23.67568297097732,
                  "xau": -23.00159753757147,
                  "xdr": -22.197387236887575,
                  "xlm": -25.863362556018217,
                  "xrp": -24.552846401868155,
                  "yfi": -23.4506176084301,
                  "zar": -22.464908205786855,
                  "bits": -22.993284368288162,
                  "link": -23.781709266611788,
                  "sats": -22.99328436828815
                },
                "market_cap": "$155,010,862",
                "market_cap_btc": "2318.86331951636",
                "total_volume": "$31,222,282",
                "total_volume_btc": "466.245950323369",
                "sparkline": "https://www.coingecko.com/coins/34284/sparkline.svg",
                "content": null
              }
            }
          }
    ]);


    useEffect(()=>{
        // setSpikesArr(data);
    })

    console.log("SpikesArr : ", spikesArr);

    if(spikesArr === null)
    {
        return <h1>loading...</h1>
    }

  return (
    <div className='bg-white p-7 flex flex-col gap-10 rounded-lg'>

        <h1 className='text-4xl font-semibold'>Trending Coins</h1>

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

                    {spikesArr.reverse().map((data)=>{
                        return <SpikesTrending key={data?.item?.id + "-" + data?.item?.coin_id} info={data?.item}/>
                    }) }

                </Slider>

            </div>
        </div>

    </div>
  )
}

export default CoinDetailsSpikes