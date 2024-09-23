import React, { useState, useEffect } from 'react'
import { useLoaderData, useParams, useRouteError } from 'react-router-dom'
import { CommitsList } from './commitsList.jsx'
import { commitSorter } from './helpers.js'
import { StyledProjectDetails } from './index.styled'

export function ProjectDetails() {
  const [projectCommits, setProjectCommits] = useState([])
  const [errorState, setErrorState] = useState(null)
  const { loaderData } = useLoaderData()
  const { owner, repo } = useParams()

  useEffect(() => {
    console.log('loaderData: ', loaderData)
    setProjectCommits( () => commitSorter(loaderData.commits) )
  },[])


  return (
    <StyledProjectDetails>
      <div>
        <h1>{owner}</h1>
        <p>{repo}</p>
      </div>
      <CommitsList commits={projectCommits} />
    </StyledProjectDetails>
  )
}