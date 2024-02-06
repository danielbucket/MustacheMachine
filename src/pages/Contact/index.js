import React, { useState } from 'react'
import { useNavigate, Routes, Route, Link } from 'react-router-dom'
import style from './style/index.module.css'
import { ContactForm } from './contactForm'

export default function Contact() {
	const navigate = useNavigate()

	return (
		<div className={style.contactWrapper}>
			<div className={style.contactHeader}>
				<div className={style.emailContactContainer}>
					<p>Hello, world. I'm Daniel Bucket</p>
					<Link
						className={style.link}
						to={'/contact/contact_form'} >
						Shoot me an email
					</Link>
				</div>
				<div className={style.resumeRequestContainer}>
					<p>If you would like a copy of my resume, go fuck yourself.</p>
				</div>
			</div>

			<Routes>
				<Route path="/contact_form" element={ <ContactForm /> }/>
			</Routes>

		</div>
	)
}










