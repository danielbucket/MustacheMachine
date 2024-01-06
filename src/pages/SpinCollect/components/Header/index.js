import * as React from 'react'
import style from './index.style.css'
import { IsLoggedIn } from './headerHelpers'
import LoginPortal from '../LoginPortal'

export default function Header(props) {
	const { loginStatus, loginPackage, logOutPackage } = props
	const { userName } = loginPackage

	return (
		<div className='spinCollect-header-container'>
			<div className='spinCollect-header-title'>1-800-SpinCollect</div>
				<div className='login-status-container'>
					{
						!loginStatus
							? <LoginPortal loginPackage={loginPackage} />
							: <IsLoggedIn userName={userName} logOutPackage={logOutPackage} />
					}
				</div>
		</div>
	)
}