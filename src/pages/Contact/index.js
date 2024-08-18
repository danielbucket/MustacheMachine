import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useLocation, Link } from 'react-router-dom'
import style from './style/index.module.css'
import { ContactForm } from './components/contactForm'

export default function Contact() {
	const [firstName, setFirstName] = useState('')
  const [count, setCount] = useState(5)
  const [submitSuccess, setSubmitSuccess] = useState(false)
	
	const navigate = useNavigate()
	const location = useLocation()
	const aboutMeText = `I'm a software engineer with a passion for creating and building things. I'm a full stack developer with a focus on front end technologies. I'm a big fan of React and I'm always looking for new ways to improve my skills. I'm also a big fan of the outdoors and I love to travel.`
	
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
		<div className={style.contactHeader}>
			<p>{aboutMeText}</p>
			<p>-GitHub Co-Pilot</p>
		</div>
	)

	const submitSuccessElement = (
		<div className={style.formSubmittedContainer}>
			<div className={style.formSubmittedHeader}>
				<p>Hey, {firstName}!</p>
				<p>Thanks for checking in!</p>
				<p>Your message has been received and I'll be sure to get back to you as soon as I can.</p>
			</div>
			<div className={style.homePageRedirect}>
				<p>You will be redirected to the Home page in: <span>{count}</span></p>
			</div>
		</div>
	)

	return (
		<div className={style.contactWrapper}>
			<div className={style.navBtnContainer}>
				<input
					className={style.navBtn}
					type='button'
					value={`Back to <Home />`}
					onClick={() => handleClick()} />
			</div>
			{
				submitSuccess ? submitSuccessElement : (
					<Link
						className={style.contactFormLink}
						to='/contact/contact_form' >Message Me</Link>
				)
			}

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