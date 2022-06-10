import Image from 'next/image'
import React from 'react'
// import Vector from '../../public/images/experiencia_unica/vector2.svg'

export const BoxRotatingElements = () => {
  return (
    <div className="relative w-screen h-full py-20 bg-primary">
      <div className="h-full ">
        <Image
          src={'/images/experiencia_unica/vector2.svg'}
          layout="fill"
          className="w-screen"
        />
      </div>
    </div>
  )
}
