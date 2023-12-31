import * as React from 'react'
import styles from './poopinGuy.css'
const poopinGuyIcon = require('../../assets/icons/toilet.png')

export default function PoopinGuy(props) {
	const { isPoopin, makePoop, hungerVal }  = props

	return (
		<div
			className='poopin-container'
			onClick={() => hungerVal >= 1 ? makePoop('poopin') : null}
		>
			<img className='poopin' src={poopinGuyIcon} alt="poopin icon"/>
			<div>
				<p className='is-poopin-text'>{isPoopin && hungerVal > 0 ? "I\'m poopin!" : ""}</p>
				<p className='no-poops-left-text'>{
					isPoopin === true && hungerVal === 0
						? "No more poops here!"
						: ""
				}</p>
			</div>
		</div>
	)
};