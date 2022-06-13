import React from 'react'

export const AnimatedBox1 = ({ text }) => {
  return (
    <div className="bg-primary text-white h-screen flex items-center justify-center">
      <div className="flex items-center justify-center">
        <h3 className="text-white text-xl">{text}</h3>
      </div>
    </div>
  )
}
