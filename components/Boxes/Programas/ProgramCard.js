import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export const ProgramCard = ({ variants }) => {
  return (
    <motion.div
      variants={variants}
      className="card w-32 h-32 md:w-48 md:h-48 bg-white shadow-xl ">
      <div className='absolute w-full h-48 shadow-xl '>
        <Image
          src={'/images/programas/IMG_1_EMOCIONAL.jpg'}
          layout='fill'
          objectFit='cover'
          className=''
          alt='Programas'
        />
      </div>

      <div className="relative h-full w-full flex flex-col items-center bg-black/20">
        <div className="h-full w-full px-4 my-auto  relative">
          <h2 className="text-lg  absolute bottom-0 ">Programa de consulta médica</h2>
          {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
        </div>
      </div>
    </motion.div>



  )
}
