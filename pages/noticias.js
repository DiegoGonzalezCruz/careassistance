import React from 'react'
import Head from 'next/head'
import { HeroBox } from '../Components/Boxes/HeroBox'
import { NoticiasDestacadas } from '../Components/Blog/Destacadas'
import { MasNoticias } from '../Components/Blog/MasNoticias'

const Noticias = () => {
  return (
    <div>
      <Head>
        <title>Care Assistance - Noticias</title>
        <meta name="description" content="Noticias" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroBox
        prevText='Noticias'
        first='Bienvenidos a nuestro'
        accent='blog'
        sub='Te intivamos a conocer más de nosotros a través de nuestras noticias y artículos de interés.'
        image='/images/manos-unidas.png'
      // buttonText='Ver programas'
      // buttonHref='/programas'
      />
      <NoticiasDestacadas />
      <MasNoticias />
    </div>
  )
}

export default Noticias