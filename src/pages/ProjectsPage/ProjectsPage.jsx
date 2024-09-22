import React, { useEffect, useState } from 'react'
import { useNavigate, Outlet, useLoaderData } from 'react-router-dom'

import { ProjectsListElement } from './components/ProjectsListElement.jsx'
import { StyledProjectsPage } from './index.styled'

export default function ProjectsPage() {
  const [projectsList, setProjectsList] = useState([])
  const [errorState, setErrorState] = useState(null)
  const navigate = useNavigate()
  const loaderData = useLoaderData()

  useEffect(() => {
    setProjectsList(() => loaderData)
  }, [])

  if (errorState !== null) {
    navigate('/error', { state: { errorState } })
  }
  
  return (
    <StyledProjectsPage>
      <ProjectsListElement projectsList={ projectsList }/>
      <Outlet />
    </StyledProjectsPage>
  )
}