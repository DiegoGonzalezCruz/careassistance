import Image from 'next/image'
import React from 'react'
// import Vector from '../../public/images/experiencia_unica/vector2.svg'

export const BoxRotatingElements = () => {
  return (
    <div className="relative w-screen h-[100vh] py-20 bg-primary ">
      <div className="w-full h-full mx-auto bg-[url('/img/canales/cellphone.svg')] bg-no-repeat flex justify-center bg-center">
        <div className="w-96 h-full mx-auto flex flex-col justify-between">
          <div className=" flex flex-row items-center justify-between  ">
            <div className="relative h-24 w-24">
              <Image
                src={'/img/canales/tl.png'}
                layout="fill"
                className="w-full h-full"
                alt="vector"
              />
            </div>
            <div className="relative h-24 w-24">
              <Image
                src={'/img/canales/tr.png'}
                layout="fill"
                className="w-full h-full"
                alt="vector"
              />
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <div className="relative h-24 w-24">
              <Image
                src={'/img/canales/bl.png'}
                layout="fill"
                className="w-full h-full"
                alt="vector"
              />
            </div>
          </div>
          <div className=" flex flex-row items-center justify-between  ">
            <div className="relative h-24 w-24">
              <Image
                src={'/img/canales/bl.png'}
                layout="fill"
                className="w-full h-full"
                alt="vector"
              />
            </div>
            <div className="relative h-24 w-24">
              <Image
                src={'/img/canales/br.png'}
                layout="fill"
                className="w-full h-full"
                alt="vector"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
