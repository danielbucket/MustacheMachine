import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './style.module.css'
const AUTHSERVER_API_URL = process.env.AUTHSERVER_API_URL || 'http://localhost:3647'

export default function ContactForm() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [emailError, setEmailError] = useState('')
	const [passwordError, setPasswordError] = useState('')

	const navigate = useNavigate()

	const onButtonClick = () => {
		setEmailError('')
		setPasswordError('')

		if ('' === email) {
			setEmailError('Please enter your email')
			return
		}

		if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email")
      return
	  }

	  if ('' === password) {
	  	setPasswordError('Please enter a password')
	  	return
	  }

	  if (password.length < 7) {
	  	setPasswordError('The password must be 8 characters or longer')
	  	return
	  }

	  checkAccountExists(accountExists => {
	  	if (accounteExists) {
	  		logIn()
	  	} else {
	  		if (window.confirm("An account does not exist with this email address: ", + email + ". Do you want to create a new account?")) {
	  			logIn()
	  		}
	  	}
	  })
	}

	const checkAccountExists = callback => {
		fetch(`${AUTHSERVER_API_URL}/check_account`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({email})
		})
		.then(res => res.json())
		.then(res => {
			callback(res?.userExists)
		})
	}

	const logIn = () => {
		fetch(`${AUTHSERVER_API_URL}/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ email, password })
		})
		.then(res => res.json())
		.then(res => {
			if ('success' === res.message) {
				localStorage.setItem("user", JSON.stringify({ email, token:res.token }))
				props.setLoggedIn(true)
				props.setEmail(email)
				navigate('/')
			} else {
				window.alert("Wrong email or password.")
			}
		})
	}

	return (
		<div className={style.mainContainer}>
			<div className={style.titleContainer}>
				<div>Login</div>
			</div>
			<br />
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