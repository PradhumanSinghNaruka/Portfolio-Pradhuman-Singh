import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Cards from "./components/Cards"
import Percentage from './components/Percentage'
import Contact from './components/Contact'
import Cv from "./components/Cv"
import Marquee from './components/Marquee'
import { Toaster } from 'react-hot-toast'

function App() {
  const style = {
    backgroundColor: 'black',
    color: 'white',
    minHeight: '100vh'
  }
  return (
    <>
    <div style={style}>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Cards />
      <Percentage />
      <Cv />
      <Contact />
      <Marquee />
    </div>
    <Toaster />
    </>
  )
}

export default App
