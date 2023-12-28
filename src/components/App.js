import * as React from 'react'
import styles from './app.css'
import Header from './Header/Header'
import PoopinGuy from './poopinGuy/PoopinGuy'

const poopinGuySays = 'Poop Strong!'

export default function App() {

	return (
		<div className="app-container">
			<Header />
			<PoopinGuy poopinGuy={poopinGuySays} />
		</div>
	)
}