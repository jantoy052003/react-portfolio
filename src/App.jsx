import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import Left from './components/Left'
import Right from './components/Right'
import Footer2 from './components/Footer2'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <ContactMe/>
      <Footer/>
      <Left/>
      <Right/>
      <Footer2/>
    </>
  )
}

export default App
