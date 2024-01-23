import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(props) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [emailError, setEmailError] = useState('')
	const [passwordError, setPasswordError] = useState('')

	const navigate = useNavigate()

	const onButtonClick = () => {
		setEmailError('')
		setPasswordError('')

		if ("" === email) {
			setEmailError("Please enter your email")
			return
		}

		if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
			setEmailError("Please enter a valid email")
			return
		}

		if (password.length < 7) {
			setPasswordError("The password must be 8 characters or longer")
			return
		}
	}

	return (
		<>
			<div className={'login-main-container'}>
				<div className={'login-title-container'}>
					<div>Login</div>
				</div>
				<br />
				<div className={'login-input-container'}>
					<input
						value={email}
						placeholder="Enter your email here"
						onChange={(ev) => setEmail(ev.target.value)}
						className={'login-input-box'} />
					<label className={'login-error-label'}>{emailError}</label>
				</div>
				<br />
				<div className={'login-input-container'}>
					<input 
						value={password}
						placeholder="Enter your password here"
						onChange={(ev) => setPassword()}
						className={'login-input-box'} />
					<label className={'login-error-label'}>{passwordError}</label>
				</div>
				<br />
				<div className={'login-input-container'}>
					<input
						className={'login-input-button'}
						type='button'
						onClick={onButtonClick}
						value={'Log In'} />
				</div>
			</div>
		</>
	)
}




