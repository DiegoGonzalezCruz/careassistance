
import Head from 'next/head'
import { ComoFuncionanNuestrosProgramas } from '../components/Boxes/Animated/ComoFuncionanNuestrosProgramas'
import { NuestrosProgramas } from '../components/Boxes/Animated/NuestrosProgramas'
import { NuestroProposito } from '../components/Boxes/NuestroProposito'
import { CanalesAtencion } from '../components/Boxes/CanalesAtencion'


import { getProgramas } from '../laboratory/lib/getProgramas'
import { HeroBoxProgramas } from '../components/Boxes/HeroBoxProgramas'
import { TestimoniosProgramas } from '../components/Boxes/Testimonios/TestimoniosProgramas'
import { CalltoActionHome } from '../components/Boxes/CalltoActionHome'

const Programas = ({ programs }) => {
  return (
    <div>
      <Head>
        <title>Care Assistance - Programas</title>
        <meta name="description" content="Programas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroBoxProgramas
        prevText='Salud y bienestar a través de nuestra'
        accent='Clínica Virtual'
        first='Salud y bienestar a través de nuestra'
        image='/img/programas/Programas-Banner1.png'
        sub='Ponemos a tu disposición una solución integral de Salud y Bienestar a través de los programas de nuestra Clínica Virtual, brindando una experiencia única y altos índices de usabilidad.'

      />
      <ComoFuncionanNuestrosProgramas programs={programs} />
      <NuestrosProgramas programs={programs} />
      {/* <NuestroProposito /> */}
      <CanalesAtencion />
      <TestimoniosProgramas />
      <CalltoActionHome buttonText={'Quiero que me contacten'} question={'Te gustaría más información de nuestros programas de Salud y Bienestar?'} />


    </div>
  )
}

export default Programas


export async function getStaticProps() {

  const programs = await getProgramas()
  console.log(programs, 'programs')

  return {
    props: { programs }, // will be passed to the page component as props
  }
}