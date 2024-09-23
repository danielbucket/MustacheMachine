import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { StyledHomePage } from './index.styled.js'
import importedImage from '../../assets/images/selfi_klr250.jpg'

function HomePage() {
	const [content, setContent] = useState({})
	const [image, setImage] = useState('')
	const data = useLoaderData()

	useEffect(() => {
		setContent(() => data)
		setImage(() => importedImage	)
	},[])

	return (
		<StyledHomePage>
			<div className={'header-container'}>
				<img src={image} alt="image of truck"/>
			</div>
			<div className="body-container">
				<div className={'text-content-container'}>
					<p>{content.text}</p>
				</div>
			</div>
		</StyledHomePage>
	)
}

export default HomePage