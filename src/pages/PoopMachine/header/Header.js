import React from 'react'
import styles from './header.css'

function Header(props) {
	const { isEatin, hungerVal } = props
	const defaultText = "Poop Machine Man, GO!"
	const isEatinText =	 'The more you eat, the more you get to poop!'
	const isPoopinText = 'Great job poopin\' there, poopin\' guy!'

	return (
		<div className="header-container">
			<p>{
				isEatin && hungerVal >= 1
					? isEatinText
					: !isEatin && hungerVal > 0
						? isPoopinText
						: defaultText
			}</p>
		</div>
	)
}

export default Header;