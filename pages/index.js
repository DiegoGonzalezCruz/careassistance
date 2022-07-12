import Head from 'next/head'

import { box1 } from '../components/Boxes/boxesContent'
import { BoxWithImageLeft } from '../components/Boxes/BoxWithImageLeft'

import { BoxWhiteBGImage } from '../components/Boxes/BoxWhiteBGImage'
import { NuestrosProgramas } from '../components/Boxes/Programas/NuestrosProgramas'
import { Numbers } from '../components/Boxes/Numbers'
import { HeroBoxVideo } from '../components/Boxes/HeroBoxVideo'
import { BoxWithImageRight } from '../components/Boxes/BoxWithImageRight'
import { AnimatedTextBox } from '../components/AnimatedBoxes/AnimatedTextBox'
import { RotatingCirclesIntoCellphone } from '../components/AnimatedBoxes/Experiments/RotatingCirclesIntoCellphone'
import { AnimatedTextBoxOutlined } from '../components/AnimatedBoxes/AnimatedTextBoxOutlined'
import { CalltoActionHome } from '../components/Boxes/CalltoActionHome'
import { getProgramas } from '../laboratory/lib/getProgramas'
import { ProblemInNumbers } from '../components/Boxes/ProblemInNumbers'

export default function Home({ programs }) {
  return (
    <>
      <Head>
        <title>Care Assistance</title>
        <meta name="description" content="CareAssistance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroBoxVideo
        prevText='Hola,'
        first='Somos'
        accent='Care Assistance'
        sub='Y contamos con la plataforma de salud y bienestar más avanzada de Latinoamérica'
        video={"/images/VideoBg1.mp4"}
        buttonHref='/programas'
        buttonText='Nuestros programas'
      />
      <AnimatedTextBox text='Sanos, Motivados y Felices' from='left' bg='primary' />
      <ProblemInNumbers />
      <AnimatedTextBoxOutlined text='Nuestro propósito' from='right' bg='primary' />
      <BoxWhiteBGImage />

      <AnimatedTextBoxOutlined text='Experiencia única' from='right' bg='primary' />

      <BoxWithImageRight image={'/img/home/experienciaunica.png'}
        text={"Con el objetivo de brindar un servicio integral, nuestro ecosistema de salud y bienestar está compuesto por diversos programas complementarios entre sí."}
        title={'Experiencia única '}
        imagePosition='right'
      />
      <RotatingCirclesIntoCellphone />

      <NuestrosProgramas programs={programs} />
      <Numbers />
      <CalltoActionHome buttonText={'Quiero que me contacten'} question={'Te gustaría más información de nuestros programas de Salud y Bienestar?'} />
    </>
  )
}

export async function getStaticProps() {

  const programs = await getProgramas()
  // console.log(programs, 'programs')

  return {
    props: { programs }, // will be passed to the page component as props
  }
}