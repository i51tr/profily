import { useState } from 'react'
import Navbar from './navbar/Navbar'
import About from './about/about'
import Skills from './skills/Skills'
import Certificates from './certificates/Certificates'
import Projects from './projects/Projects'
import Footer from './Footer/Footer'
import './App.css'

function App() {
 

  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <Footer />
    </>
  )
}

export default App
