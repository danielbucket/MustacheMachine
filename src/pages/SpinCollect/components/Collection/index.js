import * as React from 'react'
import { useState } from 'react'
import style from './index.style.css'
import { getDiscogs } from '../../helpers/discogsHelpers'
import DiscogsCollectCard from './DiscogsCollectCard'

const spinCard = card => {
	const { id, master_id, master_url, thumb } = card

	return (
		<div
			key={card.id}
			className='spin-card'>
			<div className='spin-card-id'>Card ID: {card.id}</div>
			<img
				className='spin-card-thumb-img'
				src={card.thumb}
				alt='card image' />
		</div>
	)
}

export default function Collection(props) {
	const { loggedIn, userName, userToken } = props
	const [discogsCollection, setDiscogsCollection] = useState([])

	const fetchCollection = () => {
		if (!loggedIn) {
			throw new Error('You are not logged in.')
		} else {
			getDiscogs(DiscogsCollectCard,userName,userToken)
			.then(cardDataArr => setDiscogsCollection(cardDataArr))
		}
	}

			// .then(cards => setDiscogsCollection(cards))
	return (
		<div className='discogs-collection-container'>
			<div>
				<button
					className='fetch-collection-btn'
					onClick={() => fetchCollection()}
					>Spin up {userName}</button>
			</div>
				<div className='discogs-spin-card-container'>
				// {discogsCollection.map(i => spinCard(i))}
				</div>
			</div>
	)
}