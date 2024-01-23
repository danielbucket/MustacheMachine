import * as React from 'react'
import { useState } from 'react'
import style from './index.style.css'
import { getDiscogs } from '../../utils/discogsHelpers'
import { spinCard } from './collectionHelpers'

export default function Collection(props) {
	const { loggedIn, userPackage, media } = props
	


	return (
		<div className='spinCollect-collection-container'>
			<div className='collection-navigation'>
				<button
					className='fetch-collection-btn'
					onClick={() => fetchCollection()}>
					Spin up {userPackage.USER_NAME}
				</button>
			</div>
			<div className='spinCollect-spin-card-container'>
				{
					discogsCollection.length > 0
						? discogsCollection.map(i => spinCard(i))
						: <div className='no-data-found'>'No data from Discogs.</div>
				}
			</div>
		</div>
	)
}