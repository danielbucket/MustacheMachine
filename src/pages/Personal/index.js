import React from 'react'
import style from './style/index.module.css'
import { useNavigate } from 'react-router-dom'

import { NavBtn } from '../../pages/components/NavBtn'

const t100 = require('../../assets/images/T100_0720.jpg')
const selfiImage = require('../../assets/images/selfi2.jpg')
const { bioText } =  require('./bioText.js')
const { personName } = require('./bioText.js')
const { position } = require('./bioText.js')
// create a react page that desscribes who I am


export default function Personal() {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate(-1)
	}

	const navBtn = NavBtn('Home', handleClick)

	return (
		<div className={style.personalWrapper}>
			{navBtn}
			{/* <div className={style.navBtnContainer}>
				<input
					className={style.navBtn}
					type='button'
					value={`Back to <Home />`}
					onClick={() => handleClick()} />
			</div> */}

			<div className={style.imageContainer}>
				<img className={style.image} src={selfiImage} alt="T100" />
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
			
		</div>
	)
}