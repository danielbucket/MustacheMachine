import React, { useState, useEffect } from 'react'
import style from './style/index.module.css'
import { useNavigate, useLoaderData } from 'react-router-dom'
import { NavBtn } from '../components/Wrapper'

const importedImage = require('../../assets/images/danielBucket.jpg')

export default function Personal() {
	const [image, setImage ] = useState()
	const navigate = useNavigate()
	const { name, position, bio } = useLoaderData()

	useEffect(() => {
		setImage(importedImage)
	},[])
	
	const handleClick = () => {
		navigate(-1)
	}

	const navBtn = NavBtn('Home', handleClick)

	return (
		<div className={style.personalWrapper}>
			<div className={style.navWrapper}>{navBtn}</div>
			<div className={style.imageContainer}>
				<img src={image} alt="personal photo" />
			</div>
			<div className={style.bioContainer}>
				<div className={style.personText}>
					<h1>{name}</h1>
					<p>{position}</p>
				</div>
				<div className={style.bioText}>
					<p>{bio}</p>
				</div>
			</div>
			<div className={style.footerContainer}>Footer</div>
		</div>
	)
}