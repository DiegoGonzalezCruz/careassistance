import { Field, Form, Formik } from 'formik'
import React from 'react'

export const FormSimple = () => {
  return (
    <div className="flex flex-col items-center w-full ">
      <Formik
        initialValues={{ nombre: '', email: '', mensaje: '' }}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form>
          <div className="flex flex-col md:w-96 gap-4">
            <label htmlFor="nombre">
              <h3 className="text-white">Nombre:</h3>
            </label>
            <Field
              type="text"
              name="nombre"
              placeholder="Nombre"
              className="form-control focus:secondary"
            />
            <label htmlFor="email">
              <h3 className="text-white">Email:</h3>
            </label>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="form-control "
            />
            <label htmlFor="mensaje">
              <h3 className="text-white">Mensaje:</h3>
            </label>
            <Field
              type="textarea"
              name="mensaje"
              placeholder="Mensaje"
              className="form-control h-48 text-neutral"
            />
            <button className="btn btn-accent text-white my-4" type="submit">
              Enviar
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}
