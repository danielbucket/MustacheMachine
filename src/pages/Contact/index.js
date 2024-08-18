import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useLocation, Link } from 'react-router-dom'
import style from './style/index.module.css'
import { ContactForm } from './components/contactForm'
import { NavBtn } from '../components/NavBtn'
import { aboutMeText } from './contactText.js'

const selfiImage = require('../../assets/images/selfi_klr250.jpg')

export default function Contact() {
	const [firstName, setFirstName] = useState('')
  const [count, setCount] = useState(5)
  const [submitSuccess, setSubmitSuccess] = useState(false)
	
	const navigate = useNavigate()
	const location = useLocation()
	
	useEffect(() => {
		if (location.state?.submitSuccess) {
			setFirstName(location.state.firstName)
			setSubmitSuccess(location.state.submitSuccess)
		}
		if (submitSuccess) {
			const timer = setInterval(() => {
				setCount(count => count - 1)
			}, 1000)
			setTimeout(() => {
				clearInterval(timer)
				navigate('/')
			}, 5900)
		}
	}, [location, submitSuccess])

	const handleClick = () => {
		if (submitSuccess) {
			navigate('/')
		} else {
			navigate(-1)
		}
	}

	const aboutMeElement = (
		<div className={style.textContainer}>
			<p>{aboutMeText}</p>
			<p>-GitHub Co-Pilot</p>
		</div>
	)

	const navBtn = NavBtn('Home', handleClick)

	const submitSuccessElement = (
		<>
			<div className={style.formSubmittedHeader}>
				<p>Hello, {firstName}!</p>
				<p>Thanks for checking in.</p>
				<p>Your message has been received and I'll be sure to get back to you as soon as I can.</p>
			</div>
			<div className={style.homePageRedirect}>
				<p>You will be redirected to the Home page in: <span>{count}</span></p>
			</div>
		</>
	)

	const noSubmitElement = (
		<Link className={style.contactFormLink}
					to='/contact/contact_form' >Message Me</Link>
	)

	return (
		<div className={style.contactWrapper}>
			<div className={style.navWrapper}>{navBtn}</div>
			<div className={style.imageContainer}>
				<img src={selfiImage} alt="personal photo" />
			</div>
			<div className={style.logic}>
				{ !submitSuccess ? noSubmitElement : submitSuccessElement } 
			</div>

			<div className={style.childRoutes}>
				<Routes>
					<Route index element={ aboutMeElement }/>
					<Route path='contact_form' element={ <ContactForm /> }/>
					<Route path='contact/submit' element={ submitSuccessElement }/>
				</Routes>
			</div>
		</div>
	)
}