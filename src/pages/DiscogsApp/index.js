import * as React from 'react'
import { useState } from 'react'
import style from './index.style.css'
import Header from './components/Header'

export default function DiscogsApp() {
	const [loginStatus, setLoginStatus] = useState(true)
	const text = 'Discogs App Page'

	return (
		<div className="discogs-app-container">
			<Header loginStatus={loginStatus} />
		</div>
	)
}