import React from "react" 
import { Outlet } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { AppWrapper } from './components/pageLayout.styled.js'

function Root() {

  return (
    <AppWrapper>
      <NavBar />
      <Outlet />
      <Footer />
    </AppWrapper>
  )
}

export default Root