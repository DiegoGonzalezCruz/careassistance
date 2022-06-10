import Image from 'next/image'
import React from 'react'

export const InfiniteBox = () => {
  return (
    <div className="">
      <div className="relative w-screen h-96">
        <Image
          src={'/images/nosotros/nosotros1.svg'}
          layout="fill"
          objectFit="contain"
          alt="nosotros"
        />
      </div>
    </div>
  )
}
