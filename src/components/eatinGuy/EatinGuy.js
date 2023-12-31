import * as React from 'react'
import styles from './eatinGuy.css'
const eatinGuyIcon = require('../../assets/icons/food.png')

export default function EatinGuy(props) {
	const { isEatin, makeEat, hungerVal } = props
	const isEatinText = 'I eatin\'!'
	const hungerValText = 'I\'m full. Make me poop so I can eat more!'

	return (
		<div
			className="eatin-container"
			onClick={() => hungerVal < 10 ? makeEat('eatin') : null}
			>
			<img className="eatin" src={eatinGuyIcon} alt="eatin"/>
			<div>
				<p className="is-full-text">{isEatin && hungerVal < 10 ? 'I\'m eatin!' : ''}</p>
		 		<p>{hungerVal === 10 ? 'I\'m full. Make me poop so I can eat more!' : ''}</p>
			</div>
		</div>
	)
}