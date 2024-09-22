import React from "react"
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import AboutPage from './pages/AboutPage/AboutPage.jsx'
import ContactPage from './pages/ContactPage/ContactPage.jsx'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import { AppWrapper, MainContent } from './components/pageLayout.styled'

function App() {
  return (
    <>
      <AppWrapper>
        <NavBar />
        <MainContent>
          <Routes>
            <Route path='/' index element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact/*' element={<ContactPage />} />
            <Route path='/projects/*' element={<ProjectsPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppWrapper>
    </>
  )
}

export default App