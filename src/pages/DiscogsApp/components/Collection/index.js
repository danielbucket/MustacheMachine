import * as React from 'react'
import style from './index.style.css'
import { getDiscogs } from '../../helpers/discogsHelpers'

export default function Collection(userData) {
	const { userName, userToken } = userData
	const collection = getDiscogs(userName,userToken)
	console.log("Collection: ", collection)

	return (
		<div
			className='discogs-collection-container'>
			{userCollection}
			</div>
	)
}