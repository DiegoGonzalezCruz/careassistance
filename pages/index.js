import Head from 'next/head'
import { CalltoAction } from '../components/Boxes/CalltoAction'
import { box1 } from '../components/Boxes/boxesContent'
import { BoxWithImageLeft } from '../components/Boxes/BoxWithImageLeft'
import { AnimatedBox1 } from '../components/AnimatedBoxes/AnimatedBox1'
import { BoxWhiteBGImage } from '../components/Boxes/BoxWhiteBGImage'
import { BoxRotatingElements } from '../components/Boxes/BoxRotatingElements'
import { NuestrosProgramas } from '../components/Boxes/Programas/NuestrosProgramas'
import { Numbers } from '../components/Boxes/Numbers'
import { HeroBoxVideo } from '../components/Boxes/HeroBoxVideo'
import { BoxWithImageRight } from '../components/Boxes/BoxWithImageRight'



export default function Home() {
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
      <AnimatedBox1 text='Sanos, Motivados y Felices' />
      <BoxWithImageLeft
        image={'/images/pexels-julia-avamotive.jpg'}
        text={"Have you ever needed to matrix your cutting-edge feature set? Free? Think B2C2B. The capability to implement wirelessly leads to the ability to whiteboard without lessening our power to benchmark. "}
        title={'Sanos,Motivados y Felices left'}
        imagePosition='left'
      />
      <AnimatedBox1 text='nuestro proposito' />
      <AnimatedBox1 text='Mejorar el bienestar de las personas a través de programas de acompañamiento para la adopción de hábitos saludables.' />
      <BoxWhiteBGImage />
      <AnimatedBox1 text='Experiencia única' />
      <BoxWithImageRight image={'/images/pexels-julia-avamotive.jpg'}
        text={"Have you ever needed to matrix your cutting-edge feature set? Free? Think B2C2B. The capability to implement wirelessly leads to the ability to whiteboard without lessening our power to benchmark. "}
        title={'Experiencia única Right'}
        imagePosition='right'
      />
      <BoxRotatingElements />

      <NuestrosProgramas />
      <Numbers />
      <CalltoAction buttonText={box1.buttonText} question={box1.question} />
    </>
  )
}
