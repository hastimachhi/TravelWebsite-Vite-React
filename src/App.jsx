import React from 'react'
import "./App.css"
import Home from './Components/Home/home'
import Main from './Components/Main/main'
import Footer from './Components/Footer/footer'
import Navbar from './Components/Navbar/navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Main />
      <Footer />
    </>
  )
}

export default App