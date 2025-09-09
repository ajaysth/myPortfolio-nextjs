import { serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    
    <div id='services' className='w-full px-[12%] py-25 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg'>What I Do</h4>
        <h2 className='text-center text-5xl '>My Skills</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>I am fullstack developer from Bhaktapur.</p>

        <div className=' grid-cols-auto gap-6 my-10'>
            {serviceData.map(({icon, title, description},index)=>(
                <div className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer lightHover hover:-translate-y-1 duration-300' key={index}>

                    <Image src={icon} alt='' className='w-10' />
                    <h3 className='text-lg my-4 text-gray-800'>{title}</h3>
                    <p className='text-sm text-gray-900 leading-5'>{description}</p>

                </div>
            ))}

        </div>
    </div>
  )
}

export default Services