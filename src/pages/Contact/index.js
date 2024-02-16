import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import style from './style/index.module.css'
import backIcon from '../../assets/icons/previous.png'
import { SubmitSuccess } from './components/submitSuccess'
import { ContactForm } from './components/contactForm'

export default function Contact() {
	const [submitSuccess, setSubmitSuccess] = useState(false)
	const navigate = useNavigate()
	const location = useLocation()
	
	useEffect(() => {
		if (location.state?.submitSuccess) {
			setSubmitSuccess(location.state.submitSuccess)
		}
	}, [location])

	const handleClick = () => {
		if (submitSuccess) {
			navigate('/')
		} else {
			navigate(-1)
		}
	}

	return (
		<div className={style.contactWrapper}>
			<input
				className={style.navBackBtn}
				type='button'
				value='Back'
				onClick={() => handleClick()} />
			<div className={style.contactHeader}>
				<div className={style.emailContactContainer}>
					<p>Hello, world. Im Daniel Bucket</p>
				</div>
			</div>
			<div className={style.childRoutes}>
				<Routes>
					<Route path='submit' element={ <SubmitSuccess /> }/>
					<Route path='contact_form' element={ <ContactForm /> }/>
				</Routes>
			</div>
		</div>
	)
}