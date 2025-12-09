import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './Layouts/DefaulLayout'
import Home from './pages/Home'
import Prodotti from './pages/Prodotti'


function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/chi-siamo' element={<Chi-siamo />}></Route>
            <Route path='/prodotti' element={<Prodotti />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
