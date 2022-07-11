import Image from 'next/image'
import React from 'react'

export const ProblemInNumbers = () => {
  const problems = [
    {
      img: '/img/numbers/1.svg',
      percentage: '84%',
      subtitle: 'de las personas sufre estrés laboral'
    },
    {
      img: '/img/numbers/2.svg',
      percentage: '60%',
      subtitle: 'de los colaboradores está pensando en cambiar de trabajo'
    },
    {
      img: '/img/numbers/3.svg',
      percentage: '25%',
      subtitle:
        'de empleados más sanos y motivados rinden más, baja su ausentismo y es más productivo'
    }
  ]

  return (
    <div className="w-screen min-h-[60vh] flex flex-col gap-10 my-20">
      <div className="w-3/4 h-1/2 mx-auto my-auto">
        <div className="flex flex-row gap-5 h-full">
          {problems.map((problem) => {
            return (
              <div
                key={problem.percentage}
                className="w-1/3  flex flex-col items-center gap-5"
              >
                <div className="relative w-24 h-24">
                  <Image
                    src={`${problem.img}`}
                    layout="fill"
                    objectFit="contain"
                    alt=""
                  />
                </div>
                <h2 className="text-primary text-5xl">{problem.percentage}</h2>
                <p className="text-center">{problem.subtitle}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className="w-3/4 mx-auto flex flex-col gap-5">
        <p>
          El ausentismo y la retención de talentos es uno de los problemas en el
          ámbito laboral. Por eso la salud, el bienestar y la felicidad de las
          personas juegan un rol muy importante en la productividad y
          rentabilidad de las empresas.
        </p>
        <p className="text-primary">
          En Care Assistance nos proyectamos como el mejor aliado para
          desarrollar una cultura de hábitos saludables.
        </p>
      </div>
    </div>
  )
}
