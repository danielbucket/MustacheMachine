import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CommitsList } from './commitsList.jsx'
import { commitSorter } from './helpers.js'

export function ProjectDetails() {
  const [projectCommits, setProjectCommits] = useState([])
  const [errorState, setErrorState] = useState(null)
  const { user, repo } = useParams()

  useEffect(() => {
    fetch(`/api/v1/projects/GET_repo_data/${params.user}/${params.repo}`)
    .then(res => res.json())
    .then(data => setProjectCommits(() => commitSorter(data)))
    .catch(err => setErrorState(() => err))
  }, [])

  if (errorState !== null) {
    navigate('/error', { state: { errorState } })
  }
  
  return (
    <StyledProjectDetails>
      <div>
        <h1>{user}</h1>
        <p>{repo}</p>
      </div>
      <CommitsList projectCommits={projectCommits} />
    </StyledProjectDetails>
  )
}