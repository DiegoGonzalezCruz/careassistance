import Head from 'next/head'
import { CalltoAction } from '../components/Boxes/CalltoAction'
import { box1 } from '../components/Boxes/boxesContent'
import { BoxWithImageLeft } from '../components/Boxes/BoxWithImageLeft'

import { BoxWhiteBGImage } from '../components/Boxes/BoxWhiteBGImage'
import { BoxRotatingElements } from '../components/Boxes/BoxRotatingElements'
import { NuestrosProgramas } from '../components/Boxes/Programas/NuestrosProgramas'
import { Numbers } from '../components/Boxes/Numbers'
import { HeroBoxVideo } from '../components/Boxes/HeroBoxVideo'
import { BoxWithImageRight } from '../components/Boxes/BoxWithImageRight'
import { AnimatedTextBox } from '../components/AnimatedBoxes/AnimatedTextBox'
import { AnimatedBox3 } from '../components/AnimatedBoxes/AnimatedBox3'
import { RotatingCirclesIntoCellphone } from '../components/AnimatedBoxes/Experiments/RotatingCirclesIntoCellphone'
import { AnimatedTextBox2, AnimatedTextBoxOutlined } from '../components/AnimatedBoxes/AnimatedTextBoxOutlined'


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
      <AnimatedTextBox text='Sanos, Motivados y Felices' from='left' bg='primary' />
      <BoxWithImageLeft
        image={'/img/home/familia-zen.png'}
        text={"Contar con personas sanas, motivadas y felices es fundamental para enfrentar los diferentes desafíos. Un cambio de hábitos a una cultura de bienestar, puede llevar a las compañías a generar mayor eficiencia, productividad y menor ausentismo. "}
        title={'Sanos,Motivados y Felices '}
        imagePosition='left'
      />
      <AnimatedTextBoxOutlined text='Nuestro propósito' from='right' bg='primary' />

      {/* <AnimatedBox3
        text='Mejorar el bienestar de las personas a través de programas de acompañamiento para la adopción de hábitos saludables.' /> */}
      <BoxWhiteBGImage />
      <AnimatedTextBoxOutlined text='Experiencia única' from='right' bg='primary' />

      {/* <AnimatedBox1 text='Experiencia única' /> */}
      <BoxWithImageRight image={'/img/home/experienciaunica.png'}
        text={"Con el objetivo de brindar un servicio integral, nuestro ecosistema de salud y bienestar está compuesto por diversos programas complementarios entre sí."}
        title={'Experiencia única '}
        imagePosition='right'
      />
      <RotatingCirclesIntoCellphone />

      <NuestrosProgramas />
      <Numbers />
      <CalltoAction buttonText={box1.buttonText} question={box1.question} />
    </>
  )
}
