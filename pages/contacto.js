import React from 'react'
import Head from 'next/head'
import { Field, Form, Formik } from 'formik'

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
        <div className='flex flex-col w-3/4 mx-auto'>
          <Formik initialValues={{ nombre: '', email: '', mensaje: '' }} onSubmit={(values) => handleSubmit(values)}>
            <Form>
              <div className='flex flex-col w-1/2'>
                <label htmlFor='nombre'>Nombre</label>
                <Field type='text' name='nombre' placeholder='Nombre' className='form-control focus:secondary' />
                <label htmlFor='email'>Email</label>
                <Field type='email' name='email' placeholder='Email' className='form-control' />
                <label htmlFor='mensaje'>Mensaje</label>
                <Field type='textarea' name='mensaje' placeholder='Mensaje' className='form-control h-48 text-neutral' />
                <button className='btn btn-accent text-white my-4' type='submit'>Enviar</button>
              </div>
            </Form>

          </Formik>


        </div>
      </div>
    </div>
  )
}

export default Contacto