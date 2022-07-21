import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export const NuestrosProgramas = ({ programs }) => {
  const [program, setProgram] = useState(0)
  const router = useRouter()
  // console.log(programs)
  return (
    <div className="min-h-[100vh] h-auto w-screen bg-base-200 py-20 ">
      <div className="wrapper h-full w-10/12 mx-auto ">
        <div className="flex flex-col text-white w-full mx-auto my-10  ">
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
            <div className="card-body w-1/3 ">
              <ul className="">
                {programs.map((item, idx) => {
                  console.log(item, 'item')
                  return (
                    <li
                      key={item.id}
                      className={`text-xs border-b-2 hover:border-b-base-200 cursor-pointer text-primary py-4 hover:font-extrabold flex flex-row items-center pl-4 gap-2 ${
                        program === idx
                          ? 'font-extrabold text-white bg-base-200'
                          : ''
                      }`}
                      onClick={() => setProgram(idx)}
                    >
                      <div className="h-12 w-12 relative">
                        <Image
                          src={item.acf.icon.url}
                          layout="fill"
                          alt="programas careassistance"
                        />
                      </div>
                      {item.acf.labelBlue + ' ' + item.acf.labelAccent}
                    </li>
                  )
                })}
              </ul>
            </div>
            <figure className="w-3/4 sm:p-4 relative ">
              <div className="relative h-full w-full rounded-2xl overflow-hidden ">
                <div className="absolute bg-[#0082C7]/70 flex z-20  w-full h-full">
                  <div className="w-3/4 mx-auto h-full flex">
                    <p className=" self-end mb-10 mx-5 text-white font-FiraSans font-normal">
                      {programs[program].content.rendered.replace(
                        /<[^>]*>?/gm,
                        ''
                      )}
                    </p>
                  </div>
                </div>
                <div className="relative h-full ">
                  <Image
                    src={
                      programs[program]._embedded['wp:featuredmedia'][0]
                        .source_url
                    }
                    alt="careassistance image"
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
        <div className="text-white flex flex-col items-center my-20 gap-10">
          <p>Transforma la Salud y Bienestar de tus colaboradores</p>
          <button
            onClick={() => router.push('/contacto')}
            className="btn btn-accent rounded-full text-white w-1/5"
          >
            Suma Clínica Virtual a tu empresa
          </button>
        </div>
      </div>
    </div>
  )
}
