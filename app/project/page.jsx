'use client'
import { assets, projectData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'


const Project = () => {
  return (
    <div 
    
 className='w-full px-[12%] py-35 scroll-mt-20'>
        <h4

        className='text-center mb-2 text-lg'>My portfolio</h4>
        <h2
        className='text-center text-5xl '>My Projects</h2>

        <p
         className='text-center max-w-2xl mx-auto mt-5 mb-12'>These are my projects based on my skills.</p>


        <div
         className='grid-cols-auto my-10 gap-5'>
            {projectData.map((project, index) => (
                <a 
                    key={index} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href={project.link}
                >
                    <div 
                    className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
                    style={{ backgroundImage: `url(${project.bgImage})` }}
                    >
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-300 group-hover:bottom-7">
                        <div>
                        <h2 className="font-semibold">{project.title}</h2>
                        <p className="text-sm text-gray-900">{project.description}</p>
                        </div>
                        <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-400 transition">
                        <Image src={assets.send_icon} alt="" className="w-5" />
                        </div>
                    </div>
                    </div>
                </a>
            ))}
        </div>

        {/* <motion.a
        initial={{x: 30, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        transition={{duration:0.6, delay: 0.7}}
        className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] rounded-full px-10 py-3 mx-auto lightHover duration-200 ' href="">
            Show More <Image src={assets.right_arrow_bold} alt='' className='w-4' />
        </motion.a> */}
    </div>
  )
}

export default Project