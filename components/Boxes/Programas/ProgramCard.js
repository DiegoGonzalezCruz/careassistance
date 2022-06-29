import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export const ProgramCard = ({ variants }) => {
  return (
    <motion.div
      variants={variants}
      className="w-96 h-96 bg-white shadow-xl  relative">
      <div className='absolute w-full h-full shadow-xl'>
        <Image
          src={'/images/programas/IMG_1_EMOCIONAL.jpg'}
          layout='fill'
          objectFit='cover'
          className='rounded-3xl'
          alt='Programas'
        />
      </div>

      <div className=" relative h-full w-full flex flex-col items-center bg-black/20">
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
