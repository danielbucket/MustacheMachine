import React, { useState, useEffect } from 'react'
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import style from './style/index.module.css'
import { ContactForm } from './contactForm'
import backIcon from '../../assets/icons/previous.png'

export default function Contact() {
	const [name, setName] = useState('')
	const location = useLocation()
	const navigate = useNavigate()

	useEffect(() => {
		setName(location.state?.firstName)
	},[location])

	return (
		<div className={style.contactWrapper}>
			<input
				className={style.navBackBtn}
				type='button'
				value='Back'
				onClick={() => navigate(-1)} />
			<div className={style.contactHeader}>
				{
					!name
						? (
								<div className={style.emailContactContainer}>
									<p>Hello, world. Im Daniel Bucket</p>
									<Link
										className={style.link}
										to={'/contact/contact_form'} >
										Shoot me an email
									</Link>
								</div>
							)
						: (
								<div className={style.formSubmittedContainer}>
									<div className={style.formSubmittedHeader}>
										<p>Thanks for checking in, {name}!</p>
										<p>I'll get back to you as soon as I can.</p>
									</div>
									<Link to='/' className={style.homeLink}>
										{`<Link to={'/home} />`}
									</Link>
								</div>
							)
				}
			</div>
			<div className={style.childRoutes}>
				<Routes>
					<Route path='/contact_form' element={<ContactForm />} />
				</Routes>
			</div>
		</div>
	)
}