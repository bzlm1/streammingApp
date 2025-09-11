import { useEffect, useState } from 'react'

import '../App.css'
import Pelicula from './Pelicula'
import PageWrapper from './PageWrapper'
import Paginacion from './Paginacion'

function ListadoPeliculas() {
  const itemsXPagina = 3
  const [paginaActual, setPaginaActual] = useState(1)
  const [peliculasListas, setPeliculasListas] = useState([])
  useEffect(() => {
    buscarPeliculas()
  }, [])

  const buscarPeliculas = async () => {
    try {
      const url = 'https://api.github.com/repos/bzlm1/streammingApp/contents/src/peliculas.json';

      // 1. Fetch MÁS SIMPLE - sin headers complicados
      const respuesta = await fetch(url);

      if (!respuesta.ok) {
        throw new Error(`Error ${respuesta.status}: ${respuesta.statusText}`);
      }

      // 2. GitHub devuelve un objeto con el contenido en base64
      const data = await respuesta.json();
      // 3. ¡ESTE ES EL PASO NUEVO! Decodificar el base64
      const contenidoDecodificado = atob(data.content); // ← Esto es lo diferente

      // alert(contenidoDecodificado);
      const peliculas = JSON.parse(contenidoDecodificado);
      setPeliculasListas(peliculas)
      // 3.15
      // alert(peliculas);



      // 4. Ahora sí tienes tus películas
      // console.log(peliculas);
      // alert(`Se cargaron ${peliculas.length} películas`);
      return peliculas;

    } catch (error) {
      console.error('Error:', error);
      alert('Error: ' + error.message);
    }
  }

  const getTotalPaginas = () => {
    let cantTotalPeliculas = peliculasListas.length;
    return Math.ceil(cantTotalPeliculas / itemsXPagina)
  }
  const peliculasPorPagina =
    peliculasListas.slice((paginaActual - 1) * itemsXPagina, paginaActual * itemsXPagina)


  return (
    <PageWrapper>
      {/* En esta pagina mostramos un listado de peliculas */}
      {peliculasPorPagina.map(pelicula => {
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

        setPaginaActual(pagina)
      }} />

    </PageWrapper>


  )
}



export default ListadoPeliculas
