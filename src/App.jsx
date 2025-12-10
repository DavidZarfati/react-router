import { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import './App.css'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import DefaultLayout from './Layouts/DefaulLayout'
import Home from './pages/Home'
import Prodotti from './pages/Prodotti'
import Prodotto from './pages/Prodotto'
import axios from 'axios'
import Chisiamo from './pages/Chi-siamo'
import ProdottoLayout from './Layouts/ProdottoLayout'


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
          <Route element={<ProdottoLayout prodotti={prodotti} />}>
            <Route path='/prodotti/:id' element={<Prodotto prodotto={prodotti.find(p => p.id == useParams()?.id)} />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
