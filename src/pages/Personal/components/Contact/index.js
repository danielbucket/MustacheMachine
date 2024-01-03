import * as React from 'react'
import { Form } from 'react-router-dom'
import style from './index.style.css'

export default function Contact() {
	const contact = {
		first: 'First Name',
		last: 'Last Name',
		notes: 'What do you need?',
	}

	return (
		<div id='contact' className='contact-container'>
			<p>{contact.first}</p>
			<p>{contact.last}</p>
			<p>{contact.notes}</p>
		</div>
	)
}

