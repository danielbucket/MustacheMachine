import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react'

import style from './index.style.css'
import Header from './components/Header'
import AppManagement from './components/AppMgmt'
import { loginRoute } from './utils/constants'

const userStub = {
	userName: 'bucketLimited',
	userToken: 'password123',
}

export default function SpinCollect() {
	const [loginStatus, setLoginStatus] = useState(true)
	const [userPackage, setUserPackage] = useState(null)

	return (
		<div className="discogs-app-container">
			<Header
				logOutPackage={{setLoginStatus, setUserPackage}}
				loginStatus={loginStatus}
				loginPackage={{userPackage, setUserPackage, loginRoute}} />
			<AppManagement userPackage={userPackage} />
		</div>
	)
}