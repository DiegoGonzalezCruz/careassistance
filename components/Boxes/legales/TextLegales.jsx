import React, { useEffect } from 'react'

export const TextLegales = ({ textLegales }) => {
  console.log(textLegales, 'textLegales')
  return (
    <div className="bg-primary text-white items-center">
      <div className="w-3/4 mx-auto py-10">
        {textLegales && textLegales?.content?.rendered && (
          <div
            dangerouslySetInnerHTML={{
              __html: textLegales.content?.rendered
            }}
          />
        )}
      </div>
    </div>
  )
}
