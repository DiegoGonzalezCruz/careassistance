import Image from 'next/image'
import React from 'react'
// import Vector from '../../public/images/experiencia_unica/vector2.svg'

export const BoxRotatingElements = () => {
  return (
    <div className=" relative w-screen h-[100vh] bg-primary flex items-center">
      <div className=" w-fit h-full max-w-full max-h-full mx-auto bg-[url('/img/canales/cellphone.svg')] bg-no-repeat flex justify-center">
        <div className=" debug2 w-96 h-full mx-auto flex flex-col justify-between text-center text-white">
          <div className="debug1 flex flex-row items-center justify-between  ">
            <div className=" flex flex-col items-center -translate-y-20 -translate-x-20">
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
            <div className=" flex flex-col items-center -translate-y-20 translate-x-20">
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
          <div className="flex debug1 items-center justify-center ">
            <div className=" flex flex-col items-center">
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
          <div className=" flex debug1 flex-row items-center justify-between  ">
            <div className=" flex flex-col items-center -translate-y-20 -translate-x-20">
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
            <div className=" flex flex-col items-center -translate-y-20 translate-x-20">
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
