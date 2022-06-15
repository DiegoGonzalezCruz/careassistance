import React from 'react'
import { Legales } from '../components/Boxes/legales/legales'

const text =
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis
      ex arcu, id facilisis neque laoreet nec. Aliquam bibendum consectetur
      nulla sed egestas. Etiam scelerisque elit suscipit convallis pharetra.
      Suspendisse quis odio vel lacus maximus dignissim. Vivamus convallis
      aliquam efficitur. Cras cursus condimentum quam a ultrices. Proin
      porta libero quis urna varius ultricies. Nunc ullamcorper velit in
      orci porta feugiat. Maecenas a erat quis odio elementum elementum sed
      at ante. Duis in vulputate erat. Ut euismod ipsum id ultrices
      accumsan. Nam non tempor leo, id pellentesque eros. Fusce tincidunt
      iaculis dolor, eget faucibus lectus eleifend laoreet. Aenean magna
      lectus, mollis non odio et, eleifend vulputate nunc. Ut a gravida
      lorem. Suspendisse luctus tortor ut auctor scelerisque.
    </p>

    <p>
      Nunc non tincidunt quam. Nam at urna neque. Curabitur lacinia
      fermentum finibus. Phasellus non tellus arcu. Pellentesque at neque
      porta, ultricies nisl sed, congue augue. Nullam nisi libero, maximus a
      elementum id, varius et massa. Mauris dolor tellus, eleifend id augue
      vitae, volutpat eleifend est. Aliquam vulputate luctus aliquet.
      Maecenas scelerisque luctus lobortis. Sed vestibulum, metus a pulvinar
      dictum, diam velit pharetra est, et rhoncus dolor justo nec diam.
      Donec nec rhoncus diam, eget aliquet leo. Nullam ornare nisl nec massa
      congue, quis ultricies elit fringilla. Phasellus sed dui accumsan,
      pretium magna vel, condimentum leo. Class aptent taciti sociosqu ad
      litora torquent per conubia nostra, per inceptos himenaeos. Donec
      vestibulum ex in urna dignissim elementum. Fusce sodales sem quis est
      viverra, nec tristique augue sodales.
    </p>

    <p>
      Nam bibendum, tortor a dignissim iaculis, dui est molestie massa,
      suscipit viverra metus eros ac sem. Morbi egestas imperdiet dolor.
      Morbi porttitor est quis nibh fringilla facilisis. Ut eget turpis ac
      nunc elementum tristique. Nunc arcu odio, rutrum ac luctus vitae,
      dapibus sed quam. Proin suscipit nisl a malesuada rhoncus. Lorem ipsum
      dolor sit amet, consectetur adipiscing elit.
    </p>

    <p>
      Aliquam rutrum porta augue, sed ultricies lorem. Integer a ligula leo.
      Morbi sit amet faucibus tellus. Morbi pretium consectetur nisi, id
      dictum metus blandit sed. Suspendisse tempus sagittis nisi, eu
      venenatis tortor congue non. Quisque nec augue vel ex tincidunt
      tincidunt eget sit amet odio. Aliquam erat erat, pretium sit amet nunc
      nec, bibendum volutpat nisl. Proin sit amet laoreet enim, ac iaculis
      odio. Cras vitae condimentum quam.
    </p>
  </>


const PoliticasPrivacidad = () => {
  return (
    <div className='w-screen bg-primary'>
      <Legales title='Politicas de Privacidad' text={text} />
    </div>
  )
}

export default PoliticasPrivacidad