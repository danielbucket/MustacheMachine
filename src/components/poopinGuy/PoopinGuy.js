import * as React from 'react'
import styles from './poopinGuy.css'
const poopinIcon = require('../../assets/icons/toilet.png')

const imPoopin = () => {
	console.log(`I'm poopin!`)
};

export default function PoopinGuy(props) {
	const { poopinGuy }  = props

	return (
		<div
			className="poopin-container"
			id="excitePoop"
			onClick={() => imPoopin()}
			>
			<img className="poopin" src={poopinIcon} alt="poopin" />
			<p className="text">{poopinGuy.poopinGuySays}</p>
		</div>
	)
};