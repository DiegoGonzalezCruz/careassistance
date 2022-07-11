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
        prevText='Buscamos'
        text='paradigmas'
        accent='revolucionar'
        sub='Transformamos los desafíos en oportunidades.'
        image='/img/nosotros/Nosotros-Banner1.png'
        buttonText='Nuestros clientes'
      />
      <InfiniteBox />
      <MapBox />
      <CalltoAction question={'¿Quieres sumar estos beneficios a tu empresa?'} buttonText={'Contáctanos'} />

    </div>
  )
}

export default Nosotros