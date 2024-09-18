import React from "react"
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'
import GitHubProjectModule from './pages/GitHubProjectModule/GitHubProjectModule.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import { AppWrapper, MainContent } from './components/pageLayout.styled'

function App() {
  return (
    <>
      <AppWrapper>
        <NavBar />
        <MainContent>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/About' element={<About />} />
            <Route path='/contact/*' element={<Contact />} />
            <Route path='/projects' element={<GitHubProjectModule />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </MainContent>
      </AppWrapper>
    </>
  )
}

export default App