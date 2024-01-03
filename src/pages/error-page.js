import * as React from 'react'
import { useRouteError } from 'react-router-dom'
const dangerRobot = require('../assets/images/dangerWillRobinson.jpeg')
const errorPageStyle = {
	container: {
		"display": "flex",
		"flex-direction": "column",
		"align-items": "center",
		"width": "90%",
		"margin": "3rem auto",
		"border": "0.25rem solid #a4d822",
		"border-radius": "1rem",
		"font-size": "2.5rem",
	},
	image: {
		"height": "40rem",
		"margin-top": "1rem",
		"border-radius": ".5rem",
	},

	error: {
		"display": "flex",
		"align-items": "center",
		"justify-content": "center",
		"margin": "2rem auto",
    "border": ".2rem solid black",
    "background-color": "#c6c4c4d1",
    "width": "80%",
    "height": "10rem",
    "text-align": "center",
    "overflow-x": "scroll",
    "padding": "0.2rem",
	}
}

export default function ErrorPage() {
	const error = useRouteError()

	return (
		<div style={errorPageStyle.container}>
			<img
				style={errorPageStyle.image}
				src={dangerRobot}
				alt="Error, Will Robinson!" />
			<h1>Error, Will Robinson!</h1>
			<p>An enexpected error has occured:</p>
			<p style={errorPageStyle.error}>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	)
}