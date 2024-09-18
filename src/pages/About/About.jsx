import React, { useState, useEffect } from 'react'
import { MainContent } from '../../components/pageLayout.styled'
import style from './style/index.module.css'

const importedImage = require('../../assets/images/danielBucket.jpg')

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
		<MainContent>
			<div className={style.imageContainer}>
				<img src={image} alt="personal photo" />
			</div>
			<div className={style.bioContainer}>
				<div className={style.personText}>
					<h1>{name}</h1>
					<p>{title}</p>
				</div>
				<div className={style.bioText}>
					<p>{bio}</p>
				</div>
			</div>
			<div className={style.footerContainer}>Footer</div>
		</MainContent>
	)
}

export default About