import React from 'react'

export const ButtonsLegales = ({ setLegales }) => {
  const handlePolitica = () => setLegales('politicas-de-privacidad')
  const handleCookies = () => setLegales('politicas-de-cookies')

  return (
    <div className="w-screen h-[30vh] ">
      <div className="h-full w-full flex flex-row items-center justify-center gap-10">
        <button onClick={handlePolitica} className="btn btn-secondary">
          Políticas de privacidad
        </button>
        <button onClick={handleCookies} className="btn btn-secondary">
          Políticas de cookies
        </button>
      </div>
    </div>
  )
}
