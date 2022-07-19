import Image from 'next/image'
import { useState } from 'react'
import { Desktop } from './NavBar/Desktop'
import { Mobile } from './NavBar/Mobile'
// import Logo from '../../public/images/Logo_Care_Assistance.svg'

export const NavBar = () => {
  return (
    <div className="navbar flex flex-row h-[10vh] w-screen  sticky ">
      <div className="h-full w-3/4 mx-auto ">
        <div className="md:hidden ">
          <Mobile />
        </div>
        <div className="relative w-20 h-full mx-4 ">
          <Image
            src="/img/logo/logo.svg"
            layout="fill"
            className=""
            alt="logo care assistance"
          />
        </div>
        <div className="hidden md:flex h-full w-full justify-center ">
          <Desktop />
        </div>
      </div>
    </div>
  )
}
