import Image from 'next/image'
import React from 'react'

export const InfiniteBox = () => {
  return (
    <div className="w-screen debug1">
      <div className="relative h-96 md:my-20">
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
