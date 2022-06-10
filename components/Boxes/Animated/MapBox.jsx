import Image from 'next/image'
import React from 'react'

export const MapBox = () => {
  return (
    <div>
      <div className="relative w-screen h-96">
        <Image
          src={'/images/mapa/mapa2.svg'}
          layout="fill"
          objectFit="cover"
          alt="mapa"
        />
      </div>
    </div>
  )
}
