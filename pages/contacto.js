import React from 'react'
import Head from 'next/head'
import { Field, Form, Formik } from 'formik'
import { FormSimple } from '../components/Forms/FormSimple'

const Contacto = () => {

  const handleSubmit = (values) => {
    console.log(values)
  }
  return (
    <div className='w-screen'>
      <Head>
        <title>Care Assistance - Contacto</title>
        <meta name="description" content="Contacto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='bg-primary text-white flex flex-col items-center w-full '>
        <h1>Contacto</h1>
        <div className='flex md:flex-row flex-col items-center my-5'>
          <div className='md:w-1/2 w-full text-center my-4 px-4 lg:px-10 self-start'>
            <p>
              Cillum qui nulla et magna ea non aliquip commodo officia nisi. Do deserunt elit sunt non non velit ea. Ullamco incididunt deserunt Lorem mollit amet occaecat deserunt cupidatat aute nulla. Laboris sint culpa velit amet elit et occaecat ad deserunt tempor anim amet et mollit. Do ullamco officia officia cupidatat laboris pariatur velit magna Lorem ad ipsum.
            </p>
          </div>
          <div className='md:w-1/2 w-full m-4' >
            <FormSimple />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto