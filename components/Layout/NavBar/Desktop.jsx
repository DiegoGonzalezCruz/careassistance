import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { navbarItems } from '../navbarItems'
import { faAngleDown, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const caretDown = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
    <path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z" />
  </svg>
)

export const Desktop = () => {
  return (
    <div className="hidden md:flex h-full w-full justify-center ">
      <div className="md:flex md:flex-row text-primary items-center w-3/4 gap-10 ">
        <ul className=" w-full h-full flex flex-row items-center justify-end gap-10">
          {navbarItems.map((item, index) => {
            return (
              <li key={item.title} className="hover:text-accent">
                <Link href={item.href}>{item.title}</Link>
              </li>
            )
          })}
        </ul>

        <div className="border border-primary rounded-full flex-row flex items-center gap-3 p-1">
          <div className="h-10 w-10 relative">
            <Image
              src="/img/logo/Flag_of_Chile.svg"
              layout="fill"
              className="rounded-full"
              objectFit="cover"
              alt="desktop"
            />
          </div>
          <div className="relative flex items-center">
            <FontAwesomeIcon
              icon={faAngleDown}
              className="cursor-pointer text-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
