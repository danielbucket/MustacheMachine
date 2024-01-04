import * as React from 'react'

export const spinCard = card => {
	const { id, cover_image, title, year, } = card

	return (
		<div
			key={card.id}
			className='spin-card'>
			<img
				className='spin-card-thumb-img'
				src={card.cover_image}
				alt='card image' />
			<div className='spin-card-album'>{card.artists[0].name}</div>
			<div className='spin-card-title'>{title}</div>
			<div className='spin-card-data'>
				<div>{year}</div>
				<div className='album-genres'>{card.genres.map(i => i)}</div>
			</div>
		</div>
	)
}