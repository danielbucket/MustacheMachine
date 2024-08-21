import React from 'react'
import style from './style/index.module.css'
import { useNavigate } from 'react-router-dom'
import { NavBtn } from '../components/NavBtn'

// this data is to be aquired via API fetch call
import { personalPageData as data } from './personalPageData.js'

const selfiImage = require('../../assets/images/selfi_0723.jpg')

export default function Personal() {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate(-1)
	}

	const navBtn = NavBtn('Home', handleClick)

	return (
		<div className={style.personalWrapper}>
			<div className={style.navWrapper}>{navBtn}</div>
			<div className={style.imageContainer}>
				<img src={selfiImage} alt="personal photo" />
			</div>
			<div className={style.bioContainer}>
				<div className={style.personText}>
					<h1>{data.personName}</h1>
					<p>{data.position}</p>
				</div>
				<div className={style.bioText}>
					<p>{data.bioText}</p>
				</div>
			</div>
			<div className={style.footerContainer}>Footer</div>
		</div>
	)
}