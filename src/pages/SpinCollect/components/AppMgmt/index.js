import * as React from 'react'
import { useState } from 'react'
import style from './index.style.css'
import LoginPortal from '../LoginPortal'
import Collection from '../Collection/'

import { fetchCollection } from './appMgmtHelpers'

export default function AppMgmt(props) {
	const [mediaSourceData, setMediaSourceData] = useState({})
	const { userPackage } = props

	const handleClick = mediaSource => {
		const { sourceApi } = mediaSource

		fetchCollection(sourceApi)
		.then(data => {
			const newState = Object.assign({}, mediaSourceData, data)
			setMediaSourceData(newState)
		})
	}

	const mediaSourceBtns = (sources) => {
		return (
			<button
				className='fetch-collection-btn'
				onClick={(i) => handleClick(i)}>
				Spin up {i.mediaName}
			</button>
		)
	}

	return (
		<div className='app-mgmt-container'>
			<div className='mgmt-operations-container'>
				<h1>App Management</h1>
				<div className='mgmt-controls'>Controls</div>
			</div>
			<div className='results-container'>
				Results Container
			</div>	
		</div>
	)
}