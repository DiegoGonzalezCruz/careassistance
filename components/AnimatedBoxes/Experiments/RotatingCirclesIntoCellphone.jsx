import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { useElementViewportPosition } from '../../hooks/useElementViewPortPosition'

// TODO: https://codesandbox.io/s/framer-motion-scroll-forked-eiomo1?file=/src/App.js

export const RotatingCirclesIntoCellphone = () => {
  const ref = useRef(null)
  const { position } = useElementViewportPosition(ref)

  const { scrollYProgress } = useViewportScroll()

  const movementFromLeft = useTransform(scrollYProgress, position, [
    '-100vw',
    '100vw'
  ])
  const movementFromRigth = useTransform(scrollYProgress, position, [
    '100vw',
    '-100vw'
  ])

  const boxVariant = {
    hidden: {
      opacity: 0
      //  x: '-100%'
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.2,
        when: 'beforeChildren'
        //  delay: 0.2
      }
    }
  }

  const images = [
    {
      src: '/img/canales/tl.png',
      text: 'Profesionales Propios'
    },
    {
      src: '/img/canales/tr.png',
      text: 'Canales exclusivos Omnicanal'
    },
    {
      src: '/img/canales/c.png',
      text: 'Tecnología'
    },
    {
      src: '/img/canales/br.png',
      text: 'Seguimiento permanente'
    },
    {
      src: '/img/canales/br.png',
      text: 'Experiencia de usuario (ux)'
    }
  ]
  return (
    <div className="">
      <section ref={ref}>
        <div
          className="container bg-primary max-w-full"
          style={{ height: '400vh' }}
        >
          <div className="debug2 sticky-wrapper sticky top-0 h-[100vh] w-full flex flex-col items-start justify-center overflow-hidden">
            <motion.div
              variants={boxVariant}
              className="debug1 w-3/4 h-full mx-auto flex flex-col justify-between text-center text-white"
            >
              <motion.div
                variants={boxVariant}
                className="debug1 flex flex-row justify-around  "
              >
                <motion.div
                  variants={boxVariant}
                  style={{ x: movementFromLeft }}
                  className="debug2 w-1/3 flex flex-col items-center"
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
                  style={{ x: movementFromRigth }}
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
              <motion.div className=" self-center  flex flex-row">
                <motion.div className="  flex flex-col items-center">
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
              <motion.div className="flex flex-row justify-around">
                <motion.div className=" w-1/3 flex flex-col items-center">
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
                <motion.div className="w-1/3  flex flex-col items-center ">
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
          </div>
        </div>
      </section>
    </div>
  )
}
