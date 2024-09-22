import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MainContentLayout } from '../../components/pageLayout.styled'

export const StyledProjectsPage = styled(MainContentLayout)``

export const StyledProjectsListElement = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 2rem;
  height: 8rem;
  margin-bottom: 1rem;
  border-radius: .85rem;
  box-shadow: 0rem 0rem 1rem 0px black;
`