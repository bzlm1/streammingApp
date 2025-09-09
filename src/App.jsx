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
  // const fetchWithProxy = async (url) => {
  //   try {
  //     // Usar un servicio de proxy CORS
  //     const proxyUrl = 'https://corsproxy.io/?';
  //     const response = await fetch(proxyUrl + encodeURIComponent(url));

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     return null;
  //   }
  // };
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
      debugger
      alert(peliculas);



      // 4. Ahora sí tienes tus películas
      // console.log(peliculas);
      // alert(`Se cargaron ${peliculas.length} películas`);
      return peliculas;

    } catch (error) {
      console.error('Error:', error);
      alert('Error: ' + error.message);
    }
  }
  // const buscarPeliculas = async () => {
  //   const url = 'https://raw.githubusercontent.com/bzlm1/streammingApp/refs/heads/main/src/peliculas.json'
  //   const respuesta = await fetch(url, {
  //     "method": 'GET',
  //     "headers": {
  //       "Accept": 'application/json',
  //       "Content-Type": 'application/json'
  //     }
  //   })
  //   const json = await respuesta.json()
  //   alert(json);
  //   console.log(json);

  // }
  buscarPeliculas()
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
