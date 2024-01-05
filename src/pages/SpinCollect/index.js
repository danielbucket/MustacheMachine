import * as React from 'react'
import { useState } from 'react'

import style from './index.style.css'
import Header from './components/Header'
import Collection from './components/Collection'
import AppManagement from './components/AppManagement'

const user_package = {
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
			<div className='spin-collect-app-body'>
				<AppManagement />
				<Collection
					loggedIn={loggedIn}
					userPackage={userPackage} />
			</div>
		</div>
	)
}