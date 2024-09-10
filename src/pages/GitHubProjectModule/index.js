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
    <>
      <div className={style.moduleContainer}>
        <div className={style.headerContainer}>
          <button onClick={() => navigate('/', { replace:true }) }>Close</button>
        </div>
        <div className={style.projectsListContainer}>
          <nav>
            {
              projectsList.map((project, i) => {
                return (
                  //this route mapping is a 'one-to-many' relationship
                  <Link to={`/gh_projects/${project.repoName}`}
                    key={i}
                    className={style.projectCard}>{project.repoName}</Link> 
                )
              })
            }
          </nav>
        </div>
      </div>
    </>
  )
}