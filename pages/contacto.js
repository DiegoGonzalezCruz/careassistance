import React from 'react'
import Head from 'next/head'
import { Field, Form, Formik } from 'formik'
import { FormSimple } from '../components/Forms/FormSimple'
import { motion } from 'framer-motion'
import { overlayVariants } from '../styles/animations'

import { HeroBoxContacto } from '../components/Boxes/HeroBoxContacto'

const Contacto = () => {
  const handleSubmit = (values) => {
    // console.log(values)
  }
  return (
    <div className='w-screen min-h-screen'>
      <Head>
        <title>Care Assistance - Contacto</title>
        <meta name="description" content="Contacto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroBoxContacto
        prevText=''
        text=''
        accent='Contáctanos'
        sub='¿Tienes preguntas, sugerencias o comentarios?'
        image='/img/contacto/contactobanner.png'
        buttonText='Nuestros clientes'
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={overlayVariants}
        className='bg-primary text-white flex flex-col items-center w-full '>


        <FormSimple />

      </motion.div>
    </div>
  )
}

export default Contacto