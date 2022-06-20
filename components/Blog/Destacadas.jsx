import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { overlayVariants } from '../../styles/animations'

export const NoticiasDestacadas = () => {
  return (
    <div className="flex flex-col items-center py-5 w-screen min-h-[50vh] my-10">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={overlayVariants}
        className="text-primary py-10"
      >
        Noticias <span className="text-accent">destacadas</span>
      </motion.h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={overlayVariants}
        className="flex md:flex-row flex-col h-full w-full items-center justify-center md:px-20 gap-5 xl:gap-10"
      >
        <motion.div
          variants={overlayVariants}
          className="relative h-48 xl:h-96 w-full max-w-4xl rounded-2xl overflow-hidden  "
        >
          <Image
            src="/images/IMG_8_ORIENTACION.jpg"
            layout="fill"
            objectFit="cover"
            className="w-full"
            alt="noticia destacada"
          />
        </motion.div>
        <motion.div
          variants={overlayVariants}
          className="flex flex-col items-center justify-center text-center py-5 max-w-4xl "
        >
          <motion.p variants={overlayVariants}>Fecha</motion.p>
          <motion.div
            variants={overlayVariants}
            className="divider"
          ></motion.div>
          <motion.h2 variants={overlayVariants} className="text-primary my-4">
            Ventajas del uso de las redes sociales si eres enfermera.
          </motion.h2>
          <motion.button
            variants={overlayVariants}
            className="btn btn-primary w-48"
          >
            Leer noticia completa
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}
