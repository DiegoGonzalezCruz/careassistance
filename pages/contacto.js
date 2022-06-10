import React from 'react'
import Head from 'next/head'
import { Field, Form, Formik } from 'formik'
import { FormSimple } from '../components/Forms/FormSimple'

const Contacto = () => {

  const handleSubmit = (values) => {
    console.log(values)
  }
  return (
    <div>
      <Head>
        <title>Care Assistance - Contacto</title>
        <meta name="description" content="Contacto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='bg-primary text-white'>
        <h1>Contacto</h1>
        <FormSimple />
      </div>
    </div>
  )
}

export default Contacto