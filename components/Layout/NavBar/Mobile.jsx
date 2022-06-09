import Link from 'next/link'
import React from 'react'
import { navbarItems } from '../navbarItems'

export const Mobile = () => {
  return (
    <div className="navbar-start flex flex-row justify-between z-100">
      <div className="dropdown rounded-xl bg-primary ">
        <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
        <ul
          tabIndex="0"
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          {navbarItems.map((item, index) => {
            return (
              <li key={item.title}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
