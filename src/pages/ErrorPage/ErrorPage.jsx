import React, { useEffect, useState } from 'react'
import {
	StyledContainer,
	StyledLink,
	StyledImg,
	ErrorElement
} from './index.styled.js'
const dangerRobot = require('../../assets/images/dangerWillRobinson.jpeg')

function ErrorPage({ error }) {
	const [errorState, setErrorState] = useState({})

	useEffect(() => {
		setErrorState(() => error)
	},[])
	
	return (
		<>
			<StyledContainer>
				<StyledLink to={'/'} >Back to Home</StyledLink>
				<StyledImg src={dangerRobot} alt="Error, Will Robinson!" />
				<h1>Error, Will Robinson!</h1>
				<ErrorElement>
					<i>{errorState.statusText || errorState.message}</i>
				</ErrorElement>
			</StyledContainer>
		</>
	)
}

export default ErrorPage