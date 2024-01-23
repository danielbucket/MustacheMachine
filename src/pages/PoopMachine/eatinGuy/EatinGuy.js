import * as React from 'react'
const eatinGuyIcon = require('../../../assets/icons/food.png')

export default function EatinGuy(props) {
	const { isEatin, makeEat, hungerVal, maxPoops, style } = props

	return (
		<div
			className={style.guyActionCardContainer}
			onClick={() => hungerVal < maxPoops ? makeEat('eatin') : null}
		>
			<img className={style.guyIcon} src={eatinGuyIcon} alt="eatin"/>
			<div className={style.guyTextBox}>
		 		<p className={style.guyStatusText}>
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