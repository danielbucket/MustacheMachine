import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gitHubIcon from '../../assets/logoIcons/github/github-mark.png'
import { MainContent } from '../../components/pageLayout.styled'
import style from './index.module.css'
import importedImage from '../../assets/images/T100_0724.jpg'


function HomePage() {
	const [data, setData] = useState({})
	const [image, setImage] = useState('')
	
	useEffect(() => {
		// async function fetch_data() {
		// 	await fetch('/api/home')
		// 		.then(response => response.json())
		// 		.then(data => setData(data))
		// }
		// fetch_data()
		setImage(importedImage)
	},[])
	
	return (
		<MainContent>
			<div className={style.imageContainer}>
				<img src={image} alt="image of truck"/>
			</div>
			<footer className={style.footerContainer}>
				<Link to={'https://github.com/danielbucket'}>
					<img src={gitHubIcon} alt="Github Icon"/>
				</Link>
			</footer>
		</MainContent>
	)
}

export default HomePage