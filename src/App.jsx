import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pelicula from './Pelicula'
import PageWrapper from './PageWrapper'
import PeliculasJson from './peliculas.json'
import Paginacion from './Paginacion'

function App() {
  // ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const itemsXPagina = 7
  const [paginaActual, setPaginaActual] = useState(1)
  let peliculas = PeliculasJson
  const cargarPeliculas = () => {
    peliculas = peliculas.slice((paginaActual - 1) * itemsXPagina, paginaActual * itemsXPagina)
  }
  const getTotalPaginas = () => {
    let cantTotalPeliculas = PeliculasJson.length;
    return Math.ceil(cantTotalPeliculas / itemsXPagina)
  }
  cargarPeliculas()
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
      <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {
        {/* <Paginacion pagina={paginaActual} total={Math.ceil(PeliculasJson.length / itemsXPagina)} onChange={(pagina) => { */ }
        setPaginaActual(pagina)
      }} />
      {/* <Paginacion /> */}
    </PageWrapper>


  )
}



export default App
