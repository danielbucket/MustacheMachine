import * as React from 'react'
const poopinGuyIcon = require('../../../assets/icons/bowel-motion.png')

export default function PoopinGuy(props) {
	const { isPoopin, makePoop, hungerVal, style }  = props

	return (
		<div
			className={style.guyActionCardContainer}
			onClick={() => hungerVal >= 1 ? makePoop('poopin') : null}>
			<img className={style.guyIcon} src={poopinGuyIcon} alt="poopin icon"/>
			<div className={style.guyTextBox}>
				<p className={style.guyStatusText}>
					{
						isPoopin === true && hungerVal === 0
							? "No more poops here!"
							: isPoopin && hungerVal > 0
								? "I\'m poopin!"
								: null
					}
				</p>
			</div>
		</div>
	)
};