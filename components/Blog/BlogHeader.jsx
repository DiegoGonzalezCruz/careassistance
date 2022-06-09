import Image from 'next/image'
import React from 'react'

export const BlogHeader = () => {
  return (
    <div className="bg-primary flex flex-col items-center text-white">
      <h1 className="text-white text-center">
        Tendencias tecnológicas en el sector salud que van a revolucionar este
        2022.
      </h1>
      <p>8 Junio 2022</p>
      <div className="tags">
        <p>Salud, tecnología, Internacional</p>
      </div>
      <div className="relative h-48 w-48">
        <Image
          src={'/images/IMG_3.jpg'}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
          alt="blog header"
        />
      </div>
    </div>
  )
}
