import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pelicula from './Pelicula'
import PageWrapper from './PageWrapper'

function App() {
  const [count, setCount] = useState(0)
  PageWrapper
  return (
    <PageWrapper>
      <Pelicula
        image="images/uploads/mv1.jpg"
        title="oblivion"
        anho="2012"
        descripcion="Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity..."
        duracion="2h21’"
        mmpa="PG-13"
        fechaDeEstreno="1 May 2015"
        director="Joss Whedon"
        estrellas={["Robert Downey Jr.", "Chris Evans", "Chris Hemsworth"]}
      />
      <Pelicula
        image="images/uploads/mv2.jpg"
        title="into the wild"
        anho="2014"
        descripcion="As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat..."
        duracion="2h21’"
        mmpa="PG-13"
        fechaDeEstreno="1 May 2015"
        director="Anthony Russo, Joe Russo"
        estrellas={["Chris Evans", "Samuel L. Jackson", "Scarlett Johansson"]}
      />
      <Pelicula
        image="images/uploads/mv3.jpg"
        title="blade runner"
        anho="2015"
        descripcion="Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help..."
        duracion="2h21’"
        mmpa="PG-13"
        fechaDeEstreno="1 May 2015"
        director="Peyton Reed"
        estrellas={["Paul Rudd", "Michael Douglas"]}
      />

      <Pelicula
        image="images/uploads/mv4.jpg"
        title="Mulholland pride"
        anho="2013"
        descripcion="When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution."
        duracion="2h21’"
        mmpa="PG-13"
        fechaDeEstreno="1 May 2015"
        director="Shane Black"
        estrellas={["Robert Downey Jr.", "Guy Pearce", "Don Cheadle"]}
      />
    </PageWrapper>

  )
}

export default App
