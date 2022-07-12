import { Field, Form, Formik } from 'formik'
import React from 'react'
import TextInput from './Input'

export const FormSimple = () => {
  const handleSubmit = (val) => console.log(val, 'values')
  return (
    <div className="flex flex-col items-center w-screen min-h-[80vh] bg-white pt-20">
      <div className="forma absolute left-0 top-1/2 -translate-x-60 -rotate-45 translate-y-1/2">
        <div className="border-primary border-2 rounded-full w-[25rem] h-24 flex items-center justify-center">
          <div className="border-primary border-4 rounded-full w-[10rem] h-12 translate-y-full"></div>
        </div>
      </div>
      <Formik
        initialValues={{
          nombre: '',
          email: '',
          mensaje: '',
          telefono: '',
          pais: ''
        }}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form>
          <h1 className="text-primary text-2xl">Déjanos tus datos</h1>
          <div className="flex flex-col md:w-96 gap-10 ">
            <TextInput
              label="Nombre y apellidos"
              name="nombre"
              type="text"
              placeholder="Ingresa tu nombre y apellido"
            />
            <TextInput
              label="Email"
              name="email"
              type="email"
              placeholder="Ingresa tu correo electrónico"
            />
            <TextInput
              label="Telefono"
              name="telefono"
              type="text"
              placeholder="Ingresa tu teléfono"
            />
            <TextInput
              label="País"
              name="pais"
              type="text"
              placeholder="Ingresa tu país"
            />
            <TextInput
              label="Mensaje"
              name="mensaje"
              type="text"
              placeholder="Ingresa tu mensaje"
            />

            <button
              className="btn btn-primary rounded-full text-white my-4"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </Form>
      </Formik>
      <div className="text-primary my-5">
        <p>Puedes escribirnos a:</p>
        <p>contacto@careassistance.com</p>
      </div>
      <div className="forma absolute right-0 bottom-0 translate-x-60 -translate-y-1/2 -rotate-45">
        <div className="border-primary border-2 rounded-full w-[25rem] h-24 flex items-center justify-center">
          <div className="border-primary border-4 rounded-full w-[10rem] h-12 translate-y-full relative"></div>
          <div className="rounded-full bg-accent w-8 h-8 absolute top-0 left-10 -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  )
}
