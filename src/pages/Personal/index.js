import React from 'react'
import style from './style/index.module.css'
// create a react page that desscribes who I am


export default function Personal() {
	const bio = 'This is my bio text.'

	return (
		<div className={style.container}>
			<h1>About Me</h1>
			<p>Me llamo es Daniel</p>
			<p>Donde es el bano?</p>
			<p>Me gusta en la biblioteca</p>
			<p>Me gusta en la playa</p>
		</div>
	)
}