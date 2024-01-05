import * as React from 'react'
import { useState } from 'react'

import style from './index.style.css'
import Header from './components/Header'
import AppManagement from './components/AppManagement'


export default function SpinCollect() {
	const [loginStatus, setLoginStatus] = useState(true)
	const [appUserData, setAppUserData] = useState({})
	const [userPackage, setUserPackage] = useState({})


	return (
		<div className="discogs-app-container">
			<Header
				loginStatus={loginStatus}
				loginPackage={userPackage, setUserPackage} />
			<AppManagement userPackage={userPackage.discogs} />
		</div>
	)
}