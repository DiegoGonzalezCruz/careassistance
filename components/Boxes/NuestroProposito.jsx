import React from 'react'

export const NuestroProposito = () => {
  return (
    <div className="p-5 w-screen">
      <div className="w-full items-center flex flex-col gap-2">
        <h1>Nuestro propósito</h1>
        <div className="flex flex-row gap-4">
          <button className="btn btn-primary rounded-2xl">¿Qué?</button>
          <button className="btn btn-primary rounded-2xl">Cómo?</button>
          <button className="btn btn-primary rounded-2xl">Solución?</button>
        </div>
        <div>Por definir</div>
      </div>
    </div>
  )
}
