import Image from 'next/image'
import React from 'react'

export const ProgramCard = () => {
  return (
    <div className="card w-48 h-48 bg-white shadow-xl  ">
      <div className='absolute w-48 h-48 shadow-xl '>
        <Image
          src={'/images/programas/IMG_1_EMOCIONAL.jpg'}
          layout='fill'
          objectFit='cover'
          className=''
          alt='Programas'
        />
      </div>

      <div className="relative h-full w-full flex flex-col items-center bg-black/20">
        <div className="h-full w-full px-4 my-auto debug2 relative">
          <h2 className="text-lg  absolute bottom-0 ">Programa de consulta médica</h2>
          {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
        </div>
      </div>
    </div>



  )
}
