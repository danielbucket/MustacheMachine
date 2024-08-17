import React from 'react'
import style from './style/index.module.css'

const t100 = require('../../assets/images/T100_0720.jpg')
const selfiImage = require('../../assets/images/selfi2.jpg')
const { bioText } =  require('./bioText.js')
// create a react page that desscribes who I am


export default function Personal() {

	return (
		<div className={style.container}>
			<div className={style.imageContainer}>
				<img className={style.imageContainer} src={selfiImage} alt="T100" />
			</div>
			<div className={style.bioContainer}>
				<h1>About Me</h1>
				<p>{bioText}</p>
			</div>
		</div>
	)
}