import React, { useState, useEffect } from 'react'
import style from './index.style.css'

export default function LoginPortal({loginPackage}) {
	const [name, setName] = useState("")
	const [password, setPassword] = useState("")
	const [errors, setErrors] = useState([])

	const { userPackage, setUserPackage, loginRoute } = loginPackage

	const handleChange = (event) => {
		switch (event.target.name) {
			case 'name': setName(event.target.value);
				break;
			case 'password': setPassword(event.target.value);
				break;
		}
	}

	useEffect(() => {

	},[])

	const handleSubmit = event => {
		event.preventDefault()
		const userData = { name:name, loggedIn:true }

		if (!name) {
			setErrors(["Please enter your name."])
			return
		}
		if (!password) {
			setErrors(["Please enter your password."])
			return
		}

		fetch(loginRoute)
		.then(res => {
			if (res.status === 200) {
				setUserPackage(userData)
			} else {
				setErrors([res.statusText])
			}
		})
		.catch(error => {
			setErrors([error.message])
		})
	}

	
	return (
		<form
			className='spinConnect-login-portal-container'
			onSubmit={handleSubmit}>
			<input
				type='text'
				name='name'
				placeholder='User name'
				autoComplete={'off'}
				onChange={handleChange} />
			<input
				type='text'
				name='password'
				placeholder='password'
				autoComplete={'off'}
				onChange={handleChange} />
			<input type='submit' value='Submit' />
			{errors.map((error, index) => (
				<p key={index}>{error}</p>
			))}
		</form>
	)
}