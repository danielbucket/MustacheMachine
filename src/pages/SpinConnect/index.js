import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import style from './index.module.css'
import { getUserProfile, getRepoList, getProjectCommits } from './helpers'

const userData = {
  key: process.env.GITHUB_KEY,
  user: process.env.GITHUB_USER_NAME,
  repo: process.env.GITHUB_REPO_NAME,
}
console.log('userData: ', process.env)

export default function GitHubProjectModule() {
  const [githubKeys, setGitHubKeys] = useState({})
  const [projectCommits, setProjectCommits] = useState([])
  const [gitHubStatusError, setGitHubStatusError] = useState('')
  const navigate = useNavigate()
  
  useEffect(() => {
    try {
      
      
      const user = getProjectCommits(userData)
      user.then(data => {
        setProjectCommits(() => data)
      })
    }
    catch (error) {
      setGitHubStatusError(`Unable to connect to GitHub: ${error}`)
    }
  }, [])

  const commitsList = projectCommits.map(commitObj => {
    const { node_id, name, date } = commitObj
    const cleanDate = date.slice(0, 10)
    
    return (
      <Link to={`commits/:${date}`} key={node_id} className={style.Arr}>
        <h3>{name}</h3>
        <p>{date}</p>
      </Link>
    )
  })


  const commitListCards = projectCommits.map(commitObj => {
    const { message, node_id, html_url, name, date } = commitObj
    
    return (
      <Link to={html_url} key={node_id} className={style.card}>
        <h3>{name}</h3>
        <p>{date}</p>
      </Link>
    )
  })
  
  return (
    <div className={style.moduleContainer}>
      <div className={style.headerContainer}>
        <button onClick={() => navigate('/', { replace:true }) }>Close</button>
        <h1>{`<${userData.repo} />`}</h1>
      </div>
      <div className={style.cardsContainer}>
      </div>
      <Outlet />
    </div>
  )
}