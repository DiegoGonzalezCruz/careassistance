import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { navbarItems } from '../navbarItems'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => {
    console.log('open')
    setIsOpen(true)
  }
  const close = () => {
    setIsOpen(false)
  }

  return (
    <div className="md:hidden flex flex-col h-full w-full justify-around">
      <div className="rounded-xl bg-white flex flex-col justify-center items-center ">
        <label tabIndex="0" className="btn btn-ghost md:hidden" onClick={open}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="black"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>

      <div
        className={`${
          isOpen
            ? 'flex flex-col  w-screen h-screen absolute left-0 top-0 bg-white items-center justify-center '
            : 'hidden'
        }`}
      >
        <div className="flex flex-row w-full h-24 relative">
          <div className="relative w-1/2 h-full mx-4 ">
            <Image
              src="/img/logo/logo.svg"
              layout="fill"
              className=""
              alt="logo care assistance"
            />
          </div>

          <FontAwesomeIcon
            icon={faXmark}
            className="absolute right-5 top-5 text-4xl"
            onClick={close}
          />
        </div>
        <ul
          tabIndex="0"
          className={`shadow bg-base-100 rounded-box w-full h-full flex flex-col items-center justify-center gap-5  `}
        >
          {navbarItems.map((item, index) => {
            return (
              <li key={item.title}>
                <Link href={item.href}>
                  <p className="text-5xl font-light" onClick={close}>
                    {item.title}
                  </p>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
