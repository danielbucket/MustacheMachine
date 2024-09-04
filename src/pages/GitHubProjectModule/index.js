import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate, useLoaderData } from 'react-router-dom'
import style from './index.module.css'

import ProjectPage from './components/projectPage'

export default function GitHubProjectModule() {
  const [projectsList, setProjectsList] = useState([])
  const [error, setError] = useState({})

  const navigate = useNavigate()
  const loaderData = useLoaderData()

  useEffect(() => {
    setProjectsList(loaderData)
  }, [])
  
  console.log(projectsList)
  
  return (
    <div className={style.moduleContainer}>
      <div className={style.headerContainer}>
        <button onClick={() => navigate('/', { replace:true }) }>Close</button>
      </div>

      <div className={style.projectsListContainer}>
        {
          projectsList.map((project, index) => {
            return (
              <Link to={project.html_url}
                key={index}
                className={style.projectCard}>{project.repoName}</Link> 
            )
          })
        }
      </div>

      <Outlet />
    </div>
  )
}