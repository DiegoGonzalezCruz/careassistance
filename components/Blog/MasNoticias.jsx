import React from 'react'
import { CalltoAction } from '../Boxes/CalltoAction'
import { BlogPost } from './BlogPost'
import { motion } from 'framer-motion'

export const MasNoticias = () => {
  return (
    <div className="bg-primary w-screen min-h-screen">
      <div className="md:w-3/4 flex flex-col items-center justify-center mx-auto">
        <div className="my-5">
          <h2 className="text-white">
            Más <span className="text-accent">noticias</span>
          </h2>
        </div>
        <div className="categories flex flex-wrap items-center justify-center">
          <button className="btn btn-accent text-white">Todos</button>
          <button className="btn btn-primary text-white">Salud</button>
          <button className="btn btn-primary text-white">Tecnología</button>
          <button className="btn btn-primary text-white">Comunicación</button>
        </div>
        <motion.div className="flex flex-wrap gap-10 py-10 items-center justify-center">
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
        </motion.div>
        <CalltoAction
          question={
            'Te gustaría tener más información de nuestros programas de salud y bienestar?'
          }
          buttonText={'Contáctanos'}
        />
      </div>
    </div>
  )
}
