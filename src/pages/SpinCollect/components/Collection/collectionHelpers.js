import * as React from 'react'

export const spinCard = card => {
	const { id, cover_image, title, year, } = card
	const { name } = card.artists[0]

	const openCard = () => {
		console.log('open dick season')
	}

	return (
		<div
			key={card.id}
			className='spin-card'
			onClick={(i) => openCard(i)}
			>
			<img
				className='spin-card-album-img'
				src={card.cover_image}
				alt='card image' />
			<div className='card-info'>
				<div className='spin-card-album-name'>{name}</div>
				<div className='spin-card-album-title'>{title}</div>
				<div>{year}</div>
			</div>		
		</div>
	)
}