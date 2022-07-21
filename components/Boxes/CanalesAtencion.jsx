import Image from 'next/image'
import React from 'react'

const canales = [
  {
    title: 'Diseño responsivo',
    image: '/images/iconos_canales_atencion/Portal_Web.svg'
  },
  {
    title: 'Video Llamada',
    image: '/images/iconos_canales_atencion/Video_llamada.svg'
  },
  {
    title: 'WhatsApp',
    image: '/images/iconos_canales_atencion/WhatsApp.svg'
  },
  {
    title: 'App Mobile',
    image: '/images/iconos_canales_atencion/App_Mobile.svg'
  },
  {
    title: 'Chat Online',
    image: '/images/iconos_canales_atencion/Chat_Online.svg'
  },
  {
    title: 'Línea Exclusiva',
    image: '/images/iconos_canales_atencion/Linea_Exclusiva.svg'
  }
]

export const CanalesAtencion = () => {
  return (
    <div className="w-screen py-14 bg-white text-black h-full ">
      <div className="px-10 flex flex-col gap-10 items-center mx-auto xl:w-1/2 w-3/4">
        <h2 className="text-primary">Nuestros canales de atención</h2>
        <p>
          Además ponemos a disposición de nuestros socios, canales de atención
          exclusivos y recursos de comunicación estratégica, creados a la medida
          de sus necesidades.
        </p>
      </div>
      <div className="md:w-3/4 lg:w-3/4 mx-auto flex flex-wrap gap-4 my-10  items-center justify-center ">
        {canales.map((canal) => {
          return (
            <div
              key={canal.title}
              className=" flex flex-col items-center justify-center w-1/3 h-48 xl:w-96 hover:bg-secondary rounded-xl gap-4"
            >
              <div className="relative h-20 w-20 rounded-l-xl ">
                <Image
                  src={canal.image}
                  layout="fill"
                  objectFit="contain"
                  className="rounded hover:fill-accent"
                  alt="Icono de canal de atención"
                />
              </div>
              <div className="w-3/4 text-center text-accent">
                <p>{canal.title}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
