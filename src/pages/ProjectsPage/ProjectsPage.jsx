import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom'

import ErrorPage from '../ErrorPage/ErrorPage.jsx'
import { ProjectDetails } from './components/ProjectDetails.jsx'
import { ProjectsListElement } from './components/ProjectsListElement.jsx'
import { StyledProjectsPage } from './index.styled'

export default function ProjectsPage() {
  const [projectsList, setProjectsList] = useState([])
  const [errorState, setErrorState] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/api/v1/projects/GET_repo_list')
      .then(res => res.json())
      .then(data => setProjectsList(() => data))
      .catch(err => {
        setErrorState(() => err)
      })
  }, [])

  if (errorState !== null) {
    navigate('/error', { state: { errorState } })
  }
  
  return (
    <StyledProjectsPage>
      <Routes>
        <Route path='/' element={ <ProjectsListElement projectsList={ projectsList }/> } />
        <Route path='/contact/:user/:repo' element={<ProjectDetails /> } />
        <Route path='/error' element={<ErrorPage />} />
      </Routes>
    </StyledProjectsPage>
  )
}