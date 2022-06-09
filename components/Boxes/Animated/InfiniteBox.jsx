import Image from 'next/image'
import React from 'react'

export const InfiniteBox = () => {
  return (
    <div className="">
      <div className="relative w-screen h-96">
        <Image
          src={'/images/Nosotros/Vector_Home_Nosotros1.svg'}
          layout="fill"
          objectFit="cover"
          alt="nosotros"
        />
      </div>
    </div>
  )
}
