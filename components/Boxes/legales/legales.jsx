import React from 'react'

export const Legales = ({ title, text }) => {
  return (
    <div className="bg-primary text-white items-center">
      <div className="text-center py-10">
        <h1>{title}</h1>
      </div>
      <div className="w-3/4 mx-auto py-10">{text}</div>
    </div>
  )
}
