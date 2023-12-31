import * as React from 'react'
const eatinGuyIcon = require('../../assets/icons/food.png')

export default function EatinGuy(props) {
	const { isEatin, makeEat, hungerVal } = props

	return (
		<div
			className="guy-action-card-container"
			onClick={() => hungerVal < 10 ? makeEat('eatin') : null}
		>
			<img className="guy-icon" src={eatinGuyIcon} alt="eatin"/>
			<div className="guy-text-box">
				<p className="guy-action-text">{isEatin && hungerVal < 10 ? 'I\'m eatin!' : ""}</p>
		 		<p className="guy-status-text">
			 		{
			 			hungerVal === 10
			 			? "I\'m full. Make me poop so I can eat more!"
			 			: ""
			 		}
		 		</p>
			</div>
		</div>
	)
};