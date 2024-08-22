import React from 'react'
import style from './style/index.module.css'
import { useNavigate, useLoaderData } from 'react-router-dom'
import { NavBtn } from '../components/NavBtn'

export default function Personal() {
	const navigate = useNavigate()
	const data = useLoaderData()
	const { name, position, bio, image } = data

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