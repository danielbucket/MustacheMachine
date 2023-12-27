import React from 'react'
import styles from './app.module.css'
import Header from './Header/Header'
import PoopinGuy from './poopinGuy/PoopinGuy'

const poopinGuySays = 'Poop Strong!'

export default function App() {

	return (
		<div className={styles.appContainer}>
			<Header />
			<PoopinGuy poopinGuy={poopinGuySays} />
		</div>
	)
}