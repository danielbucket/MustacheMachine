import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import ProjectDetails from './components/projectDetails.jsx'
import ErrorPage from '../ErrorPage/ErrorPage.jsx'
import { StyledLink, StyledProjectsPage } from './index.styled'

export default function ProjectsPage() {
  const [projectsList, setProjectsList] = useState([])
  const [errorState, setErrorState] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/api/v1/projects/GET_repo_list')
      .then(res => res.json())
      .then(data => setProjectsList(() => data))
      .catch(err => setErrorState(() => err))
  }, [])

  const ProjectsListElement = () => {
  return (
      <nav>
        {
          projectsList.map((project, i) => {
            const { user, repo } = project

            return (
              <StyledLink to={`/projects/${user}/${repo}`} key={ i } >
                { repo }
              </StyledLink>
            )
          })
        }
      </nav>
    )
  }

  if (errorState !== null) {
    navigate('/error', { state: { errorState } })
  }
  
  return (
    <StyledProjectsPage>
      <ProjectsListElement />
      <Routes>
        <Route path='/projects/:user/:repo' element={ <ProjectDetails /> } />
        <Route path='/error' element={ <ErrorPage /> } />
      </Routes>
    </StyledProjectsPage>
  )
}