import Link from 'next/link'
import React from 'react'
import { navbarItems } from '../navbarItems'

export const Desktop = () => {
  return (
    <div className="navbar-center hidden lg:flex text-white ">
      <ul className="menu menu-horizontal p-0">
        {navbarItems.map((item, index) => {
          return (
            <li key={item.title} className="hover:text-accent">
              <Link href={item.href}>{item.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
