import Image from 'next/image'
import React from 'react'

export const BoxClientes = () => {
  return (
    <div className="bg-white h-[70vh] w-screen bg-[url('/img/clientes/background.png')] bg-contain bg-no-repeat">
      <div className="h-full w-3/4 mx-auto relative flex flex-col">
        <h2 className="text-primary py-10 ">Confían en nosotros</h2>
        <div className="relative w-3/4 h-[30vh] mx-auto ">
          <Image
            src={'/img/clientes/clientes.svg'}
            layout="fill"
            objectFit="contain"
            className=""
            alt="clientes"
          />
        </div>
      </div>
    </div>
  )
}
