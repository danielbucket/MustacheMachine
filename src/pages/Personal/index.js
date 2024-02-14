import React from 'react'

// create a react page that desscribes who I am


export default function Personal() {
	const bio = 'This is my bio text.'

	return (
		<div className={style.container}>
			{/* an h1 with inline style */}
			<h1>Me llamo es Daniel</h1>
		</div>
	)
}