import Image from 'next/image'
import React from 'react'

export const NoticiasDestacadas = () => {
  return (
    <div className="flex flex-col items-center py-5 w-screen min-h-[50vh]">
      <h2 className="text-primary py-10">
        Noticias <span className="text-accent">destacadas</span>
      </h2>
      <div className="flex md:flex-row flex-col h-full w-full items-center justify-center md:px-20 gap-5 xl:gap-10">
        <div className="relative h-48 xl:h-96 w-full max-w-4xl rounded-2xl overflow-hidden  ">
          <Image
            src="/images/IMG_8_ORIENTACION.jpg"
            layout="fill"
            objectFit="cover"
            className="w-full"
            alt="noticia destacada"
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center py-5 max-w-4xl ">
          <p>Fecha</p>
          <div className="divider"></div>
          <h2 className="text-primary my-4">
            Ventajas del uso de las redes sociales si eres enfermera.
          </h2>
          <button className="btn btn-primary w-48">
            Leer noticia completa
          </button>
        </div>
      </div>
    </div>
  )
}
