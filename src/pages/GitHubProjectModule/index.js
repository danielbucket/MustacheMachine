import React, { useEffect, useState } from 'react'
import { Routes, Route, Link, Outlet, useNavigate, useLoaderData } from 'react-router-dom'
import style from './index.module.css'

import ProjectPage from './components/projectPage'
import { getProjectCommits } from './helpers'

export default function GitHubProjectModule() {

  const [projectsList, setProjectsList] = useState([])
  const [error, setError] = useState({})

  const navigate = useNavigate()
  const loaderData = useLoaderData()

  useEffect(() => {
    setProjectsList(() => loaderData)
  }, [])
  
  return (
    <div className={style.moduleContainer}>
      <div className={style.headerContainer}>
        <button onClick={() => navigate('/', { replace:true }) }>Close</button>
      </div>
      <div className={style.projectsListContainer}>
        {
          projectsList.map((project, i) => {
            return (
              <Link to={`/gh_projects/${project.repoName}`}
                key={i}
                className={style.projectCard}>{project.repoName}</Link> 
            )
          })
        }
      </div>
      <Routes >
        <Route
          path="/gh_projects/:projectName"
          element={<ProjectPage />}
          loader={({ params }) => getProjectCommits(params)}
        />
      </Routes>
    </div>
  )
}