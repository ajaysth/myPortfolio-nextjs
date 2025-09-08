import { assets } from '@/assets/assets'
import React from 'react'

const Header = () => {
  return (
    <div>
        <div>
            <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
            
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I am Ajay Shrestha <Image src={assets.hand_icon} alt='' className='w-6' /></h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px]'>Front end developer in Nepal</h1>
        <p className='max-w-2xl mx-auto font-Ovo'>
            I am fullstack developer from Bhaktapur, Nepal.
        </p>
    </div>
  )
}

export default Header
