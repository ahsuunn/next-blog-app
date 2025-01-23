import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col justify-around gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
        <Image src={assets.logo_light} alt='' width={120}/>
        <p className='text-sm text-white'>All right reserved. Copyright @blogger</p>
        <div className='flex'>
            <Image src={assets.facebook_icon} alt='' width={40}></Image>
            <Image src={assets.twitter_icon} alt='' width={40}></Image>
            <Image src={assets.googleplus_icon} alt='' width={40}></Image>
        </div>
    </div>
  )
}

export default Footer