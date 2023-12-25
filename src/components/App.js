import React from 'react'
import styles from './app.module.css'
import Header from './Header/Header'

const rootPath = 'Poop Strong!'
const poopin = require('../assets/icons/toilet.png')

export default function App({ props }) {

	return (
		<div className={styles.appContainer}>
			<Header />
			<div className={styles.imageContainer}>
				<img className={styles.poopin} src={poopin} alt="poopin" />
			</div>
		</div>
	)
}