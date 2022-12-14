import React from 'react'
import About from './components/about/about'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'


const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Contact />
    
    <Testimonials />
    <Footer />
    
    
    
    </>
  )
}

export default App