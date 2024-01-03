import * as React from 'react'
const eatinGuyIcon = require('../../../assets/icons/food.png')

export default function EatinGuy(props) {
	const { isEatin, makeEat, hungerVal, maxPoops } = props

	return (
		<div
			className="guy-action-card-container"
			onClick={() => hungerVal < maxPoops ? makeEat('eatin') : null}
		>
			<img className="guy-icon" src={eatinGuyIcon} alt="eatin"/>
			<div className="guy-text-box">
		 		<p className="guy-status-text">
			 		{
			 			hungerVal === maxPoops
			 			? "I\'m full. Make me poop so I can eat more!"
			 			: isEatin
			 				? "Im  eatin!"
			 				: null
			 		}
			 	</p>
			</div>
		</div>
	)
};