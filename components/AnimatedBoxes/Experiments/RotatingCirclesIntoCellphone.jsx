import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { useElementViewportPosition } from '../../hooks/useElementViewPortPosition'

// TODO: https://codesandbox.io/s/framer-motion-scroll-forked-eiomo1?file=/src/App.js

export const RotatingCirclesIntoCellphone = () => {
  const ref = useRef(null)
  const {
    position: [start, end]
  } = useElementViewportPosition(ref)

  const { scrollYProgress } = useViewportScroll()

  const range = [start, end * 0.95, end]
  const movementFromLeft = [-1000, -100, 0]
  const movementFromRight = [1000, 100, 0]

  const rotationRange = [start, end - end * 0.05]
  const rotationArray = [0, 360]

  const movementFromLeftAnimation = useTransform(
    scrollYProgress,
    range,
    movementFromLeft
  )
  const movementFromRightAnimation = useTransform(
    scrollYProgress,
    range,
    movementFromRight
  )
  const rotationMovement = useTransform(
    scrollYProgress,
    rotationRange,
    rotationArray
  )

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

  const imagesTop = [
    {
      src: '/img/canales/tl.png',
      text: 'Profesionales Propios'
    },
    {
      src: '/img/canales/tr.png',
      text: 'Canales exclusivos Omnicanal'
    }
  ]
  const imagesCenter = [
    {
      src: '/img/canales/c.png',
      text: 'Tecnología'
    }
  ]
  const imagesBottom = [
    {
      src: '/img/canales/bl.png',
      text: 'Seguimiento permanente'
    },
    {
      src: '/img/canales/br.png',
      text: 'Experiencia de usuario (ux)'
    }
  ]
  return (
    <div className="w-screen">
      <section ref={ref}>
        <div className="container max-w-full h-[450vh] bg-primary ">
          <div className=" sticky-wrapper sticky top-0 w-screen h-screen flex flex-col items-start justify-center overflow-hidden ">
            <div className="bg-[url('/img/canales/cellphone.svg')] bg-center bg-no-repeat bg-contain h-2/3 w-full flex flex-col items-center justify-around ">
              <div className="flex flex-row justify-around w-1/3 ">
                <motion.div
                  className="flex flex-col items-center w-24"
                  style={{
                    x: movementFromLeftAnimation,
                    rotate: rotationMovement
                  }}
                >
                  <div className="relative h-24 w-24">
                    <Image src={imagesTop[0].src} layout="fill" />
                  </div>
                  <p className="text-white text-center">{imagesTop[0].text}</p>
                </motion.div>
                <motion.div
                  className="flex flex-col items-center w-24"
                  style={{
                    x: movementFromRightAnimation,
                    rotate: rotationMovement
                  }}
                >
                  <div className="relative h-24 w-24">
                    <Image src={imagesTop[1].src} layout="fill" />
                  </div>
                  <p className="text-white text-center">{imagesTop[1].text}</p>
                </motion.div>
              </div>

              <div className="flex flex-row justify-around w-1/3 ">
                <motion.div
                  style={{
                    y: movementFromLeftAnimation,
                    rotate: rotationMovement
                  }}
                  className="flex flex-col items-center w-24"
                >
                  <div className="relative h-24 w-24">
                    <Image src={imagesCenter[0].src} layout="fill" />
                  </div>
                  <p className="text-white text-center">
                    {imagesCenter[0].text}
                  </p>
                </motion.div>
              </div>

              <div className="flex flex-row justify-around w-1/3 ">
                <motion.div
                  style={{
                    x: movementFromLeftAnimation,
                    rotate: rotationMovement
                  }}
                  className="flex flex-col items-center w-24"
                >
                  <div className="relative h-24 w-24">
                    <Image src={imagesBottom[0].src} layout="fill" />
                  </div>
                  <p className="text-white text-center">
                    {imagesBottom[0].text}
                  </p>
                </motion.div>
                <motion.div
                  style={{
                    x: movementFromRightAnimation,
                    rotate: rotationMovement
                  }}
                  className="flex flex-col items-center w-24"
                >
                  <div className="relative h-24 w-24">
                    <Image src={imagesBottom[1].src} layout="fill" />
                  </div>
                  <p className="text-white text-center">
                    {imagesBottom[1].text}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
