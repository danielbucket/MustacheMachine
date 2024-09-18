import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useLocation} from 'react-router-dom'
import ErrorPage from '../ErrorPage/ErrorPage.jsx'
import { ContactForm } from './components/contactForm.jsx'
import { SubmitSuccessElement } from './components/SubmitSuccessElement.jsx'
import importedImage from '../../assets/images/danielBucket.jpg'
import {
		AboutElement, SubmitSuccess,
		PageRedirect, StyledLink,
		StyledHeader, Image,
		StyledContactWrapper,
		Logic, ChildrenContainer,
	} from './index.styled.js'

function Contact() {
	const [firstName, setFirstName] = useState('')
	const [content, setContent] = useState({bio:'Biography', name:'Mittens'})
	const [image, setImage] = useState()
	const [formIsActive, setFormIsActive] = useState(false)
  const [count, setCount] = useState(5)
  const [submitSuccess, setSubmitSuccess] = useState(false)
	const [error, setError] = useState({})
	
	const navigate = useNavigate()
	const location = useLocation()

	
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


	// useEffect(() => {
	// 	if (location.state?.submitSuccess) {
	// 		setFirstName(location.state.firstName)
	// 		setSubmitSuccess(location.state.submitSuccess)
	// 	}
	// 	if (submitSuccess) {
	// 		const timer = setInterval(() => {
	// 			setCount(count => count - 1)
	// 		}, 1000)
	// 		setTimeout(() => {
	// 			clearInterval(timer)
	// 			navigate('/')
	// 		}, 5900)
	// 	}
	// }, [location, submitSuccess])

	const aboutElement = (
		<AboutElement>
			<p>{content.bio}</p>
			<p>-{content.name}</p>
		</AboutElement>
	)

	const noSubmitElement = (
		<StyledLink
			to='/contact/contact_form'
			onClick={() => setFormIsActive(()=>true)}>Message Me</StyledLink>
	)
	return (
		<StyledContactWrapper>
			<StyledHeader>
				<Image src={image} alt="personal photo" />
				<Logic>{ !formIsActive ? noSubmitElement : aboutElement }</Logic>
			</StyledHeader>

			<ChildrenContainer>
				<Routes>
					<Route path='/contact' element={ noSubmitElement }/>
					<Route path='/contact/submit' element={ <SubmitSuccessElement /> }/>
					<Route path='/contact_form' element={ <ContactForm submitSuccess={ submitSuccess }/> }/>
					<Route path='/contact/*' element={ <ErrorPage error={ error } /> }/>
				</Routes>
			</ChildrenContainer>
		</StyledContactWrapper>
	)
}

export default Contact