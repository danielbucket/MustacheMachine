import * as React from 'react'

export function IsLoggedIn(props) {
	const { userName, logOutPackage } = props

	const handleClick = () => {
		logOutPackage.setLoginStatus(false)
		logOutPackage.setUserPackage(null)
	}

	return (
		<div className='is-logged-in-container'>
			<div className='active-user-name'>{userName || 'McPoopy Pants'}</div>
			<p>You are currently logged in.
				<span onClick={handleClick()}>Log out?</span>
			</p>
		</div>
	)
}