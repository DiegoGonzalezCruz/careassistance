import Head from 'next/head'
import Image from 'next/image'
import { CalltoAction } from '../components/Boxes/CalltoAction'

import { box1 } from '../components/Boxes/boxesContent'
import { BoxWithImage } from '../components/Boxes/BoxWithImage'
import { HeroBox } from '../components/Boxes/HeroBox'
import { AnimatedBox1 } from '../components/AnimatedBoxes/AnimatedBox1'
import { BoxWhiteBGImage } from '../components/Boxes/BoxWhiteBGImage'
import { BoxRotatingElements } from '../components/Boxes/BoxRotatingElements'
import { NuestrosProgramas } from '../components/Boxes/Programas/NuestrosProgramas'
import { Numbers } from '../components/Boxes/Numbers'



export default function Home() {
  return (
    <>
      <Head>
        <title>Care Assistance</title>
        <meta name="description" content="CareAssistance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroBox
        prevText='Hola,'
        first='Somos'
        accent='Care Assistance'
        sub='Y contamos con la plataforma de salud y bienestar más avanzada de Latinoamérica'
        video={"/images/VideoBg1.mp4"}
      />
      <AnimatedBox1 text='Sanos, Motivados y Felices' />
      <BoxWithImage
        image={'/images/pexels-julia-avamotive.jpg'}
        text={"Have you ever needed to matrix your cutting-edge feature set? Free? Think B2C2B. The capability to implement wirelessly leads to the ability to whiteboard without lessening our power to benchmark. "}
        title={'Sanos,Motivados y Felices'}
        imagePosition='left'
      />
      <AnimatedBox1 text='nuestro proposito' />
      <AnimatedBox1 text='Mejorar el bienestar de las personas a través de programas de acompañamiento para la adopción de hábitos saludables.' />
      <BoxWhiteBGImage />
      <AnimatedBox1 text='Experiencia única' />
      <BoxWithImage image={'/images/pexels-julia-avamotive.jpg'}
        text={"Have you ever needed to matrix your cutting-edge feature set? Free? Think B2C2B. The capability to implement wirelessly leads to the ability to whiteboard without lessening our power to benchmark. "}
        title={'Experiencia única'}
        imagePosition='right'
      />
      <BoxRotatingElements />

      <NuestrosProgramas />
      <Numbers />
      <CalltoAction buttonText={box1.buttonText} question={box1.question} />
    </>
  )
}
