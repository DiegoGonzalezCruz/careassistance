import React from 'react'

export const AnimatedBox1 = ({ text }) => {
  return (
    <div className="bg-primary text-white">
      <div className="h-screen flex items-center justify-center">
        <h3 className="text-white text-7xl">{text}</h3>
      </div>
    </div>
  )
}
