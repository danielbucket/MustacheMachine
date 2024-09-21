import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gitHubIcon from '../../assets/logoIcons/github/github-mark.png'
import { StyledHomePage } from './index.styled.js'
import importedImage from '../../assets/images/selfi_klr250.jpg'


function HomePage() {
	const [data, setData] = useState({})
	const [image, setImage] = useState('')
	
	useEffect(() => {
		async function fetch_data() {
			await fetch('/api/v1/home/GET_data')
				.then(response => response.json())
				.then(data => setData(data))
		}
		fetch_data()
		setImage(importedImage)
	},[])

	return (
		<StyledHomePage>
			<div className={'header-container'}>
				<img src={image} alt="image of truck"/>
			</div>
			
			<div className="body-container">
				<div className={'text-content-container'}>
					<p>{data.text}</p>
				</div>
			</div>
		</StyledHomePage>
	)
}

export default HomePage