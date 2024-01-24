import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './style.module.css'
const AUTHSERVER_API_URL = process.env.AUTHSERVER_API_URL || 'http://localhost:3647'

export default function Contact() {
	

	return (
		<div>
			<div className={style.emailContactContainer}>
				<p>Hello, world. I'm Daniel Bucket.</p>
				<p>If you would like to contact me via email, fill out the form below</p>
			</div>
			<div className={style.resumeRequestContainer}>
				<p>If you would like a copy of my resume, </p>
			</div>
		</div>
	)
}











