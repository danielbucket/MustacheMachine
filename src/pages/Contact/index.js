import React, { useState } from 'react'
import { Route, Routes, Link, Outlet } from 'react-router-dom'
import style from './style/index.module.css'
import { ContactForm } from './contactForm'

export default function Contact() {


	return (
		<div className={style.contactWrapper}>
			<div className={style.contactHeader}>
				<div className={style.emailContactContainer}>
					<p>Hello, world. Im Daniel Bucket</p>
					<Link className={style.link} to={'/contact/contact_form'}>
						Shoot me an email
					</Link>
				</div>
				<div className={style.resumeRequestContainer}>
					<p>If you would like a copy of my resume, go fuck yourself.</p>
				</div>
			</div>
			<Outlet />
		</div>
	)
}