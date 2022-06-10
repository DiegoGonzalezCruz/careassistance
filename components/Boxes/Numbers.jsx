import Image from 'next/image'
import React from 'react'

const stats = [
  {
    number: '+1.000.000',
    sub: 'de beneficiarios'
  },

  {
    number: '+300',
    sub: 'Empresas confían en nosotros'
  },
  {
    number: '+280.000',
    sub: 'Consultas virtuales'
  },
  {
    number: '+100',
    sub: 'Profesionales de salud a su disposición'
  }
]

export const Numbers = () => {
  return (
    <div className="h-screen ">
      <div className="relative h-screen w-full flex flex-col items-center">
        <div className="absolute w-full object-cover h-full ">
          <Image
            src={'/images/IMG_13.jpg'}
            layout="fill"
            objectFit="cover"
            className=""
            alt="experiencia unica"
          />
        </div>
        <div className="bg-primary/80 w-full text-white relative flex flex-col h-full items-center justify-center">
          {stats.map((stat, index) => {
            return (
              <div key={stat.sub} className="my-10 flex flex-col items-center">
                <p>
                  <span className="text-accent font-bold text-5xl">
                    {stat.number}
                  </span>
                </p>
                <p className="text-sm">{stat.sub}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
