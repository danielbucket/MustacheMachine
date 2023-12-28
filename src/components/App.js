import * as React from 'react'
import { useState } from 'react'
import styles from './app.css'
import Header from './Header/Header'
import PoopinGuy from './poopinGuy/PoopinGuy'
import EatinGuy from './eatinGuy/EatinGuy'


export default function App() {
	const [hunger, setHunger] = useState(0)

	const poopinGuySays = 'Poop Strong!'
	const eatinGuySays = 'I eatin!'
	const eatinText = 'Eat up, fat guy!'
	const poopinText = 'Good job poopin there, poopin guy!'

	const makeEat = () => {
		console.log('I eatin!')
	};

	const makePoop = () => {
		console.log('I poopin!')
	};

	const hungerMeter = () => {

		return (
			<div
				className="fill-meter"
			></div>
		)
	};

	return (
		<div className="app-container">
			<Header actionText={hunger !== 0 ? eatinText : poopinText}/>
			<div className="guy-container">
				<EatinGuy eatinGuySays={eatinGuySays} makeEat={makeEat} />
				<PoopinGuy poopinGuySays={poopinGuySays} makePoop={makePoop}/>
			</div>
		</div>
	)
};