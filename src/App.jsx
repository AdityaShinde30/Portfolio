import React from 'react'
import NavBar from './Components/NavBar'
import Skills from './Components/Skills'
import Hero from './Components/Hero'
import WorkExp from './Components/WorkExp'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from'./Components/Footer'

import BG_GRADIENT from "./assets/wave.png";

function App() {
  return (
    <div className='bg-background'>
      <div
        style={{
          backgroundImage:`url(${BG_GRADIENT})`,
          backgroundPosition:`50% 50%`,
        }}
      >
        <NavBar />
        <Hero/>
      </div>
      <Skills/>
      <WorkExp/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
