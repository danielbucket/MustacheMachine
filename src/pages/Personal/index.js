import React from 'react'
import style from './style/index.module.css'

const t100 = require('../../assets/images/T100_0720.jpg')
const selfiImage = require('../../assets/images/selfi2.jpg')
const { bioText } =  require('./bioText.js')
const { personName } = require('./bioText.js')
const { position } = require('./bioText.js')
// create a react page that desscribes who I am


export default function Personal() {

	return (
		<div className={style.container}>

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