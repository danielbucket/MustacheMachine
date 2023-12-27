import * as React from 'react'
import styles from './poopinGuy.module.css'
const poopinIcon = require('../../assets/icons/toilet.png')

export default function PoopinGuy(props) {
	const { poopinGuy }  = props

	return (
		<div className={styles.poopinContainer}
					onClick={(i) => {
						console.log('I poopin!', i.target)
					}}>
			<img className={styles.poopin} src={poopinIcon} alt="poopin" />
			<p className={styles.text}>{poopinGuy.poopinGuySays}</p>
		</div>
	)
}