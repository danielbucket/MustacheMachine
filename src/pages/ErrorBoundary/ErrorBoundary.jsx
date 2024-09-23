import React, { useEffect, useState } from 'react'
import { useRouteError } from 'react-router-dom'
import { StyledErrorBoundary, StyledLink } from './index.styled.js'
const dangerRobot = require('../../assets/images/dangerWillRobinson.jpeg')

function ErrorBoundary() {
	const [errorState, setErrorState] = useState("")
	const routeError = useRouteError()

	useEffect(() => {
		setErrorState(() => routeError)
	},[])
	

	return (
		<StyledErrorBoundary>
			<StyledLink to={-1} >Close</StyledLink>
			<img src={ dangerRobot } alt="Error, Will Robinson!" />
			<h1>Error, Will Robinson!</h1>
			<div className="error-text">
				<i>{}</i>
			</div>
		</StyledErrorBoundary>
	)
}

export default ErrorBoundary