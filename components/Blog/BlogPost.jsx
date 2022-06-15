import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const overlayVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3
    }
  }
}

const blogposts = {}

export const BlogPost = () => {
  return (
    <motion.div
      variants={overlayVariants}
      initial="hidden"
      whileInView="visible"
      className="h-full w-56 flex flex-col items-center justify-center card bg-white p-4"
    >
      <div className="relative h-48 w-full">
        <Image
          src="/images/IMG_3.jpg"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
          alt="blog post"
        />
      </div>
      <div className="text-primary w-full py-4 flex flex-col gap-4">
        <p>8 Junio 2022</p>
        <h3 className="text-primary text-sm">
          Tendencias tecnológicas en el sector salud que van a revolucionar este
          2020.
        </h3>
        <button className="btn btn-primary">Leer noticia completa</button>
      </div>
    </motion.div>
  )
}
