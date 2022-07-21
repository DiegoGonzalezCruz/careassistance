import Image from 'next/image'
import React from 'react'

export const BoxClientes = () => {
  return (
    <div className="bg-white h-[80vh] w-screen bg-[url('/img/clientes/background.png')] bg-cover bg-no-repeat bg-center ">
      <div className="h-full w-3/4 mx-auto relative flex flex-col items-center justify-center">
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
