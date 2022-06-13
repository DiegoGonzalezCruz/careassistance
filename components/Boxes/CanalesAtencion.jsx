import Image from 'next/image'
import React from 'react'

const canales = [
  {
    title: 'Portal Web',
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
    <div className="w-screen py-14 bg-primary text-white h-full ">
      <div className="w-full px-10 flex flex-col gap-10 items-center mx-auto xl:w-1/2">
        <h2>Nuestros canales de atención</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A porro non
          tenetur placeat sit? Eligendi beatae commodi optio cum culpa ipsam
          odio neque voluptatibus quibusdam!
        </p>
      </div>
      <div className="md:w-3/4 lg:w-3/4 xl:w-full mx-auto flex flex-wrap gap-4 my-10  items-center justify-center ">
        {canales.map((canal) => {
          return (
            <div
              key={canal.title}
              className=" flex flex-row items-center w-48 xl:w-96 bg-accent rounded-xl"
            >
              <div className="relative bg-white h-20 w-20 rounded-l-xl py-4 min-w-48">
                <div className="relative bg-white h-full w-full rounded-l-xl">
                  <Image
                    src={canal.image}
                    layout="fill"
                    objectFit="contain"
                    className="rounded"
                    alt="Icono de canal de atención"
                  />
                </div>
              </div>
              <div className="w-3/4 text-center">
                <p>{canal.title}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
