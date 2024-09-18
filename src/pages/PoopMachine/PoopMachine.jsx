import * as React from 'react'
import { useState } from 'react'
import style from './index.style.module.css'
import Header from './Header/Header'
import PoopinGuy from './poopinGuy/PoopinGuy'
import EatinGuy from './eatinGuy/EatinGuy'
import HungerVal from './hungerVal/HungerVal'

export default function PoopMachine() {
	const [hungerVal, setHungerVal] = useState(0)
	const [isEatin, setIsEatin] = useState(false)
	const [isPoopin, setIsPoopin] = useState(false)
	const [maxPoops, setMaxPoops] = useState(10)

	const handleClick = action => {
		switch(action) {
			case 'eatin': {
				setIsEatin(true)
				setIsPoopin(false)
				hungerVal < maxPoops ? setHungerVal(a => a + 1) : null
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
		<div className={style.appContainer}>
			<Header isEatin={isEatin} hungerVal={hungerVal} />
			<div className={style.bothGuysContainer}>
				<EatinGuy
					isEatin={isEatin}
					makeEat={handleClick}
					hungerVal={hungerVal}
					maxPoops={maxPoops}
					style={style}
				/>
				<HungerVal
					hungerVal={hungerVal}
					maxPoops={maxPoops}
				/>
				<PoopinGuy
					isPoopin={isPoopin}
					makePoop={handleClick}
					hungerVal={hungerVal}
					style={style}
				/>
			</div>
		</div>
	)
};