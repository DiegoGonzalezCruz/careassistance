import React from 'react'
import Head from 'next/head'
import { Field, Form, Formik } from 'formik'
import { FormSimple } from '../components/Forms/FormSimple'
import { motion } from 'framer-motion'
import { overlayVariants } from '../styles/animations'

const Contacto = () => {
  const handleSubmit = (values) => {
    // console.log(values)
  }
  return (
    <div className='w-screen'>
      <Head>
        <title>Care Assistance - Contacto</title>
        <meta name="description" content="Contacto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={overlayVariants}
        className='bg-primary text-white flex flex-col items-center w-full '>
        <motion.h1
          variants={overlayVariants}
        >Contacto</motion.h1>
        <motion.div
          variants={overlayVariants}

          className='flex md:flex-row flex-col items-center my-5'>
          <div className='md:w-1/2 w-full text-center my-4 px-4 lg:px-10 self-start'>
            <p>
              Cillum qui nulla et magna ea non aliquip commodo officia nisi. Do deserunt elit sunt non non velit ea. Ullamco incididunt deserunt Lorem mollit amet occaecat deserunt cupidatat aute nulla. Laboris sint culpa velit amet elit et occaecat ad deserunt tempor anim amet et mollit. Do ullamco officia officia cupidatat laboris pariatur velit magna Lorem ad ipsum.
            </p>
          </div>
          <motion.div
            variants={overlayVariants}
            className='md:w-1/2 w-full m-4' >
            <FormSimple />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Contacto