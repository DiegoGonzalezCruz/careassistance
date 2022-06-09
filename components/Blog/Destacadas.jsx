import Image from 'next/image'
import React from 'react'

export const NoticiasDestacadas = () => {
  return (
    <div>
      <h2 className="text-primary">
        Noticias <span className="text-accent">destacadas</span>
      </h2>
      <div className="flex flex-row">
        <div className="relative w-48 h-48 rounded-xl ">
          <Image
            src="/images/IMG_8_ORIENTACION.jpg"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            alt="noticia destacada"
          />
        </div>
        <div>
          <div>
            <div className="flex flex-col w-full">
              <p>Fecha</p>
              <div className="divider"></div>
              <h2 className="text-primary">
                Ventajas del uso de las redes sociales si eres enfermera.
              </h2>
              <button className="btn btn-primary w-48">
                Leer noticia completa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
