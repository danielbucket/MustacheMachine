import * as React from 'react'
import { useRouteError, Link } from 'react-router-dom'
import style from './index.module.css'
const dangerRobot = require('../../assets/images/dangerWillRobinson.jpeg')

export default function ErrorPage() {
	const error = useRouteError()

	return (
		<div style={style.container}>
			<img
				style={style.image}
				src={dangerRobot}
				alt="Error, Will Robinson!" />
			<h1>Error, Will Robinson!</h1>
			<Link to={'/'} >
				Back to Home
			</Link>
			<p style={style.error}>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	)
}