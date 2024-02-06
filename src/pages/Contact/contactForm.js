import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './style/contactForm.module.css'

export function ContactForm() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [emailError, setEmailError] = useState('')
	const [passwordError, setPasswordError] = useState('')

	const navigate = useNavigate()

	async function onButtonClick() {
		// setEmailError('')
		// setPasswordError('')

		// if ('' === email) {
		// 	setEmailError('Please enter your email')
		// 	return
		// }

		// if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    //   setEmailError("Please enter a valid email")
    //   return
	  // }

	  // if ('' === password) {
	  // 	setPasswordError('Please enter a password')
	  // 	return
	  // }

	  // if (password.length < 7) {
	  // 	setPasswordError('The password must be 8 characters or longer')
	  // 	return
	  // }

	  //form is validated
		console.log('form validated, submit')
	}

	return (
		<div className={style.mainContainer}>
			<div className={style.inputContainer}>
				<input
					value={email}
					placeholder="Enter your email here"
					onChange={(evt) => setEmail(evt.target.value)}
					className={style.inputBox} />
				<label className={style.errorLabel}>{emailError}</label>
			</div>
			<br />
			<div className={style.inputContainer}>
				<input 
					value={password}
					placeholder="Enter your password"
					onChange={(evt) => setPassword(evt.target.value)}
					className={style.inputBox} />
				<label className={style.errorLabel}>{passwordError}</label>
			</div>
			<br />
			<div className={style.inputContainer}>
				<input
					value={"Log In"}
					className={style.inputButton}
					type='button'
					onClick={onButtonClick} />
			</div>
		</div>
	)
}