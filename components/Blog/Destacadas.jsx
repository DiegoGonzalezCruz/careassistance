import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { overlayVariants } from '../../styles/animations'
import { Date } from './Date'
import { useRouter } from 'next/router'
//TODO: Fix box traslation
export const NoticiasDestacadas = ({ lastPost }) => {
  // console.log(lastPost, 'lastPost')
  const router = useRouter()
  return (
    <div className="flex flex-col items-center py-5 w-screen min-h-[50vh] my-10">
      <div className="w-3/4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={overlayVariants}
          className="text-primary py-10  self-start font-FiraSans"
        >
          Noticias <span className="text-primary">destacadas</span>
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={overlayVariants}
          className="flex flex-col h-full w-full items-center justify-center gap-5 xl:gap-10 debug1 relative"
        >
          <motion.div
            variants={overlayVariants}
            className="relative h-96 w-full rounded-2xl overflow-hidden debug2 "
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
            className=" py-5 w-3/4 bg-white rounded-xl debug2 "
          >
            <div className="h-full w-3/4 mx-auto debug1">
              {<Date date={lastPost.date} />}

              <motion.div
                variants={overlayVariants}
                className="divider "
              ></motion.div>
              <motion.h2
                variants={overlayVariants}
                className="text-primary my-4 text-2xl"
              >
                {lastPost.title.rendered}
              </motion.h2>
              <motion.button
                variants={overlayVariants}
                className="btn btn-primary w-48"
                onClick={() => router.push(`/noticias/${lastPost.slug}`)}
              >
                Leer noticia completa
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
