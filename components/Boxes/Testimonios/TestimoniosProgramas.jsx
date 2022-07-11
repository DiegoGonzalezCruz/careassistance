import Image from 'next/image'
import React from 'react'

export const TestimoniosProgramas = () => {
  return (
    <div className="w-screen h-[30vh] ">
      <div className="w-3/4 mx-auto h-full flex flex-row items-center justify-center  ">
        <div className="w-1/5 h-full relative  mx-5">
          <Image src="/img/programas/satisfaccion.svg" layout="fill" />
        </div>
        <div className="w-4/5 h-full relative flex flex-col gap-1">
          <h2 className="text-base text-primary">Ricardo Tapia</h2>
          <p className="text-primary">Beneficiario desde el 2019</p>
          <div className="divider"></div>
          <div className="h-full w-full flex flex-row gap-5">
            <div className="text-accent text-[10rem] self-start "> "</div>
            <div>
              <p>
                Nuestra experiencia con los Servicios de la Clínica Virtual ha
                sido excelente, los usuarios han podido acceder a una muy buena
                orientación y a recibir las prestaciones con excelentes
                resultados, adicionalmente a lo anterior los servicios han
                tenido muy buen impacto en los seguros complementarios de las
                empresas y la siniestralidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
