import * as React from 'react'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
	const error = useRouteError()

	return (
		<div className="error-page-container">
			<h1>Error, Will Robinson!</h1>
			<p>An enexpected error has occured.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	)
}