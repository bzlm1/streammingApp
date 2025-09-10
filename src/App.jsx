import { useEffect, useState } from 'react'
import ListadoPeliculas from './ListadoPeliculas'
import Blog from './Blog'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/blog" element={<Blog />} />
      <Route path="/" element={<ListadoPeliculas />} />
    </Routes>
  )
}



export default App
