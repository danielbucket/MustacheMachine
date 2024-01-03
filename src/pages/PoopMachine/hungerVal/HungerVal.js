import * as React from 'react';
import style from './hungerVal.css';
import lightenDarken from './lightenDarken'

export default function HungerVal(props) {
	const { hungerVal, maxPoops } = props

	const buildPoopMeter = () => {
		const meterArray = []

		for (let i=maxPoops; i >= 0; i--) {
			let poopsVal = i.toString()
			if (i === 10) { poopsVal = "9f" }
			if (i <= 9) { poopsVal = i + "e" }

			const inputColor = '#ff' + poopsVal + '1d'
			let newColor = lightenDarken(inputColor, i)
			const meterStyle = { "backgroundColor":newColor }

			meterArray.push(
				<div
					key={i}
					className='meter-element'
					style={meterStyle}
					>
				{i === hungerVal ? i + " poops in my bum!": ''}
				</div>
			)
		}
		return meterArray
	}

	const poopMeter = buildPoopMeter()

	return (
		<div className='hunger-val-container'>
			{poopMeter}
		</div>
	)
};