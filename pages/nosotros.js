import React from 'react'
import Head from 'next/head'
import { HeroBox } from '../components/Boxes/HeroBox'
import { InfiniteBox } from '../components/Boxes/Animated/InfiniteBox'
import { MapBox } from '../components/Boxes/Animated/MapBox'
import { CalltoAction } from '../components/Boxes/CalltoAction'

const Nosotros = () => {
  return (
    <div>
      <Head>
        <title>Care Assistance - Nosotros</title>
        <meta name="description" content="Nosotros" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroBox
        prevText='Hola,'
        first='Somos'
        accent='Care Assistance'
        sub='Y contamos con la plataforma de salud y bienestar más avanzada de Latinoamérica'
        image='/images/IMG_12.jpg'
      />
      <InfiniteBox />
      <MapBox />
      <CalltoAction question={'¿Quieres sumar estos beneficios a tu empresa?'} buttonText={'Contáctanos'} />

    </div>
  )
}

export default Nosotros