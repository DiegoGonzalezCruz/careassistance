import React from 'react'
import Head from 'next/head'
import { HeroBox } from '../Components/Boxes/HeroBox'
import { InfiniteBox } from '../Components/Boxes/Animated/InfiniteBox'
import { MapBox } from '../Components/Boxes/Animated/MapBox'
import { CalltoAction } from '../Components/Boxes/CalltoAction'

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
      <CalltoAction buttonText={'¿Quieres sumar estos beneficios a tu empresa?'} question={'Contáctanos'} />

    </div>
  )
}

export default Nosotros