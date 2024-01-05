import * as React from 'react'

export const IsLoggedIn = (userData) => {
	const { name } = userData

	return (
		<div className='is-logged-in'>
			<div>{name}</div>
			<p>You are currently logged in.</p>
		</div>
	)
}