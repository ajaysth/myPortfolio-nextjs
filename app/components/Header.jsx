'use client'
import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className="w-11/12 max-w-5xl mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-1 py-15">
  {/* Left: Profile Image */}
  <motion.div
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    className="flex-shrink-0"
  >
    <Image
      src={assets.profile_img}
      alt="profile"
      className="rounded-full w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 object-cover"
    />
  </motion.div>

  {/* Right: Text & Buttons */}
  <div className="flex-1 flex flex-col items-center text-center gap-4">
    <motion.h3
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="flex items-center justify-center lg:justify-start gap-2 text-lg sm:text-xl md:text-2xl font-Ovo"
    >
      Hi! I am Ajay Shrestha
      <Image src={assets.hand_icon} alt="hand" className="w-5 sm:w-6" />
    </motion.h3>

    <motion.h1
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-snug"
    >
      Fullstack Developer
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className="max-w-xl  text-gray-700 sm:text-base md:text-lg"
    >
      I am a fullstack developer from Bhaktapur, Nepal, passionate about building modern and user-friendly web applications. Energetic and eager to learn, I strive to turn ideas into efficient, high-quality solutions.
    </motion.p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mt-6 w-full sm:w-auto justify-center lg:justify-center">
      <motion.a
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        href="/aj-resume.pdf"
        download
        className="w-full sm:w-auto px-6 sm:px-10 py-3 border border-gray-500 rounded-full flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
      >
        My Resume
        <Image src={assets.download_icon} alt="download" className="w-4 sm:w-5" />
      </motion.a>

      <motion.a
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        href="/contact"
        className="w-full sm:w-auto px-6 sm:px-10 py-3 border border-black rounded-full bg-black text-white flex items-center justify-center gap-2 hover:bg-gray-800 transition-all duration-300"
      >
        Contact Me
        <Image src={assets.right_arrow_white} alt="arrow" className="w-4 sm:w-5" />
      </motion.a>
    </div>
  </div>
</div>

  )
}

export default Header
