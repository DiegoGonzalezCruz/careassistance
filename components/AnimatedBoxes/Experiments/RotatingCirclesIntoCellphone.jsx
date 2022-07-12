import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import useElementViewPortPosition from '../../hooks/useElementViewPortPosition'

// TODO: https://codesandbox.io/s/framer-motion-scroll-forked-eiomo1?file=/src/App.js

export const RotatingCirclesIntoCellphone = () => {
  const ref = useRef(null)
  const {
    position: [start, end]
  } = useElementViewPortPosition(ref)

  const { scrollYProgress } = useViewportScroll()

  const range = [start - start * 0.1, (start + end) / 2, end - end * 0.02]
  const rangeOpacity = [start, ((start + end) / 100) * 99, end - end * 0.05]
  const opacityRange = useTransform(scrollYProgress, range, [0, 1, 1])

  const initialInhouseMovementX = ['-40vw', '-25vw', '0vw']
  const initialInhouseMovementY = ['-10vh', '-5vh', '0vh']
  const inhouseMovementX = useTransform(
    scrollYProgress,
    range,
    initialInhouseMovementX
  )
  const inhouseMovementY = useTransform(
    scrollYProgress,
    range,
    initialInhouseMovementY
  )

  const initialCanalesMovementX = ['50vw', '25vw', '0vw']
  const initialCanalesMovementY = ['-40vh', '-5vh', '0vh']
  const canalesMovementX = useTransform(
    scrollYProgress,
    range,
    initialCanalesMovementX
  )
  const canalesMovementY = useTransform(
    scrollYProgress,
    range,
    initialCanalesMovementY
  )

  const initialTecnologiaMovementX = ['-50vw', '-15vw', '0vw']
  const initialTecnologiaMovementY = ['-150vh', '-25vh', '0vh']
  const tecnologiaMovementX = useTransform(
    scrollYProgress,
    range,
    initialTecnologiaMovementX
  )
  const tecnologiaMovementY = useTransform(
    scrollYProgress,
    range,
    initialTecnologiaMovementY
  )

  const initialSeguimientoMovementX = ['-50vw', '-20vw', '0vw']
  const initialSeguimientoMovementY = ['10vh', '5vh', '0vh']
  const seguimientoMovementX = useTransform(
    scrollYProgress,
    range,
    initialSeguimientoMovementX
  )
  const seguimientoMovementY = useTransform(
    scrollYProgress,
    range,
    initialSeguimientoMovementY
  )
  const initialUxMovementX = ['30vw', '10vw', '0vw']
  const initiallUxMovementY = ['30vh', '5vh', '0vh']
  const uxScale = [2, 1.2, 1]
  const uxMovementX = useTransform(scrollYProgress, range, initialUxMovementX)
  const uxMovementY = useTransform(scrollYProgress, range, initiallUxMovementY)
  const objectScaling = useTransform(scrollYProgress, range, uxScale)

  const rotationRange = [start, end - end * 0.05]
  const rotationArray = [0, 360]

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
        <div className="container max-w-full h-[350vh] bg-primary overflow-visible">
          <div className=" sticky-wrapper sticky top-0 w-screen h-screen flex flex-col items-start justify-center  ">
            <div className="bg-[url('/img/canales/cellphone.svg')] bg-center bg-no-repeat bg-contain h-2/3 w-full flex flex-col items-center justify-around ">
              <div className="iconLine flex flex-row justify-around w-1/3  ">
                <motion.div
                  className="flex flex-col items-center w-24 "
                  id="inhouse"
                  style={{
                    translateX: inhouseMovementX,
                    translateY: inhouseMovementY,
                    scale: objectScaling
                    // rotate: rotationMovement,
                    // opacity: opacityRange
                  }}
                >
                  <motion.div className="relative h-24 w-24  rounded-full bg-accent">
                    <Image
                      src={imagesTop[0].src}
                      layout="fill"
                      className=""
                      alt=""
                    />
                  </motion.div>
                  <motion.p className="text-white text-center">
                    {imagesTop[0].text}
                  </motion.p>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center w-24  -translate-y-[500px] translate-x-[300px]  "
                  id="canales"
                  style={{
                    translateX: canalesMovementX,
                    translateY: canalesMovementY,
                    scale: objectScaling
                    // rotate: rotationMovement,
                    // opacity: opacityRange
                  }}
                >
                  <div className="relative h-24 w-24">
                    <Image src={imagesTop[1].src} layout="fill" alt="" />
                  </div>
                  <p className="text-white text-center">{imagesTop[1].text}</p>
                </motion.div>
              </div>

              <div className="flex flex-row justify-around w-1/3 ">
                <motion.div
                  style={{
                    translateX: tecnologiaMovementX,
                    translateY: tecnologiaMovementY,
                    scale: objectScaling
                    // rotate: rotationMovement,
                    // opacity: opacityRange
                  }}
                  id="tecnologia"
                  className="flex flex-col items-center w-24 -translate-y-[500px] "
                >
                  <div className="relative h-24 w-24">
                    <Image src={imagesCenter[0].src} layout="fill" alt="" />
                  </div>
                  <p className="text-white text-center">
                    {imagesCenter[0].text}
                  </p>
                </motion.div>
              </div>

              <div className="flex flex-row justify-around w-1/3 ">
                <motion.div
                  style={{
                    translateX: seguimientoMovementX,
                    translateY: seguimientoMovementY,
                    scale: objectScaling
                    // rotate: rotationMovement
                  }}
                  className="flex flex-col items-center w-24 translate-y-[100px] -translate-x-[300px]  relative"
                >
                  <div className=" absolute h-24 w-24 rounded-full bg-[#00EEFF]"></div>
                  <motion.div
                    style={{
                      opacity: opacityRange
                    }}
                    className="relative h-24 w-24"
                  >
                    <Image src={imagesBottom[0].src} layout="fill" alt="" />
                  </motion.div>
                  <motion.p
                    style={{
                      opacity: opacityRange
                    }}
                    className="text-white text-center"
                  >
                    {imagesBottom[0].text}
                  </motion.p>
                </motion.div>
                <motion.div
                  style={{
                    translateX: uxMovementX,
                    translateY: uxMovementY,
                    scale: objectScaling
                    // rotate: rotationMovement,
                    // opacity: opacityRange
                  }}
                  className="flex flex-col items-center w-24  translate-y-[100px] translate-x-[300px] "
                >
                  <div className="relative h-24 w-24">
                    <Image src={imagesBottom[1].src} layout="fill" alt="" />
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
