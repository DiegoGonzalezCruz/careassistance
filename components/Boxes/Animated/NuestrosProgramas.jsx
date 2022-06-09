import Image from 'next/image'
import React from 'react'

const menu = [
  'Telemedicina',
  'Asesoría psicológica en salud sexual',
  'Asistencia Emocional'
]

export const NuestrosProgramas = () => {
  return (
    <div className="h-screen w-full bg-primary ">
      <div className="flex flex-col text-white  p-10">
        <h2>
          Nuestros <span className="text-accent">Programas</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, sit
          porro soluta harum iure voluptas in tempora repellendus. Aperiam quasi
          nemo ea delectus illum doloribus totam atque provident minima eum.
        </p>
      </div>
      <div className="w-screen flex flex-col items-center">
        <div className="card w-3/4 bg-base-100 shadow-xl flex flex-row">
          <div className="card-body w-1/3">
            <ul>
              {menu.map((item) => {
                return (
                  <li
                    key={item}
                    className="border-b-2 hover:border-b-accent cursor-pointer text-primary py-4"
                  >
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>
          <figure className="w-2/3  p-4">
            <div className="relative h-full w-full rounded-2xl">
              <Image
                src="/images/programas/IMG_7_SALUD_SEXUAL.jpg"
                alt="Shoes"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
          </figure>
        </div>
      </div>
    </div>
  )
}
