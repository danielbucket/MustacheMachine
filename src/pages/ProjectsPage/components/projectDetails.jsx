import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ProjectDetails() {
  const { user, repo } = useParams()

  useEffect(() => {})
  
  return (
    <div>
      <h1>{user}</h1>
      <p>{repo}</p>
    </div>
  )
}

export default ProjectDetails