import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { studyCase } from '../../../styles/animations'

const historia = [
  {
    src: '/img/historia/vector1.svg',
    text: 'Ella es Ana y a través de los beneficios de su empresa, conoció Care Assistance y nuestros programas de Clínica Virtual.'
  },
  {
    src: '/img/historia/vector2.svg',
    text: 'Ana agendó una videollamada con el Programa de asistencia nutricional, ya que tenia una alimentacion desbalanceada y realizaba poca actividad física'
  },
  {
    src: '/img/historia/vector3.svg',
    text: 'Para complementar su tratamiento y mejorar su salud, el profesional derivó a Ana al programa de Asistencia Emocional y de Asesoría Deportiva, al identificar que presentaba cansancio y ansiedad.'
  },
  {
    src: '/img/historia/vector4.svg',
    text: 'Luego de 6 meses de orientación, atención y seguimiento en nuestros programas complementarios, Ana mejoró sus hábitos y volvió a sentirse bien física y emocionalmente.'
  }
]

export const ComoFuncionanNuestrosProgramas = () => {
  return (
    <div className="w-screen h-[120vh] py-24 ">
      <motion.div
        variants={studyCase}
        initial="hidden"
        animate="visible"
        className="h-full w-3/4 mx-auto flex flex-col items-center gap-5"
      >
        <h2 className="text-primary">Como funcionan nuestros programas</h2>
        <motion.div
          variants={studyCase}
          className="flex md:flex-row flex-col h-full w-full items-center  "
        >
          {historia.map((item, index) => {
            return (
              <motion.div
                variants={studyCase}
                initial="notHover"
                whileHover={'hover'}
                key={item.src}
                className="md:w-1/5 h-full flex md:flex-col flex-row mx-auto  gap-5 m-5"
              >
                <motion.div
                  variants={studyCase}
                  className="w-full h-full relative "
                >
                  <Image
                    src={item.src}
                    alt={item.text}
                    layout="fill"
                    objectFit="contain"
                  />
                </motion.div>
                <motion.div variants={studyCase} className="flex items-center">
                  <p>{item.text}</p>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  )
}
