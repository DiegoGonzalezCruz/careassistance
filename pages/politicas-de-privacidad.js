import React, { useEffect, useState } from 'react'
import { ButtonsLegales } from '../components/Boxes/legales/ButtonsLegales'
import { HeaderLegales } from '../components/Boxes/legales/HeaderLegales'
import { TextLegales } from '../components/Boxes/legales/TextLegales'
import { getPages } from '../laboratory/lib/getPages'



const PoliticasPrivacidad = ({ pages }) => {

  const [legales, setLegales] = useState('politicas-de-privacidad')
  const [textLegales, setTextLegales] = useState('')

  useEffect(() => {
    const text = pages.filter(page => page.slug === legales)
    // console.log(text, 'textLegales')
    setTextLegales(text[0])

  }, [legales, pages])

  // console.log(textLegales, 'textLegales ***')


  return (
    <div className='w-screen bg-primary'>
      <HeaderLegales title={textLegales} />
      <ButtonsLegales setLegales={setLegales} />
      <TextLegales textLegales={textLegales} />
    </div>
  )
}

export default PoliticasPrivacidad

export async function getStaticProps() {

  const pages = await getPages()
  // console.log(programs, 'programs')

  return {
    props: pages, // will be passed to the page component as props
  }
}