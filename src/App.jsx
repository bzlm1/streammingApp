import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pelicula from './Pelicula'
import PageWrapper from './PageWrapper'
import PeliculasJson from './peliculas.json'
import Paginacion from './Paginacion'

function App() {

  const peliculas = PeliculasJson

  return (
    <PageWrapper>
      {peliculas.map(pelicula => {
        return <Pelicula
          image={pelicula.image}
          title={pelicula.title}
          anho={pelicula.anho}
          descripcion={pelicula.descripcion}
          duracion={pelicula.duracion}
          mmpa={pelicula.mmpa}
          fechaDeEstreno={pelicula.fechaDeEstreno}
          director={pelicula.director}
          estrellas={pelicula.estrellas}
        />
      })}
      <Paginacion pagina={2} total={4} onChange={(pagina) => {
        alert(pagina)
      }} />
      {/* <Paginacion /> */}
    </PageWrapper>


  )
}



export default App
