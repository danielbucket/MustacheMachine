import React, { useEffect, useState } from 'react'
import { Routes, Route, Link, Outlet, useNavigate, useLoaderData } from 'react-router-dom'
import style from './index.module.css'

import ProjectPage from './components/projectPage'
import { getProjectCommits } from './helpers'

export default function GitHubProjectModule() {
  const [projectsList, setProjectsList] = useState([])
  const [error, setError] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchRepoList() {
      await fetch('/api/v1/gh_projects/GET_repo_list')
      then(response => response.json())
      .then(data => setProjectsList(data))
      .catch(err => setError(err))
    }

    fetchRepoList()
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
                const { user, repo } = project
                return (
                  //this route mapping is a 'one-to-many' relationship
                  <Link to={`/gh_projects/${user}/${repo}`}
                    key={i}
                    className={style.projectCard}>{repo}</Link> 
                )
              })
            }
          </nav>
        </div>
      </div>
    </>
  )
}