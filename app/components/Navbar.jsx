'use client'
import { assets } from '@/assets/assets'
import React, {useEffect, useRef, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';


const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(scrollY > 50){
        setIsScroll(true)
      }else{
        setIsScroll(false)

      }
    })
  },[])


  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
      <Image src={assets.header_bg_color} alt=''  className='w-full' />
    </div>
    
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-70 backdrop-blur-lg shadow-sm": ""}`}>
        <Link href="/">
            <Image src={assets.my_logo} alt='' className='w-28 cursor-pointer mr-14' />
        </Link>
        <ul className="hidden md:flex text-lg items-center gap-6 lg:gap-8 rounded-full px-10 py-2">
          <li>
            <Link
              href="/"
              className="relative group px-3 py-2 font-medium text-gray-800 
                        hover:text-blue-600 transition-colors duration-300"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 
                              transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="relative group px-3 py-2 font-medium text-gray-800 
                        hover:text-blue-600 transition-colors duration-300"
            >
              About Me
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 
                              transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link
              href="/skills"
              className="relative group px-3 py-2 font-medium text-gray-800 
                        hover:text-blue-600 transition-colors duration-300"
            >
              Skills
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 
                              transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link
              href="/project"
              className="relative group px-3 py-2 font-medium text-gray-800 
                        hover:text-blue-600 transition-colors duration-300"
            >
              My Projects
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 
                              transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="relative group px-3 py-2 font-medium text-gray-800 
                        hover:text-blue-600 transition-colors duration-300"
            >
              Contact Me
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 
                              transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>
        
        <div className='flex items-center gap-5'>

          {/* <button>
            <Image src={assets.moon_icon} alt='' className='w-6' />
          </button> */}

            <Link
                href="/contact"
                className="hidden lg:flex items-center gap-3 px-8 py-2.5 border border-gray-500 rounded-full 
                          ml-4 text-gray-800 font-medium transition-all duration-300 
                          hover:border-blue-500 hover:text-white hover:bg-blue-600 hover:shadow-lg"
              >
                Contact
                <Image src={assets.call} alt="call icon" className="w-4 h-4" />
            </Link>
            <button className='block md:hidden ml-3' onClick={openMenu}>
              <Image src={assets.menu_black} alt='' className='w-6' />
            </button>
        </div>

        {/* mobile menu */}

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-300'>
          
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
          </div>

            <li><Link onClick={closeMenu} href="/">Home</Link></li>
            <li><Link onClick={closeMenu} href="/about">About Me</Link></li>
            <li><Link onClick={closeMenu} href="/skills">Skills</Link></li>
            <li><Link onClick={closeMenu} href="/project">My Projects</Link></li>
            <li><Link onClick={closeMenu} href="/contact">Contact Me</Link></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar