import Image from 'next/image'
import React from 'react'

export const MapBox = () => {
  return (
    <div className="relative w-screen h-[100vh]">
      <div>
        <Image
          src={'/img/mapa/mapa1.svg'}
          layout="fill"
          objectFit="cover"
          alt="mapa"
        />
      </div>
    </div>
  )
}
