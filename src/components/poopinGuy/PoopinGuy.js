import * as React from 'react'
const poopinGuyIcon = require('../../assets/icons/toilet.png')

export default function PoopinGuy(props) {
	const { isPoopin, makePoop, hungerVal }  = props

	return (
		<div
			className='guy-action-card-container'
			onClick={() => hungerVal >= 1 ? makePoop('poopin') : null}
		>
			<img className='guy-icon' src={poopinGuyIcon} alt="poopin icon"/>
			<div className="guy-text-box">
				<p className='guy-action-text'>{isPoopin && hungerVal > 0 ? "I\'m poopin!" : ""}</p>
				<p className='guy-status-text'>{
					isPoopin === true && hungerVal === 0
						? "No more poops here!"
						: ""
				}</p>
			</div>
		</div>
	)
};