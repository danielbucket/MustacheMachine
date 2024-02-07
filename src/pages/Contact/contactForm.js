import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from './style/contactForm.module.css'

export function ContactForm() {
	const [email, setEmail] = useState('')
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [message, setMessage] = useState('')
	const [emailError, setEmailError] = useState('')
	const [firstNameError, setFirstNameError] = useState('')
	const [lastNameError, setLastNameError] = useState('')
	const [messageError, setMessageError] = useState('')
	const navigate = useNavigate()

	async function onButtonClick() {
		setEmailError('')
		setMessageError('')
		setFirstNameError('')
		setLastNameError('')

		if ('' === email) {
			setEmailError('Please enter your email')
			return
		}

		if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email")
      return
	  }

	  if ('' === message) {
	  	setMessageError('Please enter a message')
	  	return
	  }

	  if (message.length >= 300) {
	  	setMessageError('The message must be 300 characters or less')
	  	return
	  }

	  //form is validated
		console.log('form validated, submit')
		// navigate('/contact', {
		// 	state: { name:firstName }
		// })
		navigate('/')
	}

	return (

		<div className={style.mainContainer}>

			<div className={style.inputContainer}>
				<input
					value={firstName}
					placeholder="Your first name here..."
					onChange={
						(evt) => setFirstName(evt.target.value)
					} />
				<label className={style.errorLabel}>{firstNameError}</label>
			</div>

			<div className={style.inputContainer}>
				<input
					value={lastName}
					placeholder="Your last name here..."
					onChange={
						(evt) => setLastName(evt.target.value)
					} />
				<label className={style.errorLabel}>{lastNameError}</label>
			</div>

			<div className={style.inputContainer}>
				<input
					value={email}
					type='email'
					placeholder="Enter your email here..."
					onChange={
						(evt) => setEmail(evt.target.value)
					} />
				<label className={style.errorLabel}>{emailError}</label>
			</div>

			<div className={style.inputContainer}>
				<textarea
					className={style.textAreaBox}
					value={message}
					placeholder="Write your message here..."
					onChange={
						(evt) => setMessage(evt.target.value)
					} />
				<label className={style.errorLabel}>{messageError}</label>
			</div>

			<div className={style.inputContainer}>
				<input
					value={"Send"}
					className={style.inputButton}
					type='button'
					onClick={onButtonClick} />
			</div>

		</div>

	)
}