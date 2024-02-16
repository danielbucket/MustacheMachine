import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import style from './style/index.module.css'
import { SubmitSuccess } from './components/submitSuccess'
import { ContactForm } from './components/contactForm'
const aboutMeText = `I'm a software engineer with a passion for creating and building things. I'm a full stack developer with a focus on front end technologies. I'm a big fan of React and I'm always looking for new ways to improve my skills. I'm also a big fan of the outdoors and I love to travel.`

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
				className={style.navBtn}
				type='button'
				value={submitSuccess ? 'Home' : 'Back'}
				onClick={() => handleClick()} />
			<div className={style.contactHeader}>
				<p>{aboutMeText}<br/><span>-GitHub Co-Pilot</span></p>
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