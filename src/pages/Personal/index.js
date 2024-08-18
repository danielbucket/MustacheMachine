import React from 'react'
import style from './style/index.module.css'
import { useNavigate } from 'react-router-dom'

import { NavBtn } from '../components/NavBtn'

const selfiImage = require('../../assets/images/selfi_0723.jpg')
const { bioText } =  require('./bioText.js')
const { personName } = require('./bioText.js')
const { position } = require('./bioText.js')

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
					<h1>{personName}</h1>
					<p>{position}</p>
				</div>
				<div className={style.bioText}>
					<p>{bioText}</p>
				</div>
			</div>
			<div className={style.footerContainer}>Footer</div>
		</div>
	)
}