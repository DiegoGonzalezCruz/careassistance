import Image from 'next/image'
import React from 'react'
// import Vector from '../../public/images/experiencia_unica/vector2.svg'

export const BoxRotatingElements = () => {
  return (
    <div className=" relative w-screen h-[100vh] bg-primary flex items-center">
      <div className=" w-fit mx-auto bg-[url('/img/canales/cellphone.svg')] bg-no-repeat bg-contain bg-center ">
        <div className=" w-full h-full mx-auto flex flex-col justify-between text-center text-white">
          <div className=" flex flex-row justify-around  ">
            <div className=" w-1/3 flex flex-col items-center">
              <div className="relative h-36 w-36">
                <Image
                  src={'/img/canales/tl.png'}
                  layout="fill"
                  className="w-full h-full"
                  alt="vector"
                />
              </div>
              <p>Profesionales Propios</p>
            </div>
            <div className="w-1/3 flex  flex-col items-center ">
              <div className="relative h-36 w-36">
                <Image
                  src={'/img/canales/tr.png'}
                  layout="fill"
                  className="w-full h-full"
                  alt="vector"
                />
              </div>
              <p>
                Canales exclusivos <br /> Omnicanal
              </p>
            </div>
          </div>
          <div className=" self-center  flex flex-row">
            <div className="  flex flex-col items-center">
              <div className="relative h-36 w-36">
                <Image
                  src={'/img/canales/bl.png'}
                  layout="fill"
                  className="w-full h-full"
                  alt="vector"
                />
              </div>
              <p>Tecnología</p>
            </div>
          </div>
          <div className="  flex flex-row justify-around">
            <div className=" w-1/3 flex flex-col items-center">
              <div className="relative h-36 w-36">
                <Image
                  src={'/img/canales/bl.png'}
                  layout="fill"
                  className="w-full h-full"
                  alt="vector"
                />
              </div>
              <p>Seguimiento Permanente</p>
            </div>
            <div className="w-1/3  flex flex-col items-center ">
              <div className="relative h-36 w-36 ">
                <Image
                  src={'/img/canales/br.png'}
                  layout="fill"
                  className="w-full h-full"
                  alt="vector"
                />
              </div>
              <p>Experiencia de usuario (ux)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
