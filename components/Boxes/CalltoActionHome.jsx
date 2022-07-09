import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { boxVariants, buttonsVariants } from '../../styles/animations'

const fig1 = (
  <svg
    width="276"
    height="564"
    viewBox="0 0 276 564"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="-716.879"
      y="781.578"
      width="1190"
      height="299"
      rx="149.5"
      transform="rotate(-45 -716.879 781.578)"
      stroke="#6666FF"
      stroke-width="3"
    />
    <rect
      y="-4.24264"
      width="483.367"
      height="54.8103"
      rx="27.4051"
      transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 -141.001 662.793)"
      fill="white"
      stroke="#6666FF"
      stroke-width="6"
    />
  </svg>
)

export const CalltoActionHome = ({ question, buttonText }) => {
  return (
    <div className="w-screen h-[50vh] bg-white relative overflow-hidden">
      <div className="forma absolute left-0 top-1/2 -translate-x-60 -rotate-45 translate-y-1/2">
        <div className="border-primary border-2 rounded-full w-[25rem] h-24 flex items-center justify-center">
          <div className="border-primary border-4 rounded-full w-[10rem] h-12 translate-y-full"></div>
        </div>
      </div>
      <div className="flex flex-col text-center text-primary h-full w-full">
        <motion.div
          variants={boxVariants}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col items-center justify-center gap-10  w-full max-w-3xl mx-auto h-full px-4"
        >
          <h1 className="text-4xl font-semibold ">{question}</h1>
          <Link href="/contacto">
            <motion.button
              variants={buttonsVariants}
              whileHover={'hover'}
              whileInView="visible"
              className="rounded-full h-10 btn-primary w-fit px-5"
            >
              {buttonText}
            </motion.button>
          </Link>
        </motion.div>
        <div className="forma absolute right-0 top-1/2 translate-x-60 -translate-y-1/2 -rotate-45">
          <div className="border-primary border-2 rounded-full w-[25rem] h-24 flex items-center justify-center">
            <div className="border-primary border-4 rounded-full w-[10rem] h-12 translate-y-full relative"></div>
            <div className="rounded-full bg-accent w-8 h-8 absolute top-0 left-10 -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
