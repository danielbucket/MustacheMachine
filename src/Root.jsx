import React from "react" 
import { Outlet } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { AppWrapper, MainContent } from './components/pageLayout.styled.js'

function Root() {

  return (
    <AppWrapper>
      <NavBar />
      <MainContent >
        <Outlet />
      </MainContent>
      <Footer />
    </AppWrapper>
  )
}

export default Root