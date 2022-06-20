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

export const BlogPost = (variants) => {
  return (
    <motion.div
      variants={variants}
      className="h-full w-56 flex flex-col items-center justify-center card bg-white p-4"
    >
      <motion.div variants={variants} className="relative h-48 w-full">
        <Image
          src="/images/IMG_3.jpg"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
          alt="blog post"
        />
      </motion.div>
      <motion.div
        variants={variants}
        className="text-primary w-full py-4 flex flex-col gap-4"
      >
        <motion.p variants={variants}>8 Junio 2022</motion.p>
        <motion.h3 variants={variants} className="text-primary text-sm">
          Tendencias tecnológicas en el sector salud que van a revolucionar este
          2020.
        </motion.h3>
        <motion.button variants={variants} className="btn btn-primary">
          Leer noticia completa
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
