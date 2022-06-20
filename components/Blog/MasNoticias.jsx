import React from 'react'
import { CalltoAction } from '../Boxes/CalltoAction'
import { BlogPost } from './BlogPost'
import { motion } from 'framer-motion'
import { overlayVariants } from '../../styles/animations'

export const MasNoticias = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={overlayVariants}
      className="bg-primary w-screen min-h-screen"
    >
      <motion.div
        variants={overlayVariants}
        className="md:w-3/4 flex flex-col items-center justify-center mx-auto"
      >
        <motion.div variants={overlayVariants} className="my-5">
          <h2 className="text-white">
            Más <span className="text-accent">noticias</span>
          </h2>
        </motion.div>
        <motion.div
          variants={overlayVariants}
          className="categories flex flex-wrap items-center justify-center"
        >
          <button className="btn btn-accent text-white">Todos</button>
          <button className="btn btn-primary text-white">Salud</button>
          <button className="btn btn-primary text-white">Tecnología</button>
          <button className="btn btn-primary text-white">Comunicación</button>
        </motion.div>
        <motion.div
          variants={overlayVariants}
          className="flex flex-wrap gap-10 py-10 items-center justify-center"
        >
          <BlogPost variants={overlayVariants} />
          <BlogPost variants={overlayVariants} />
          <BlogPost variants={overlayVariants} />
          <BlogPost variants={overlayVariants} />
          <BlogPost variants={overlayVariants} />
          <BlogPost variants={overlayVariants} />
        </motion.div>
        <CalltoAction
          question={
            'Te gustaría tener más información de nuestros programas de salud y bienestar?'
          }
          buttonText={'Contáctanos'}
        />
      </motion.div>
    </motion.div>
  )
}
