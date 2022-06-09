import React from 'react'
import Head from 'next/head'
import { HeroBox } from '../Components/Boxes/HeroBox'
import { BoxClientes } from '../Components/Boxes/BoxClientes'
import { Testimonios } from '../Components/Boxes/Testimonios/Testimonios'
import { CalltoAction } from '../Components/Boxes/CalltoAction'

const Clientes = () => {
  return (
    <div>
      <Head>
        <title>Care Assistance - Clientes</title>
        <meta name="description" content="Clientes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroBox
        prevText='Clientes'
        first='El respaldo de nuestro'
        accent='trabajo'
        sub='Entregamos un valor agregado a nuestros clientes al brindar soluciones a través de programas únicos e innovadores.'
        image='/images/manos-unidas.png'
      // buttonText='Ver programas'
      // buttonHref='/programas'
      />
      <BoxClientes />
      <Testimonios />
      <CalltoAction question={'Te gustaría tener más información de nuestros programas de salud y bienestar?'} buttonText={'Contáctanos'} />

    </div>
  )
}

export default Clientes