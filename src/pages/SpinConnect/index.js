import React, { useEffect, useState } from 'react'
import style from './index.module.css'
import { getUserProfile, getRepoList, getProjectCommits } from './helpers'

const userData = {
  key: process.env.GITHUB_KEY,
  user: process.env.GITHUB_USER_NAME,
  repo: process.env.GITHUB_REPO_NAME,
}

export default function GitHubProjectModule() {
  const [gitHubStatus, setGitHubStatus] = useState('')
  const [gitHubStatusError, setGitHubStatusError] = useState('')

  useEffect(() => {
    try {
      const user = getProjectCommits(userData)
      user.then(data => {
        console.log('data: ', data)
      })
    }
    catch (error) {
      setGitHubStatusError('Error: Unable to connect to GitHub')
    }

  }, [])

  return (
    <div className={style.spinConnectContainer}>
      <h1>{}</h1>
    </div>
  )
}