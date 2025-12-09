import { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './Layouts/DefaulLayout'
import Home from './pages/Home'
import Prodotti from './pages/Prodotti'
import axios from 'axios'
import Chisiamo from './pages/Chi-siamo'


function App() {
  const [prodotti, setProdotti] = useState([])
  function fetchProdotti() {
    axios.get("https://fakestoreapi.com/products")
      .then((resp) => {
        setProdotti(resp.data)
      })
  }
  useEffect(() => {
    fetchProdotti()
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/chi-siamo' element={<Chisiamo />} />
            <Route path='/prodotti' element={<Prodotti prodotti={prodotti} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
