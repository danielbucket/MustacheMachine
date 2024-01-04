import * as React from 'react'
import { useState } from 'react'

import style from './index.style.css'
import Header from './components/Header'
import Collection from './components/Collection'

const DISCOGS_USER = process.env.DISCOGS_USER
const DISCOGS_TOKEN = process.env.DISCOGS_TOKEN

export default function SpinCollect() {
	const [loggedIn, setloggedIn] = useState(true)
	const [userName, setUserName] = useState(DISCOGS_USER)
	const [userToken, setUserToken] = useState(DISCOGS_TOKEN)

	return (
		<div className="discogs-app-container">
			<Header
				loggedIn={loggedIn}
				userName={userName} />
			<Collection
				loggedIn={loggedIn}
				userName={userName}
				userToken={userToken} />
		</div>
	)
}