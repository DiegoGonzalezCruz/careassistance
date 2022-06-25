import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { navbarItems } from '../navbarItems'

const caretDown = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
    <path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z" />
  </svg>
)

export const Desktop = () => {
  return (
    <div className="navbar-center md:flex md:flex-row text-primary w-full ">
      <ul className="menu menu-horizontal w-full h-full flex flex-row pl-10 justify-end ">
        {navbarItems.map((item, index) => {
          return (
            <li key={item.title} className="hover:text-accent xl:text-2xl">
              <Link href={item.href}>{item.title}</Link>
            </li>
          )
        })}
      </ul>

      <div className="border border-primary rounded-3xl flex-row flex items-center px-3  ">
        <div className="h-8 w-8 relative ">
          <Image
            src="/img/logo/Flag_of_Chile.svg"
            layout="fill"
            className="rounded-full"
          />
        </div>
        <div className="relative">{caretDown}</div>
      </div>
    </div>
  )
}
