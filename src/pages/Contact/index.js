import React, { useState, useEffect } from 'react'
import { Routes, useLocation, useNavigate, Route } from 'react-router-dom'
import style from './style/index.module.css'
import backIcon from '../../assets/icons/previous.png'
import { SubmitSuccess } from './components/submitSuccess'
import { ContactForm } from './components/contactForm'

export default function Contact() {
	const [firstName, setFirstName] = useState('')
	const [submitSuccess, setSubmitSuccess] = useState(false)
	const location = useLocation()
	const navigate = useNavigate()

	useEffect(() => {
		setFirstName(location.state?.firstName)
		setSubmitSuccess(location.state?.submitSuccess)
	},[location])

	return (
		<div className={style.contactWrapper}>
			<input
				className={style.navBackBtn}
				type='button'
				value='Back'
				onClick={() => navigate(-1)} />
				
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