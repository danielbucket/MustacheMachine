import * as React from 'react'
import styles from './eatinGuy.css'
const eatinGuyIcon = require('../../assets/icons/food.png')

export default function EatinGuy(props) {
	const { eatinGuySays, makeEat } = props

	return (
		<div
			className="eatin-container"
			id="exciteEat"
			onClick={() => makeEat()}
			>
			<img className="eatin" src={eatinGuyIcon} alt="eatin"/>
			<p className="eatin-text">{eatinGuySays}</p>
		</div>
	)
}