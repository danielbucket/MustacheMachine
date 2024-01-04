import * as React from 'react'
import { useState } from 'react'

import style from './index.style.css'
import Header from './components/Header'
import Collection from './components/Collection'

const user_package = {
	KEY: process.env.DISCOGS_CONSUMER_KEY,
	SECRET: process.env.CONSUMER_SECRET,
	USER_NAME: process.env.DISCOGS_USER,
	USER_TOKEN: process.env.DISCOGS_TOKEN,
}

export default function SpinCollect() {
	const [loggedIn, setloggedIn] = useState(true)
	const [userPackage, setUserPackage] = useState(user_package)

	return (
		<div className="discogs-app-container">
			<Header
				loggedIn={loggedIn}
				userName={userPackage.USER_NAME} />
			<Collection
				loggedIn={loggedIn}
				userPackage={userPackage} />
		</div>
	)
}