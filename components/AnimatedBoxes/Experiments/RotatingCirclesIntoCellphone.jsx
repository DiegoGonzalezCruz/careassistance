import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import useElementViewPortPosition from '../../Hooks/useElementViewPortPosition'
import { MiddleLane } from './MiddleLane'
import { TopLane } from './TopLane'
import { BottomLane } from './BottomLane'

// TODO: https://codesandbox.io/s/framer-motion-scroll-forked-eiomo1?file=/src/App.js
// TODO: Disminuir scroll a la mitad

export const RotatingCirclesIntoCellphone = () => {
  const ref = useRef(null)
  const {
    position: [start, end]
  } = useElementViewPortPosition(ref)

  const { scrollYProgress } = useViewportScroll()

  const range = [start - start * 0.1, (start + end) / 2, end - end * 0.02]
  const rangeOpacity = [start, ((start + end) / 100) * 99, end - end * 0.05]
  const opacityRange = useTransform(scrollYProgress, range, [0, 0, 1])
  const opacityRangeInverted = useTransform(scrollYProgress, range, [1, 1, 0])

  const initialInhouseMovementX = ['-40vw', '-5vw', '0vw']
  const initialInhouseMovementY = ['-100vh', '-10vh', '0vh']
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
  const initialCanalesMovementY = ['-70vh', '-5vh', '0vh']
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

  const initialTecnologiaMovementX = ['0vw', '5vw', '0vw']
  const initialTecnologiaMovementY = ['-70vh', '-15vh', '0vh']
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
  const initialSeguimientoMovementY = ['-30vh', '5vh', '0vh']
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
  const initialUxMovementX = ['40vw', '20vw', '0vw']
  const initiallUxMovementY = ['20vh', '5vh', '0vh']
  const uxScale = [3, 1.2, 1]
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
  const iconVariants = {
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween'
      }
    },
    offscreen: {
      opacity: 0,
      x: -100
    }
  }

  const image = '/img/home/experienciaunica.png'
  const text =
    'Con el objetivo de brindar un servicio integral, nuestro ecosistema de salud y bienestar está compuesto por diversos programas complementarios entre sí.'
  const title = 'Experiencia única '

  return (
    <div className="w-screen  ">
      <div
        className={`bg-primary flex overflow-hidden min-h-[80vh] w-screen relative`}
      >
        <div className="flex flex-col md:flex-row-reverse w-full items-center justify-center ">
          <motion.div
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.1 }}
            initial="offscreen"
            variants={iconVariants}
            className="relative h-full w-full  translate-x-10 flex items-center  "
          >
            <div className="w-full h-1/2 rounded-l-2xl relative overflow-hidden ">
              <Image
                src={image}
                className="max-w-sm shadow-2xl "
                layout="fill"
                objectFit="cover"
                alt={title}
              />
            </div>
          </motion.div>
          <motion.div
            variants={iconVariants}
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.1 }}
            initial="offscreen"
            className={` text-white w-full h-full px-5 flex flex-col items-center justify-center `}
          >
            <div className=" w-3/4 mx-auto z-40">
              <h2 className="font-bold text-accent">{title}</h2>
              <p className="py-6">{text}</p>
            </div>
          </motion.div>
        </div>
      </div>
      <section ref={ref}>
        <div className="container max-w-full h-[350vh] bg-primary  overflow-y-visible overflow-x-clip ">
          <div className=" sticky-wrapper sticky top-0 w-screen h-screen flex flex-col items-start justify-center  ">
            <div className="bg-[url('/img/canales/cellphone.svg')] bg-center bg-no-repeat bg-contain h-2/3 w-full flex flex-col items-center justify-around ">
              {/* Primera Linea */}
              {/* Profesionales Propios */}
              <TopLane
                imagesTop={imagesTop}
                objectScaling={objectScaling}
                opacityRangeInverted={opacityRangeInverted}
                opacityRange={opacityRange}
                inhouseMovementX={inhouseMovementX}
                inhouseMovementY={inhouseMovementY}
                canalesMovementX={canalesMovementX}
                canalesMovementY={canalesMovementY}
              />
              {/* Fila Tecnología */}
              {/* Figura Tecnologia */}
              <MiddleLane
                imagesCenter={imagesCenter}
                tecnologiaMovementX={tecnologiaMovementX}
                tecnologiaMovementY={tecnologiaMovementY}
                objectScaling={objectScaling}
                opacityRange={opacityRange}
                opacityRangeInverted={opacityRangeInverted}
              />

              <BottomLane
                seguimientoMovementX={seguimientoMovementX}
                seguimientoMovementY={seguimientoMovementY}
                objectScaling={objectScaling}
                opacityRange={opacityRange}
                imagesBottom={imagesBottom}
                uxMovementX={uxMovementX}
                uxMovementY={uxMovementY}
                opacityRangeInverted={opacityRangeInverted}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
