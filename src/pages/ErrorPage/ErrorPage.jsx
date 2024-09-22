import React, { useEffect, useState } from 'react'
import { useRouteError } from 'react-router-dom'
import { StyledErrorPage, StyledLink } from './index.styled.js'
const dangerRobot = require('../../assets/images/dangerWillRobinson.jpeg')

function ErrorPage() {
	const [errorState, setErrorState] = useState({})
	const routeError = useRouteError()

	useEffect(() => {
		setErrorState(() => routeError)
	},[])
	
	return (
		<StyledErrorPage>
			<StyledLink to={-1} >Close</StyledLink>
			<img src={ dangerRobot } alt="Error, Will Robinson!" />
			<h1>Error, Will Robinson!</h1>
			<div className="error-text">
				<i>{errorState.statusText || errorState.message}</i>
			</div>
		</StyledErrorPage>
	)
}

export default ErrorPage