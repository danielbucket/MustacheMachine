import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MainContentLayout } from '../../components/pageLayout.styled'

export const StyledErrorPage = styled(MainContentLayout)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	border: 0.25rem solid #a4d822;
	border-radius: 1rem;

	& img {
		height: 27rem;
		border-radius: 0.5rem;
	}

	& .error-text {
		display: flex;
		align-items: center;
		margin: 2rem auto;
		border: 0.2rem solid black;
		background-color: #c6c4c4d1;
		width: 80%;
		height: 10rem;
		text-align: center;
		overflow-x: scroll;
		padding: 0.2rem;
	}
`

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  width: 98%;
  border-radius: 2rem;
  background-color: #007bff;
  color: #fff;
  font-size: 4rem;
  transition: background-color 0.3s ease;
  font-family: Ubuntu_Reg;
  &.active {
    background-color: #003d80;
  }
  &:hover {
    background-color: #0056b3;
  }
`