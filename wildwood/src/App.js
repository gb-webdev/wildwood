import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Gallery from './pages/Gallery'
import NotFound from './pages/NotFound'
import './App.css'

const App = () => {

  return (
    <div className="app-div">
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    <Footer />
  </div>
  )
}

export default App