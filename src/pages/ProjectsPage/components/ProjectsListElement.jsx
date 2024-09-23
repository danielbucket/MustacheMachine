import React from 'react'
import { StyledProjectsListElement, StyledLink } from '../index.styled'

export const ProjectsListElement = ({ projectsList }) => {
  
    return (
      <StyledProjectsListElement>
        {
          projectsList.map((project, i) => {
            const { owner, repo } = project

            return (
              <StyledLink to={`/projects/${owner}/${repo}`} key={ i } >
                { repo }
              </StyledLink>
            )
          })
        }
      </StyledProjectsListElement>
    )
  }