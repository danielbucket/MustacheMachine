import * as React from 'react'
import styles from './poopinGuy.css'
const poopinGuyIcon = require('../../assets/icons/toilet.png')

export default function PoopinGuy(props) {
	const { poopinGuySays, makePoop }  = props

	return (
		<div
			className="poopin-container"
			id="excitePoop"
			onClick={() => makePoop()}
			>
			<img className="poopin" src={poopinGuyIcon} alt="poopin"/>
			<p className="poopin-text">{poopinGuySays}</p>
		</div>
	)
};