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
    <div className="w-screen h-[50vh] bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={boxVariants}
        className="flex flex-col text-center text-primary h-full w-full"
      >
        <motion.div
          variants={boxVariants}
          whileInView="visible"
          className="flex flex-col items-center justify-center gap-10  w-full max-w-3xl mx-auto h-full px-4"
        >
          <h1 className="text-5xl font-semibold ">{question}</h1>
          <Link href="/contacto">
            <motion.button
              variants={buttonsVariants}
              whileHover={'hover'}
              whileInView="visible"
              className="rounded-full h-10 btn-primary w-48"
            >
              {buttonText}
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
