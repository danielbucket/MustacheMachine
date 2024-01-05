import * as React from 'react'
import style from './index.style.css'
import LoginPortal from '../LoginPortal'
import Collection from '../Collection/Collection'

import { fetchCollection } from './appMgmtHelpers'

export default function AppMgmt(props) {
	const { userPackage } = props
	
	const [discogsData, setDiscogsData] = useState({})
	const [spotifyData, setSpotifyData] = useState({})
	const { userPackage } = props

	const handleClick = mediaSource => {
		const { sourceApi } = mediaSource

		fetchCollection(sourceApi)
		.then(data => {
			switch(data.source) {
				case 'discogs': setDiscogsData(data)
					break;
				case 'spotify': setSpotifyData(data)
			}
		})
	}

	const mediaSourceBtns = sources => {
		console.log(sources)

		return sources.map(i => {
			return (
				<button
					className='fetch-collection-btn'
					onClick={() => handleClick(i.mediaSource)}>
					Spin up {i.mediaName}
				</button>
			)
	}

	return (
		<div className='app-mgmt-container'>
			<h1 className='app-mgmt-header'>App Management</h1>
			<div className='mgmt-operations-container'>

			</div>
		</div>
	)
}