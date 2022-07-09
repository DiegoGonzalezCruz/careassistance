import Image from 'next/image'
import { useState } from 'react'
import { Desktop } from './NavBar/Desktop'
import { Mobile } from './NavBar/Mobile'
// import Logo from '../../public/images/Logo_Care_Assistance.svg'

export const NavBar = () => {
  return (
    <div className="navbar flex flex-row h-[10vh] w-screen  sticky bg-gradient-to-b from-white/45 to-blue-500">
      <div className="md:hidden ">
        <Mobile />
      </div>
      <div className="relative w-24 h-full mx-4 ">
        <Image
          src="/img/logo/logo.svg"
          layout="fill"
          className=""
          alt="logo care assistance"
        />
      </div>
      <div className="hidden md:flex h-full w-full ">
        <Desktop />
      </div>
    </div>
  )
}
