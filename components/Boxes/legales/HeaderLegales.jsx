import Image from 'next/image'
import React from 'react'

export const HeaderLegales = ({ title }) => {
  console.log(title, 'title')
  return (
    <div className="w-screen h-[50vh] bg-white relative">
      <div className="relative w-full h-full">
        <Image
          src="/img/legales/header-legales.svg"
          layout="fill"
          alt="legales"
        />
      </div>
      <div className="w-full h-full flex flex-row items-center justify-center text-secondary absolute top-0 left-0">
        <h1>{title.title.rendered}</h1>
      </div>
    </div>
  )
}
