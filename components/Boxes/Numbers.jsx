import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  {
    number: '+1.000.000',
    sub: 'de beneficiarios'
  },

  {
    number: '+300',
    sub: 'Empresas confían en nosotros'
  },
  {
    number: '+280.000',
    sub: 'Consultas virtuales'
  },
  {
    number: '+100',
    sub: 'Profesionales de salud a su disposición'
  }
]

export const Numbers = () => {
  const boxVariant = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.2,
        when: 'beforeChildren'
      }
    }
  }
  return (
    <div className="h-screen ">
      <div className="relative h-screen w-full flex flex-col items-center">
        <div className="absolute w-full h-full">
          <Image
            src={'/img/home/FondoCifras1.png'}
            layout="fill"
            objectFit="contain"
            className=""
            alt="experiencia unica"
          />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={boxVariant}
          className=" w-full text-white relative flex flex-col h-full items-center justify-center"
        >
          <div className="flex flex-col items-center md:-translate-y-10 -translate-y-5">
            <h2 className="text-accent lg:text-[100px]">+1.000.000</h2>
            <p>de beneficiarios</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
