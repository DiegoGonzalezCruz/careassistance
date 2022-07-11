import Image from 'next/image'
import React from 'react'

export const MapBox = () => {
  return (
    <div className="relative w-screen h-[120vh] debug1">
      <div className="w-full h-full flex flex-row items-center justify-center bg-base-200">
        <div className="w-1/2 h-full">
          <p className="text-white">
            Disponemos de un firme recorrido en
            <span className="text-accent"> Chile y México</span>, donde
            incorporamos el know-how necesario e invertimos en el
            perfeccionamiento tecnológico, con el que nos posicionamos como
            actores de cambio en el ámbito de la telemedicina y la atención en
            salud y bienestar.
          </p>
        </div>
        <div className="relative w-1/2 h-full bg-base-200 debug2 ">
          <Image
            src={'/img/nosotros/mapa.svg'}
            layout="fill"
            objectFit="contain"
            alt="mapa"
          />
        </div>
      </div>
    </div>
  )
}
