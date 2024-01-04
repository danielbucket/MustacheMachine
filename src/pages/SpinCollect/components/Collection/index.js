import * as React from 'react'
import { useState } from 'react'
import style from './index.style.css'
import { getDiscogs } from '../../helpers/discogsHelpers'
import DiscogsCollectCard from './DiscogsCollectCard'

const spinCard = card => {
	const { id, cover_image, title, year, } = card

	return (
		<div
			key={card.id}
			className='spin-card'>
			<div className='spin-card-album'>{card.artists[0].name}</div>
			<img
				className='spin-card-thumb-img'
				src={card.cover_image}
				alt='card image' />
			<div className='spin-card-title'>{title}</div>
			<div className='spin-card-data'>
				<div>Year: {year}</div>
				<div className='album-genres'>Genres: {card.genres.map(i => <div>{i}</div>)}</div>
			</div>
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

	return (
		<div className='discogs-collection-container'>
			<div>
				<button
					className='fetch-collection-btn'
					onClick={() => fetchCollection()}
					>Spin up {userName}</button>
			</div>
				<div className='discogs-spin-card-container'>
				{discogsCollection.map(i => spinCard(i))}
				</div>
			</div>
	)
}