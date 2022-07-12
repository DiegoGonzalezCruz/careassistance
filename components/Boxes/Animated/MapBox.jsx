import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'
import useElementViewPortPosition from '../../Hooks/useElementViewPortPosition'

export const MapBox = () => {
  const ref = useRef(null)
  const {
    position: [start, end]
  } = useElementViewPortPosition(ref)
  const range = [start - start * 0.1, (start + end) / 2, end - end * 0.02]
  const movementX = ['100', '200', '350']
  const movementY = ['0', '200', '350']

  const { scrollYProgress } = useViewportScroll()

  const xMove = useTransform(scrollYProgress, range, movementX)

  return (
    <div className="w-screen">
      <section ref={ref}>
        <div className="container max-w-full h-[450vh] bg-white overflow-visible">
          <div className=" sticky-wrapper sticky top-0 w-screen h-screen flex flex-row items-start justify-center  ">
            <motion.div
              className="relative w-1/2 h-full bg-base-200 "
              style={{
                originX: '10%',
                originY: '10%'
              }}
            >
              <Image
                src={'/img/nosotros/mapa.svg'}
                layout="fill"
                objectFit="contain"
                alt="mapa"
              />
            </motion.div>
            <div className="w-1/2 h-full bg-base-200 flex items-center">
              <p className="text-white text-xl">
                Disponemos de un firme recorrido en
                <span className="text-accent"> Chile y México</span>, donde
                incorporamos el know-how necesario e invertimos en el
                perfeccionamiento tecnológico, con el que nos posicionamos como
                actores de cambio en el ámbito de la telemedicina y la atención
                en salud y bienestar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
