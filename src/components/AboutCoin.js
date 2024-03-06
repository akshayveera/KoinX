

import React from 'react'
import arrowRight from "../assets/right-arrow.png"

const AboutCoin = () => {
  return (
    <div className='bg-white p-7 rounded-lg flex flex-col gap-5'>
        <h1 className='text-3xl font-semibold'>About Cryptocurrency</h1>

        <div className='flex flex-col gap-3 py-3 border-b-2'>
            <h2 className='text-2xl font-semibold'>What is Cryptocurrency?</h2>
            <p className='text-lg font-semibold text-gray-700'>A cryptocurrency, crypto-currency, or crypto is a digital currency designed to work as a medium of exchange through a computer network that is not reliant on any central authority, such as a government or bank, to uphold or maintain it</p>
        </div>

        <div className='flex flex-col gap-3 py-3 border-b-2'>

            <h2 className='text-2xl font-semibold'>Lorem ipsum dolor sit amet.</h2>

            <p className='text-lg font-semibold text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquam neque natus ut, quasi quia eaque. Tempore temporibus molestias, impedit doloribus iste aliquam consequatur corrupti fugiat quam veniam, deleniti porro enim autem sed qui placeat et similique accusantium assumenda quaerat error sapiente neque magni vitae! </p>

            <p className='text-lg font-semibold text-gray-700'>Minus minima veniam beatae modi placeat iusto cum culpa, quibusdam nobis eos iste excepturi hic corporis laboriosam assumenda magnam cupiditate quod commodi incidunt autem quaerat nulla ex. Minima fugiat eaque, asperiores eligendi reiciendis laboriosam, sequi saepe tempore repellendus temporibus velit sed iusto doloribus sapiente nostrum dicta atque porro  </p>

            <p className='text-lg font-semibold text-gray-700'>Nemo neque quo rerum omnis esse laboriosam, accusamus explicabo velit quaerat deleniti doloremque, repellat sequi optio, unde et culpa. Aperiam voluptatem nam consectetur hic reprehenderit! Repellendus saepe officiis enim. Quaerat, asperiores!</p>
        </div>

        <div className='flex flex-col gap-3 py-3 pb-5 border-b-2'>
            <h1 className='text-2xl font-semibold'>Already Holding Crypto?</h1>

            <div className='flex justify-between'>
                <div className='w-[47%] bg-gradient-to-br from-green-400 to-blue-400 flex p-5 rounded-lg gap-5'>
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBuXo7TQ9lQTfUbMk6ZzC49GmydUOmlBReZ4K2RlQXmun2Hr1dLmV8llLUzWsYvGEpnN4&usqp=CAU" 
                        alt="image of crypto"
                        className='w-[40%] h-[130px] rounded-lg' 
                    />

                    <div className='flex flex-col w-[50%] gap-1 justify-evenly'>
                        <h1 className='text-2xl font-semibold text-white'>Calculate your Profits</h1>
                        <button className='flex items-center gap-2 font-semibold bg-white rounded-md py-1 px-5 self-start'>Check Now <img className='h-4' src={arrowRight} alt="" /></button>
                    </div>
                </div>

                <div className='w-[47%] bg-gradient-to-br from-orange-300 to-red-500 flex p-5 rounded-lg gap-5 '>
                    <img 
                        src="https://miro.medium.com/v2/da:true/resize:fill:224:224/0*r5JCF5DGDh_GP2xD" 
                        alt="image of crypto"
                        className='w-[40%] h-[130px] rounded-lg' 
                    />

                    <div className='flex flex-col w-[50%] gap-1 justify-evenly'>
                        <h1 className='text-2xl font-semibold text-white'>Calculate your Profits</h1>
                        <button className='flex items-center gap-2 font-semibold bg-white rounded-md py-1 px-5 self-start'>Check Now <img className='h-4' src={arrowRight} alt="" /></button>
                    </div>
                </div>
            </div>
        </div>

        <p className='text-lg font-semibold text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus cum minima voluptates facilis dolores magnam neque excepturi quidem esse quis, blanditiis maxime iste nulla tenetur, possimus numquam libero quos vel!</p>
    </div>
  )
}

export default AboutCoin