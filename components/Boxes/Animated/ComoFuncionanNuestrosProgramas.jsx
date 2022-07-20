import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { studyCase } from '../../../styles/animations'

const historia = [
  {
    src: '/img/historia/1.png',
    text: 'Ella es Ana y a través de los beneficios de su empresa, conoció Care Assistance y nuestros programas de Clínica Virtual.'
  },
  {
    src: '/img/historia/2.png',
    text: 'Ana agendó una videollamada con el Programa de asistencia nutricional, ya que tenia una alimentacion desbalanceada y realizaba poca actividad física'
  },
  {
    src: '/img/historia/3.png',
    text: 'Para complementar su tratamiento y mejorar su salud, el profesional derivó a Ana al programa de Asistencia Emocional y de Asesoría Deportiva, al identificar que presentaba cansancio y ansiedad.'
  },
  {
    src: '/img/historia/4.png',
    text: 'Luego de 6 meses de orientación, atención y seguimiento en nuestros programas complementarios, Ana mejoró sus hábitos y volvió a sentirse bien física y emocionalmente.'
  }
]

export const ComoFuncionanNuestrosProgramas = () => {
  return (
    <div className="w-screen h-[80vh] ">
      <div className="wrapper w-full h-full mt-20">
        <div
          variants={studyCase}
          initial="hidden"
          animate="visible"
          className="h-full w-full mx-auto flex flex-col items-center gap-5 "
        >
          <h2 className="text-primary text-xl text-center">
            ¿Cómo funcionan <br />
            <span className="text-accent text-3xl">nuestros programas?</span>
          </h2>
          <div
            variants={studyCase}
            className="flex md:flex-row flex-row gap-5 h-[50vh] w-3/4 items-center  "
          >
            {historia.map((item, index) => {
              return (
                <motion.div
                  variants={studyCase}
                  initial="notHover"
                  whileHover={'hover'}
                  key={item.src}
                  className="w-1/4 h-full flex md:flex-col flex-row "
                >
                  <div
                    variants={studyCase}
                    className="w-full h-full relative  "
                  >
                    <Image
                      src={item.src}
                      alt={item.text}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
