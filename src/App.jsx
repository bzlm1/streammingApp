import { useEffect, useState } from 'react'
import ListadoPeliculas from './ListadoPeliculas'
import Blog from './Blog'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/">
          <ListadoPeliculas />
        </Route>
      </Switch>
    </BrowserRouter>

  )
}



export default App
