import React from 'react'
import Head from 'next/head'
import { HeroBox } from '../components/Boxes/HeroBox'
import { BoxClientes } from '../components/Boxes/BoxClientes'
import { CalltoActionHome } from '../components/Boxes/CalltoActionHome'
import { BoxWithImageRight } from '../components/Boxes/BoxWithImageRight'
import { Testimonios } from '../components/Boxes/Testimonios/Testimonios'
import { getTestimonials } from '../laboratory/lib/getTestimonials'

const Clientes = ({ testimonials }) => {
  // console.log(testimonials)
  return (
    <div>
      <Head>
        <title>Care Assistance - Clientes</title>
        <meta name="description" content="Clientes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroBox
        prevText='El respaldo de'
        first='El respaldo de nuestro'
        accent='nuestro trabajo'
        sub='Entregamos un valor agregado a nuestros clientes al brindar soluciones a través de programas únicos e innovadores.'
        image='/img/clientes/Clientes-Banner1.png'
      />
      <BoxWithImageRight image={'/img/clientes/nuestrocompromiso.png'}
        text={"Estamos enfocados en la adopción de hábitos saludables, aplicando técnicas y tecnología de vanguardia, con el fin de promover el bienestar de las personas."}
        title={'Nuestro compromiso '}
        imagePosition='right'
        bgColor='bg-white'
      />
      <Testimonios testimonials={testimonials} />
      <BoxClientes />
      {/* <Testimonios /> */}
      <CalltoActionHome question={'Te gustaría tener más información de nuestros programas de salud y bienestar?'} buttonText={'Quiero que me contacten'} />

    </div>
  )
}

export default Clientes

export async function getStaticProps() {
  const fetchTestimonials = await getTestimonials()

  return {
    props: {
      testimonials: fetchTestimonials
    }
  }
}
