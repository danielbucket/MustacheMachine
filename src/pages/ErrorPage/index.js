import React from 'react'
import { useRouteError, Link } from 'react-router-dom'
import style from './index.module.css'
const dangerRobot = require('../../assets/images/dangerWillRobinson.jpeg')

export default function ErrorPage() {
	const error = useRouteError()

	return (
		<div style={style.container}>
			<Link to={'/'} >Back to Home</Link>
			<img
				style={style.image}
				src={dangerRobot}
				alt="Error, Will Robinson!" />
			<h1>Error, Will Robinson!</h1>
			<p style={style.error}>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	)
}