import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { boxVariants, buttonsVariants } from '../../styles/animations'

export const CalltoAction = ({ question, buttonText }) => {
  return (
    <div className="w-screen h-[50vh] bg-accent">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={boxVariants}
        className="flex flex-col text-center text-white  h-full w-full"
      >
        <motion.div
          variants={boxVariants}
          whileInView="visible"
          className="flex flex-col items-center justify-center gap-5  w-full max-w-3xl mx-auto h-full px-4"
        >
          <h1 className="text-3xl font-semibold ">{question}</h1>
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
