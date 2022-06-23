import Image from 'next/image'
import { useState } from 'react'
import { Desktop } from './NavBar/Desktop'
import { Mobile } from './NavBar/Mobile'
// import Logo from '../../public/images/Logo_Care_Assistance.svg'

export const NavBar = () => {
  return (
    <div className=" navbar bg-primary flex flex-row justify-between h-[10vh]  ">
      <div className="md:hidden ">
        <Mobile />
      </div>
      <div className="relative w-24 h-full mx-4">
        <Image
          src="/images/Logo_Care_Assistance.svg"
          layout="fill"
          className=""
          alt="logo care assistance"
        />
      </div>
      <div className="hidden md:flex  h-full">
        <Desktop />
      </div>
    </div>
  )
}
