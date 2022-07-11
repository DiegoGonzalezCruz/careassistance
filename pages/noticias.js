import React from 'react'
import Head from 'next/head'
import { NoticiasDestacadas } from '../components/Blog/Destacadas'
import { MasNoticias } from '../components/Blog/MasNoticias'
import { HeroBoxBlog } from '../components/Boxes/HeroBoxBlog'

const Noticias = () => {
  return (
    <div>
      <Head>
        <title>Care Assistance - Noticias</title>
        <meta name="description" content="Noticias" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroBoxBlog
        prevText='Bienvenidos a nuestro'
        first='blog'
        accent='blog'
        sub='Te intivamos a conocer más de nosotros a través de nuestras noticias y artículos de interés.'
        image='/img/blog/headerblog.png'
      // buttonText='Ver programas'
      // buttonHref='/programas'
      />
      <NoticiasDestacadas />
      <MasNoticias />
    </div>
  )
}

export default Noticias