import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledLink, ProjectsListContainer } from './index.styled'

function ProjectsPage() {
  const [projectsList, setProjectsList] = useState([])
  const [error, setError] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchRepoList() {
      await fetch('/api/v1/projects/GET_repo_list')
      .then(response => response.json())
      .then(data => setProjectsList(data))
      .catch(err => setError(err))
    }

    fetchRepoList()
  }, [])
  
  return (
    <ProjectsListContainer>
      <nav>
        {
          projectsList.map((project, i) => {
            const { user, repo } = project
            return (
              //this route mapping is a 'one-to-many' relationship
              <StyledLink to={`/gh_projects/${user}/${repo}`}
                key={i} >{repo}</StyledLink> 
            )
          })
        }
      </nav>
    </ProjectsListContainer>
  )
}

export default ProjectsPage