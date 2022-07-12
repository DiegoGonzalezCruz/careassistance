import Image from 'next/image'
import React, { useState } from 'react'

export const NuestrosProgramas = ({ programs }) => {
  const [program, setProgram] = useState(0)

  // console.log(programs)
  return (
    <div className="min-h-[100vh] h-auto w-screen bg-primary ">
      <div className="wrapper h-full w-10/12 mx-auto ">
        <div className="flex flex-col text-white lg:max-w-3xl mx-auto p-10 gap-10 ">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-accent">
              Nuestros <br /> Programas
            </h2>
            <div className="w-40 h-40 relative">
              <Image
                src="/img/programas/clinicavirtual.svg"
                layout="fill"
                alt=""
              />
            </div>
          </div>
          <p>
            Clínica Virtual funciona a través de un ecosistema de programas
            complementarios que, por medio de un seguimiento permanente y la
            orientación de nuestro equipo de profesionales, promueve una vida
            sana y la adopción de hábitos saludables.
          </p>
        </div>
        <div className="w-full h-full flex flex-col items-center">
          <div className="card bg-base-100 shadow-xl flex flex-row w-full h-full ">
            <div className="card-body w-1/3">
              <ul>
                {programs.map((item, idx) => {
                  return (
                    <li
                      key={item.id}
                      className="text-xs sm:text-xs border-b-2 hover:border-b-accent cursor-pointer text-primary py-4 hover:font-extrabold"
                      onClick={() => setProgram(idx)}
                    >
                      {item.acf.labelBlue + ' ' + item.acf.labelAccent}
                    </li>
                  )
                })}
              </ul>
            </div>
            <figure className="w-full sm:p-4 relative debug1">
              <div className="relative h-full w-full rounded-2xl overflow-hidden debug2">
                <div className="absolute bg-base-200/70 w-full right-0  h-full prose flex z-20 debug1 ">
                  <p className=" self-end mb-10 mx-5 text-white">
                    {programs[program].content.rendered.replace(
                      /<[^>]*>?/gm,
                      ''
                    )}
                  </p>
                </div>
                <div className="relative h-full w-full">
                  <Image
                    src={
                      programs[program]._embedded['wp:featuredmedia'][0]
                        .source_url
                    }
                    alt="Shoes"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                    priority
                  />
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}
