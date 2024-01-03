import * as React from 'react'
import style from './index.style.css'

export default function Header(props) {
	const { loginStatus, userName } = props

	return (
		<div className='discogs-header-container'>
			<div className='discogs-header-title'>1-800-SpinCollect</div>
				<div className='login-status-container'>
					<div className='discogs-user-name'>{userName}</div>
					<div className='discogs-header-login-status'>
						{
							loginStatus
								? 'You are currently logged in.'
								: 'You are not currently logged in.'
						}
					</div>
				</div>
		</div>
	)
}