import React from 'react'
import styles from './header.css'

function Header(props) {
	const { actionText } = props

	return (
		<div className="header-container">
			<h1>{actionText}</h1>
		</div>
	)
}

export default Header;