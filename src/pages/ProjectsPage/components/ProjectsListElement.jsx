import React from 'react'
import { StyledProjectsListElement, StyledLink } from '../index.styled'

export const ProjectsListElement = ({ projectsList }) => {
  
    return (
      <StyledProjectsListElement>
        {
          projectsList.map((project, i) => {
            const { user, repo } = project

            return (
              <StyledLink to={`/projects/${user}/${repo}`} key={ i } >
                { repo }
              </StyledLink>
            )
          })
        }
      </StyledProjectsListElement>
    )
  }