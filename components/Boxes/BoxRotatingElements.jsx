import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export const BoxRotatingElements = () => {
  const boxVariant = {
    hidden: {
      opacity: 0,
      x: '-100%'
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.5,
        when: 'beforeChildren',
        delay: 0.2
      }
    }
  }

  return (
    <div className=" relative w-screen h-[100vh] bg-primary flex items-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={boxVariant}
        className=" w-fit mx-auto bg-[url('/img/canales/cellphone.svg')] bg-no-repeat bg-contain bg-center "
      >
        <motion.div
          variants={boxVariant}
          className=" w-full h-full mx-auto flex flex-col justify-between text-center text-white"
        >
          <motion.div
            variants={boxVariant}
            className=" flex flex-row justify-around  "
          >
            <motion.div
              variants={boxVariant}
              className=" w-1/3 flex flex-col items-center"
            >
              <div className="relative h-36 w-36">
                <Image
                  src={'/img/canales/tl.png'}
                  layout="fill"
                  className="w-full h-full"
                  alt="vector"
                />
              </div>
              <p>Profesionales Propios</p>
            </motion.div>
            <motion.div
              variants={boxVariant}
              className="w-1/3 flex  flex-col items-center "
            >
              <div className="relative h-36 w-36">
                <Image
                  src={'/img/canales/tr.png'}
                  layout="fill"
                  className="w-full h-full"
                  alt="vector"
                />
              </div>
              <p>
                Canales exclusivos <br /> Omnicanal
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            variants={boxVariant}
            className=" self-center  flex flex-row"
          >
            <motion.div
              variants={boxVariant}
              className="  flex flex-col items-center"
            >
              <div className="relative h-36 w-36">
                <Image
                  src={'/img/canales/bl.png'}
                  layout="fill"
                  className="w-full h-full"
                  alt="vector"
                />
              </div>
              <p>Tecnología</p>
            </motion.div>
          </motion.div>
          <motion.div
            variants={boxVariant}
            className="flex flex-row justify-around"
          >
            <motion.div
              variants={boxVariant}
              className=" w-1/3 flex flex-col items-center"
            >
              <div className="relative h-36 w-36">
                <Image
                  src={'/img/canales/bl.png'}
                  layout="fill"
                  className="w-full h-full"
                  alt="vector"
                />
              </div>
              <p>Seguimiento Permanente</p>
            </motion.div>
            <motion.div
              variants={boxVariant}
              className="w-1/3  flex flex-col items-center "
            >
              <div className="relative h-36 w-36 ">
                <Image
                  src={'/img/canales/br.png'}
                  layout="fill"
                  className="w-full h-full"
                  alt="vector"
                />
              </div>
              <p>Experiencia de usuario (ux)</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
