import React, { useEffect, useState } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import importedImage from '../../assets/images/T100_0724.jpg'
import { StyledLink, StyledContactPage } from './index.styled.js'

function CustomLink({ to, children, ...props}) {
	return <StyledLink to={to} {...props} >{children}</StyledLink>
}

function Contact() {
	const [content, setContent] = useState({bio:''})
	const [image, setImage] = useState()
	const [error, setError] = useState({})
	const loaderData = useLoaderData()

	useEffect(() => {
		setContent(() => loaderData)
		setImage(() => importedImage)
	},[])

	function ContactLandingPage() {
		return (
			<div className={'text-content-container'}>
				<div className='header-container'>
					<img src={image} alt="photo of a truck" />
				</div>
				<div className='body-container'>
					<div className='text-content-container'>
						<CustomLink to='/contact/contact_form'>
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
			<Outlet />
		</StyledContactPage>
	)
}

export default Contact