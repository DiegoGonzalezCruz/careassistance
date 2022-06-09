import Image from 'next/image'
import React from 'react'

export const BlogPost = () => {
  return (
    <div className="h-full w-48 p-4">
      <div className="relative h-48 w-48">
        <Image
          src="/images/IMG_3.jpg"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
          alt="blog post"
        />
      </div>
      <div className="text-white  w-full">
        <p>8 Junio 2022</p>
        <h3 className="text-white text-sm">
          Tendencias tecnológicas en el sector salud que van a revolucionar este
          2020.
        </h3>
        <button className="btn btn-primary">Leer noticia completa</button>
      </div>
    </div>
  )
}
