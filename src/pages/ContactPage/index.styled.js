import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MainContent } from '../../components/pageLayout.styled'

export const StyledContactPage = styled(MainContent)`
`

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
	margin: auto;
	width: 80vw;
	border-radius: 1.75rem;
  background-color: #007bff;
  color: #fff;
  font-size: 3.75rem;
  transition: background-color 0.3s ease;
  font-family: Ubuntu_Reg;
  border: .5rem solid var(--grayd-a-grey);
`