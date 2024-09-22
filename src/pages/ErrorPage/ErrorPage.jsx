import React, { useEffect, useState } from 'react'
import { StyledErrorPage, StyledLink } from './index.styled.js'
const dangerRobot = require('../../assets/images/dangerWillRobinson.jpeg')

function ErrorPage(props) {
	const [errorState, setErrorState] = useState({})
	console.log('ErrorPage error: ', props)
	const { error } = props

	useEffect(() => {
		setErrorState(() => error)
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