import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation} from 'react-router-dom'
import ErrorPage from '../ErrorPage/ErrorPage.jsx'
import { ContactForm } from './components/contactForm.jsx'
import OnSubmitElement from './components/OnSubmitElement.jsx'
import importedImage from '../../assets/images/danielBucket.jpg'
import {
		FormStatusElement, StyledLink,
		StyledContactPage,
		ChildrenContainer,
	} from './index.styled.js'

function Contact() {
	const [firstName, setFirstName] = useState('')
	const [content, setContent] = useState({bio:''})
	const [image, setImage] = useState()
	const [formIsActive, setFormIsActive] = useState(false)
	const [error, setError] = useState({})

	useEffect(()=> {
		async function fetchData() {
			await fetch('/api/v1/contact')
				.then(res => res.json())
				.then(data => {
					setContent(() => data)
				})
				.catch(err => setError(err))
		}
		
		setImage(importedImage)
		fetchData()
	},[])

	const InactiveFormElement = (
			<FormStatusElement>
				<div>
					<p>Go ahead, fill out that form...</p>
					<p>...I dare you.</p>
				</div>
				<StyledLink to='/contact/contact_form'
					onClick={ () => setFormIsActive(()=>true) }>Message Me</StyledLink>
			</FormStatusElement>
	)

	const ActiveFormElement = (
		<div className='text-content-container'>
			<p>{content.bio}</p>
			
		</div>
	)

	return (
		<StyledContactPage>
			<div className='header-container'>
				<img src={image} alt="personal photo" />
			</div>
			<div className='body-container'>
			{ActiveFormElement}
				<Routes>
					{/* <Route path='/contact' element={ <InactiveFormElement /> } /> */}
					<Route path='/contact/submit' element={ <OnSubmitElement /> }/>
					<Route path='/contact/contact_form' element={ <ContactForm /> }/>
					<Route path='/contact/*' element={ <ErrorPage error={ error } /> }/>
				</Routes>
			</div>
		</StyledContactPage>
	)
}

export default Contact