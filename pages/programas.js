import React from 'react'
import Head from 'next/head'
import { HeroBox } from '../Components/Boxes/HeroBox'
import { ComoFuncionanNuestrosProgramas } from '../Components/Boxes/Animated/ComoFuncionanNuestrosProgramas'
import { NuestrosProgramas } from '../Components/Boxes/Animated/NuestrosProgramas'
import { NuestroProposito } from '../Components/Boxes/NuestroProposito'
import { CanalesAtencion } from '../Components/Boxes/CanalesAtencion'
import { CalltoAction } from '../Components/Boxes/CalltoAction'

const Programas = () => {
  return (
    <div>
      <Head>
        <title>Care Assistance - Programas</title>
        <meta name="description" content="Programas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroBox
        prevText='Nuestros programas'
        first='Salud y bienestar a través de nuestra'
        accent='Clínica Virtual'
        sub='Brindamos un servicio cuidadosamente diseñado para lograr efectividad en el cumplimiento de los objetivos planteados en los programas de salud y bienestar.'
        image='/images/IMG_12.jpg'
        buttonText='Ver programas'
        buttonHref='/programas'
      />
      <ComoFuncionanNuestrosProgramas />
      <NuestrosProgramas />
      <NuestroProposito />
      <CanalesAtencion />
      <CalltoAction question={'Quieres sumar estos beneficios a tu empresa'} buttonText={'Quiero que me contacten'} />

    </div>
  )
}

export default Programas