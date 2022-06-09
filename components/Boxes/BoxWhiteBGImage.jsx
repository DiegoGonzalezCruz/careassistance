import React from 'react'
import Image from 'next/image'

export const BoxWhiteBGImage = () => {
  return (
    <div className="relative w-screen h-96">
      <Image
        src={'/images/proposito/proposito3.svg'}
        layout="fill"
        alt="proposito"
      />
    </div>
  )
}
