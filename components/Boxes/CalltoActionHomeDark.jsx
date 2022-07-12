import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { boxVariants, buttonsVariants } from '../../styles/animations'

export const CalltoActionHomeDark = ({ question, buttonText }) => {
  return (
    <div className="w-screen h-[50vh] bg-accent relative overflow-hidden">
      <div className="w-3/4 h-full mx-auto">
        <div className="forma absolute left-0 top-1/2 -translate-x-60 -rotate-45 translate-y-1/2">
          <div className="border-primary border-2 rounded-full w-[25rem] h-24 flex items-center justify-center">
            <div className="border-primary border-4 rounded-full w-[10rem] h-12 translate-y-full"></div>
          </div>
        </div>
        <div className="flex flex-col text-center text-base-200 h-full w-full">
          <motion.div
            variants={boxVariants}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col items-center justify-center gap-10  w-full max-w-3xl mx-auto h-full px-4"
          >
            <h1 className="text-2xl font-semibold ">{question}</h1>
            <Link href="/contacto">
              <motion.button
                variants={buttonsVariants}
                whileHover={'hover'}
                whileInView="visible"
                className="rounded-full h-10 btn-primary w-fit px-5 bg-base-200"
              >
                {buttonText}
              </motion.button>
            </Link>
          </motion.div>
          <div className="forma absolute right-0 top-1/2 translate-x-60 -translate-y-1/2 -rotate-45">
            <div className="border-primary border-2 rounded-full w-[25rem] h-24 flex items-center justify-center">
              <div className="border-primary border-4 rounded-full w-[10rem] h-12 translate-y-full relative"></div>
              <div className="rounded-full bg-base-200 w-8 h-8 absolute top-0 left-10 -translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
