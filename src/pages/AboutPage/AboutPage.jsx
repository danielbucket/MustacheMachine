import React, { useState, useEffect } from 'react'
import { useLoaderData, Outlet } from 'react-router-dom'
import { StyledAboutPage } from './index.styled'

const importedImage = require('../../assets/images/danielBucket.jpg')

function About() {
	const [image, setImage ] = useState()
	const [content, setContent] = useState({})
	const loaderData = useLoaderData()

	useEffect(() => {
		setContent(() => loaderData)
		setImage(() => importedImage)
	},[])

	return (
		<StyledAboutPage>
			<div className={'header-container'}>
				<img src={image} alt="selfie image" />
			</div>
			<div className={'body-container'}>
				<div className="text-content-container">
					<div className={'name-text'}>
						<h1>{content.name}</h1>
						<p>{content.title}</p>
					</div>
					<div className={'bio-text'}>
						<p>{content.bio}</p>
					</div>
				</div>
			</div>
			<Outlet />
		</StyledAboutPage>
	)
}

export default About