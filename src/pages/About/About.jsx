import React, { useState, useEffect } from 'react'
import { StyledAboutPage } from './index.styled'

const importedImage = require('../../assets/images/T100_0724.jpg')

function About() {
	const [image, setImage ] = useState()
	const [data, setData] = useState({})

	useEffect(() => {
		async function fetchData() {
			await fetch('/api/v1/about/GET_data')
				.then(response => response.json())
				.then(data => setData(data))
		}
		fetchData()
		setImage(importedImage)
	},[])

	const { name, title, bio } = data

	return (
		<StyledAboutPage>
			<div className={'header-container'}>
				<img src={image} alt="personal photo" />
			</div>

			<div className={'body-container'}>
				<div className="text-content-container">
					{/* // this is where a new styled-component will be layered in for this compnents specific styling */}
					<div className={'name-text'}>
						<h1>{name}</h1>
						<p>{title}</p>
					</div>
					<div className={'bio-text'}>
						<p>{bio}</p>
					</div>
				</div>
			</div>
		</StyledAboutPage>
	)
}

export default About