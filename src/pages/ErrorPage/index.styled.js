import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: ceneter;
	width: 90%;
	margin: 3rem auto;
	border: 0.25rem solid #a4d822;
	border-radius: 1rem;
	font-size: 2.5rem;
`

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
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

export const StyledImg = styled.img`
	height: 40rem;
	margin-top: 1rem;
	border-radius: 0.5rem;
`

export const ErrorElement = styled.div`
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
`