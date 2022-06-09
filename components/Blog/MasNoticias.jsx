import React from 'react'
import { CalltoAction } from '../Boxes/CalltoAction'
import { BlogPost } from './BlogPost'

export const MasNoticias = () => {
  return (
    <div className="bg-primary">
      <div>
        <h2 className="text-white">
          Más <span className="text-accent">noticias</span>
        </h2>
      </div>
      <div className="categories">
        <button className="btn btn-accent text-white">Todos</button>
        <button className="btn btn-primary text-white">Salud</button>
        <button className="btn btn-primary text-white">Tecnología</button>
        <button className="btn btn-primary text-white">Comunicación</button>
      </div>
      <div className="flex flex-wrap gap-10">
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </div>
      <CalltoAction
        question={
          'Te gustaría tener más información de nuestros programas de salud y bienestar?'
        }
        buttonText={'Contáctanos'}
      />
    </div>
  )
}
