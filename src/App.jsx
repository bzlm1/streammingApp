import { useEffect, useState } from 'react'
import ListadoPeliculas from './ListadoPeliculas'
import Blog from './Blog'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/" element={<ListadoPeliculas />} />
      </Routes>
    </BrowserRouter>

  )
}



export default App
