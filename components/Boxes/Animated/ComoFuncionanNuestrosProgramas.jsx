import Image from 'next/image'
import React from 'react'

export const ComoFuncionanNuestrosProgramas = () => {
  return (
    <div>
      <div>
        <h2>Como funcionan nuestros programas</h2>
        <div className="flex flex-row">
          <div className="relative h-48 w-48">
            <Image
              src={'/images/historia/Historia1.svg'}
              layout="fill"
              objectFit="contain"
              alt="historia"
            />
          </div>
          <div className="relative h-48 w-48">
            <Image
              src={'/images/historia/Historia2.svg'}
              layout="fill"
              objectFit="contain"
              alt="historia"
            />
          </div>
          <div className="relative h-48 w-48">
            <Image
              src={'/images/historia/Historia3.svg'}
              layout="fill"
              objectFit="contain"
              alt="historia"
            />
          </div>
          <div className="relative h-48 w-48">
            <Image
              src={'/images/historia/Historia4.svg'}
              layout="fill"
              objectFit="contain"
              alt="historia"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
