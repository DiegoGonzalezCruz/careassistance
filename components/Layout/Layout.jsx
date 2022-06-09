import React from 'react'
import { Footer } from './Footer'
import { NavBar } from './NavBar'

export const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}
