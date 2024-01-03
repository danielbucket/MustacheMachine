import * as React from 'react'
import style from './index.style.css'

export default function Header(props) {
	const { loginStatus } = props

	return (
		<div className='discogs-header-container'>
			<div>Discogs</div>
			<div>
				{
					loginStatus
						? 'You are currently logged in.'
						: 'You are not currently logged in.'
				}
			</div>
		</div>
	)
}