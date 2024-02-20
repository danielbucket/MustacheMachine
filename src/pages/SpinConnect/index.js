import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from './index.module.css'
import { getUserProfile, getRepoList, getProjectCommits } from './helpers'

const userData = {
  key: process.env.GITHUB_KEY,
  user: process.env.GITHUB_USER_NAME,
  repo: process.env.GITHUB_REPO_NAME,
}

export default function GitHubProjectModule() {
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
      setGitHubStatusError('Error: Unable to connect to GitHub')
    }

  }, [])

  const commitCards = projectCommits.map((commitObj, index) => {
    const { sha, html_url, commit } = commitObj
    const { author, message } = commit
    const { name, date } = author
    
    return (
      <Link to={html_url} key={sha} className={style.card}>
        <h3>{name}</h3>
        <p>{message}</p>
        <p>{date}</p>
      </Link>
    )
  })
  
  return (
    <div className={style.moduleContainer}>
      <button onClick={() => navigate('/')}>Close</button>
      <h1>{userData.repo}</h1>
      <div className={style.cardsContainer}>{commitCards}</div>
    </div>
  )
}