import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MainContentLayout } from '../../components/pageLayout.styled'

export const ProjectsListContainer = styled(MainContentLayout)`
  & nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 2rem;
  height: 10rem;
  border: .2rem solid black;
`