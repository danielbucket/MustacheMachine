import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation, Outlet} from 'react-router-dom'
import ErrorPage from '../ErrorPage/ErrorPage.jsx'
import ContactForm from './components/contactForm.jsx'
import OnSubmitElement from './components/OnSubmitElement.jsx'
import importedImage from '../../assets/images/T100_0724.jpg'
import { StyledLink, StyledContactPage } from './index.styled.js'

function CustomLink({ to, children, ...props}) {
	return (
		<StyledLink to={to} {...props} >{children}</StyledLink>
	)
}

function Contact() {
	const [firstName, setFirstName] = useState('')
	const [content, setContent] = useState({bio:''})
	const [image, setImage] = useState()
	const [formIsActive, setFormIsActive] = useState(false)
	const [error, setError] = useState({})

	useEffect(()=> {
		async function fetchData() {
			await fetch('/api/v1/contact/GET_data')
				.then(res => res.json())
				.then(data => {
					setContent(() => data)
				})
				.catch(err => setError(err))
		}
		
		fetchData()
		setImage(importedImage)
	},[])

	function ContactLandingPage() {
		return (
			<div className={'text-content-container'}>
				<div className='header-container'>
					<img src={image} alt="photo of a truck" />
				</div>
				<div className='body-container'>
					<div className='text-content-container'>
						<CustomLink to='/contact/contact_form'
							onClick={ ()=>setFormIsActive(true) }>
								{content.bio}
						</CustomLink>
					</div>
				</div>
			</div>
		)
	}

	return (
		<StyledContactPage>
			<ContactLandingPage />
			<Routes>
				<Route path='/contact/submit' element={ <OnSubmitElement /> }/>
				<Route path='/contact/contact_form' element={ <ContactForm /> }/>
				{/* <Route path='/contact/*' element={ <ErrorPage error={ error } /> }/> */}
			</Routes>
		</StyledContactPage>
	)
}

export default Contact