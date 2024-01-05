import * as React from 'react'
import style from './index.style.css'
import { IsLoggedIn } from './headerHelpers'

export default function Header(props) {
	const { loginStatus, loginPackage } = props
	const { userName } = loginPackage.userPackage

	return (
		<div className='discogs-header-container'>
			<div className='discogs-header-title'>1-800-SpinCollect</div>
				<div className='login-status-container'>
					{
						!loginStatus
							? <LoginPortal loginPackage={loginPackage} />
							: <IsLoggedIn userName={userName} />
					}
				</div>
		</div>
	)
}