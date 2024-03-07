
import React from 'react'

const Team = () => {
  return (
    <div className='bg-white p-7 flex flex-col gap-5 rounded-lg '>

        <h1 className='text-3xl font-semibold'>Team</h1>

        <p className='text-lg font-semibold text-gray-700 pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quam dolore dicta quo est iure hic ipsam, iste, quae pariatur numquam dolor veniam fugit laborum sequi nemo rem soluta? Quam.</p>

        <div className='lg:flex-row flex flex-col bg-blue-50 py-3 lg:px-10 px-5 rounded-lg items-center justify-between'>
            <div className='flex flex-col items-center gap-2'>
                <img 
                src="https://wellfound.com/cdn-cgi/image/width=200,height=200,format=auto,fit=cover/https://photos.wellfound.com/users/14494429-original?1665600942" 
                alt="image of Punit Agarwal"
                className='h-32 w-32 object-fill rounded-lg' />
                <div className='flex flex-col items-center'>
                    <p className='font-semibold text-md'>Punit Agarwal</p>
                    <p className='text-gray-500 font-semibold'>CEO</p>
                </div>
            </div>
            
            <p className='lg:w-[80%]  w-full  lg:text-lg lg:text-left text-center text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis possimus aspernatur sed autem distinctio accusantium quisquam debitis saepe blanditiis, voluptatum nulla corrupti totam. Tenetur sapiente repudiandae soluta, minima sed numquam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, fugiat? Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
        <div className='lg:flex-row flex flex-col bg-blue-50 py-3 lg:px-10 px-5 rounded-lg items-center justify-between'>
            <div className='flex flex-col items-center gap-2'>
                <img 
                src="https://media.licdn.com/dms/image/C5103AQFhDH6GFC_TYA/profile-displayphoto-shrink_400_400/0/1516356425447?e=1715212800&v=beta&t=v1V19AphHzx5iVBvPV4h-dbdN9Lw6f1w7gxsIX3iVyc" 
                alt="image of Swadeep Pillarisetti"
                className='h-32 w-32 object-fill rounded-lg' />
                <div className='flex flex-col items-center'>
                    <p className='font-semibold text-md'>Swadeep Pillarisetti</p>
                    <p className='text-gray-500 font-semibold'>Board Member</p>
                </div>
            </div>
            
            <p className='lg:w-[80%]  w-full  lg:text-lg lg:text-left text-center text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis possimus aspernatur sed autem distinctio accusantium quisquam debitis saepe blanditiis, voluptatum nulla corrupti totam. Tenetur sapiente repudiandae soluta, minima sed numquam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, fugiat? Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
        <div className='lg:flex-row flex flex-col bg-blue-50 py-3 lg:px-10 px-5 rounded-lg items-center justify-between'>
            <div className='flex flex-col items-center gap-2'>
                <img 
                src="https://media.licdn.com/dms/image/D5603AQFCscRkoHJnmQ/profile-displayphoto-shrink_400_400/0/1674065879307?e=1715212800&v=beta&t=O247V-s7J9AcItRvRxieMg1xM3zzJzzvcz4Uy7D4yYc" 
                alt="image of Guna Shekar"
                className='h-32 w-32 object-fill rounded-lg' />
                <div className='flex flex-col items-center'>
                    <p className='font-semibold text-md'>Guna Shekar</p>
                    <p className='text-gray-500 font-semibold'>Founding Engineer</p>
                </div>
            </div>
            
            <p className='lg:w-[80%]  w-full  lg:text-lg lg:text-left text-center text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis possimus aspernatur sed autem distinctio accusantium quisquam debitis saepe blanditiis, voluptatum nulla corrupti totam. Tenetur sapiente repudiandae soluta, minima sed numquam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, fugiat? Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>

        

    </div>
  )
}

export default Team