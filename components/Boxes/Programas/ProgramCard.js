import Image from 'next/image'
import React from 'react'

export const ProgramCard = () => {
  return (
    <div className="card w-96 bg-white shadow-xl image-full ">
      <div className=' w-48 h-48 shadow-xl'>
        <Image
          src={'/images/programas/IMG_1_EMOCIONAL.jpg'}
          layout='fill'
          objectFit='cover'
          className=''
          alt='Programas'
        />
      </div>
      <div className="card-body flex flex-col justify-center">
        <h2 className="card-title self-center">Programa de consulta médica</h2>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>



  )
}
