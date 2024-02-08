import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import style from './style/index.module.css'
import { ContactForm } from './contactForm'

export default function Contact() {
	return (
		<div className={style.contactWrapper}>

			<div className={style.contactHeader}>
				<Link to='/'>Home</Link>
				<div className={style.emailContactContainer}>
					<p>Hello, world. Im Daniel Bucket</p>
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


			<div className={style.childRoutes}>
				<Routes>
					<Route path='/contact_form' element={<ContactForm />} />
				</Routes>
			</div>
		</div>
	)
}