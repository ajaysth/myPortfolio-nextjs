import React from 'react'
import Image from 'next/image'
import {assets} from '@/assets/assets'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.my_logo} alt='' className='w-36 mx-auto mb-2' />

            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={assets.mail_icon} alt='' className='w-6' />
                ajayshrestha130@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-500 mx-[10%] mt-12 py-6'>
            <p>© 2025 Ajay Shrestha. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://github.com/ajaysth"><Image src={assets.github_icon} alt='' className='w-7 mt-3' /></a></li>
                <li><a target='_blank' href="https://www.instagram.com/aj.s.10/"><Image src={assets.insta_icon} alt='' className='w-7 mt-3' /></a></li>
                <li><a target='_blank' href="https://www.facebook.com/ajay.shrest.110"><Image src={assets.fb_icon} alt='' className='w-7 mt-3' /></a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/ajay-shrestha-28bb462aa/"><Image src={assets.linkedin_icon} alt='' className='w-7 mt-3' /></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer