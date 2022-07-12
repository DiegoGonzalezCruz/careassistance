import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { useElementViewPortPosition } from '../hooks/useElementViewPortPosition'

export const BoxWhiteBGImage = () => {
  const ref = useRef(null)

  const {
    position: [xValue, yValue]
  } = useElementViewPortPosition(ref)

  const { scrollYProgress } = useViewportScroll()
  const sizeTransformation = useTransform(
    scrollYProgress,
    [xValue, yValue * 0.95],
    [50, 1]
  )

  const boxVariants = {
    hidden: {
      opacity: 0,
      y: '-100vh'
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  // scrollY.onChange((v) => console.log(v))

  return (
    <div className="w-screen ">
      <section ref={ref}>
        <div
          className="container bg-white max-w-full "
          style={{ height: '600vh' }}
        >
          <div className=" h-[100vh] absolute z-10 flex flex-col items-center justify-center px-20 w-1/2 ">
            <p className="text-white text-4xl font-FiraSans font-normal">
              Mejorar el bienestar de las personas a través de programas de
              acompañamiento para la{' '}
              <span className="text-accent">
                adopción de hábitos saludables.
              </span>
            </p>
          </div>
          <div className="sticky-wrapper sticky top-0 h-[100vh] w-full flex flex-col items-start justify-center overflow-hidden ">
            <motion.div
              initial={false}
              variants={boxVariants}
              className="overflow-hidden flex flex-row items-center justify-center w-full h-full"
            >
              <motion.div
                variants={boxVariants}
                className="w-1/2 flex items-center justify-center h-full flex-col"
              >
                <div className="w-3/4 flex flex-col gap-4 ">
                  <h2 className="text-primary">¿Cómo lo hacemos?</h2>
                  <ul className="gap-2 flex flex-col list-disc list-inside">
                    <li>Know how.</li>
                    <li>Profesionales propios inhouse.</li>
                    <li>Seguimiento y derivación.</li>
                    <li>Tecnología.</li>
                    <li>Trabajo multidisciplinario</li>
                  </ul>
                  <h2 className="text-primary">¿Qué ofrecemos?</h2>
                  <p>
                    Por medio de programas complementarios entre sí, ofrecemos
                    el ecosistema de salud y bienestar más avanzado de
                    Latinoamérica.
                  </p>
                </div>
              </motion.div>

              <motion.div
                style={{
                  scale: sizeTransformation,
                  originY: '25%',
                  originX: '53%'
                }}
                variants={boxVariants}
                className="relative w-1/2 h-96 overflow-hidden "
              >
                <Image
                  src={'/img/animations/building.svg'}
                  layout="fill"
                  alt="proposito"
                  className="overflow-hidden"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>

    // **** DELETE
  )
}
