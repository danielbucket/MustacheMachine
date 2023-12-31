import * as React from 'react'
import { useState } from 'react'
import style from './App.style.css'
import Header from './Header/Header'
import PoopinGuy from './poopinGuy/PoopinGuy'
import EatinGuy from './eatinGuy/EatinGuy'
import HungerVal from './hungerVal/HungerVal'

export default function App() {
	const [hungerVal, setHungerVal] = useState(0)
	const [isEatin, setIsEatin] = useState(false)
	const [isPoopin, setIsPoopin] = useState(false)

	const handleClick = action => {
		switch(action) {
			case 'eatin': {
				setIsEatin(true)
				setIsPoopin(false)
				hungerVal < 10 ? setHungerVal(a => a + 1) : null
				break
			}
			case 'poopin': {
				setIsEatin(false)
				setIsPoopin(true)
				hungerVal > 0 ? setHungerVal(a => a - 1) : null
				break
			}
		}
	};

	return (
		<div className="app-container">
			<Header isEatin={isEatin} hungerVal={hungerVal} />
			<div className="both-guys-container">
				<EatinGuy
					isEatin={isEatin}
					makeEat={handleClick}
					hungerVal={hungerVal}
				/>
				<HungerVal
					hungerVal={hungerVal}
				/>
				<PoopinGuy
					isPoopin={isPoopin}
					makePoop={handleClick}
					hungerVal={hungerVal}
				/>
			</div>
		</div>
	)
};