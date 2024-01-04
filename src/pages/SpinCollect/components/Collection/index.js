import * as React from 'react'
import { useState } from 'react'
import style from './index.style.css'
import { getDiscogs } from '../../utils/discogsHelpers'
import { spinCard } from './collectionHelpers'

export default function Collection(props) {
	const { loggedIn, userPackage } = props
	const [discogsCollection, setDiscogsCollection] = useState([])

	const fetchCollection = () => {
		if (!loggedIn) {
			throw new Error('You are not logged in.')
		} else {
			getDiscogs(userPackage)
			.then(cardDataArr => setDiscogsCollection(cardDataArr))
		}
	}

	return (
		<div className='discogs-collection-container'>
			<div>
				<button
					className='fetch-collection-btn'
					onClick={() => fetchCollection()}
					>Spin up {userPackage.USER_NAME}</button>
			</div>
				<div className='discogs-spin-card-container'>
				{discogsCollection.map(i => spinCard(i))}
				</div>
			</div>
	)
}