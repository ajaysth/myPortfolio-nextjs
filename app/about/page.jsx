"use client"
import { assets, toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { infoList } from '@/assets/assets'
import { motion } from "framer-motion"

import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
    <div
    className='w-full px-[12%] py-35'>
        <h4
        className='text-center mb-2 text-lg'>Introduction</h4>
        <h2
        className='text-center text-5xl '>About me</h2>

        <div className="flex flex-col lg:flex-row items-start gap-20 my-20">
  {/* User Image */}
  <div className="w-64 sm:w-80 rounded-3xl flex-shrink-0">
    <Image
      src={assets.user_image}
      alt="user"
      className="w-full rounded-3xl object-cover"
    />
  </div>

  {/* Right Content */}
  <div className="flex-1 flex flex-col gap-8">
    <p className="max-w-2xl text-gray-700">
      I am an intern in fullstack development. Enthusiastic, energetic, and eager to learn and grow my skills.
    </p>

    {/* Education Section */}
    <div>
      <h1 className="mb-4 text-3xl font-bold">Education</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {infoList.map(({ icon, title, description }, index) => (
          <li
            key={index}
            className="border border-gray-300 rounded-xl p-6 cursor-pointer hover:-translate-y-2 hover:shadow-lg transition-transform duration-300"
          >
            <Image src={icon} alt={title} className="w-7 mt-2" />
            <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </li>
        ))}
      </ul>
    </div>

    {/* Tools Section */}
    <div>
      <h4 className="mb-2 text-gray-700 font-semibold">Tools I Use</h4>
      <ul className="flex flex-wrap items-center gap-3 sm:gap-5">
        {toolsData.map((tool, index) => (
          <li
            key={index}
            className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 rounded-lg cursor-pointer hover:-translate-y-1 hover:shadow-md transition-transform duration-300"
          >
            <Image src={tool} alt="tool" className="w-5 sm:w-7" />
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>
    </div>

    </>
  )
}

export default About