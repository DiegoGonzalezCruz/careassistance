import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'
import useElementViewPortPosition from '../../Hooks/useElementViewPortPosition'

export const MapBox = () => {
  //TODO: Eliminar overflow del mapa
  const ref = useRef(null)
  const {
    position: [start, end]
  } = useElementViewPortPosition(ref)
  const range = [start + start * 0.1, (start + end) / 2, end - end * 0.02]
  const movementX = ['0%', '-20%', '-100%']
  const movementY = ['0%', '-10%', '-160%']

  const { scrollYProgress } = useViewportScroll()

  const xMove = useTransform(scrollYProgress, range, movementX)
  const yMove = useTransform(scrollYProgress, range, movementY)
  const zoomIn = useTransform(scrollYProgress, range, [1, 3, 3])

  return (
    <div className="w-screen">
      <section ref={ref} className="">
        <div className="container max-w-full h-[450vh] overflow-visible debug1 bg-base-200 w-full">
          <div className=" debug1 sticky top-0 left-0 w-screen h-screen flex flex-row items-start justify-center overflow-hidden ">
            <motion.div
              className="relative w-full h-full bg-base-200 "
              style={{
                originX: '10%',
                originY: '10%',
                scale: zoomIn,
                x: xMove,
                y: yMove
              }}
            >
              <Image
                src={'/img/nosotros/mapa.svg'}
                layout="fill"
                objectFit="contain"
                alt="mapa"
              />
            </motion.div>
            {/* <div className="w-1/2 h-full bg-base-200 flex items-center relative">
              <div className="w-3/4 mx-auto">
                <p className="text-white md:text-xl">
                  Disponemos de un firme recorrido en
                  <span className="text-accent"> Chile y México</span>, donde
                  incorporamos el know-how necesario e invertimos en el
                  perfeccionamiento tecnológico, con el que nos posicionamos
                  como actores de cambio en el ámbito de la telemedicina y la
                  atención en salud y bienestar.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  )
}
