import React, { useEffect, useState } from 'react'
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import importedImage from '../../assets/images/T100_0724.jpg'
import { StyledLink, StyledContactPage } from './index.styled.js'

function Contact() {
	const [content, setContent] = useState({ bio:'' })
	const [image, setImage] = useState()
	const [error, setError] = useState({})
	const [isActive, setIsActive] = useState(false)
	const loaderData = useLoaderData()
	const navigate = useNavigate()

	useEffect(() => {
		setIsActive(() =>		false)
		setContent(() => loaderData)
		setImage(() => importedImage)
	},[])

	const handleClick = () => {
		setIsActive(true)
		navigate('/contact/contact_form')
	}

	return (
		<StyledContactPage>
			<div className="header-container">
				<img src={ image } alt="photo of a truck" />
			</div>
			<div className='body-container'>
				<div className="text-container">
					{
						!isActive
							? <CustomLink onClick={() => handleClick()}>
									{ content.bio }
								</CustomLink>
							: <Outlet />
					}
				</div>
			</div>
			<Outlet />
		</StyledContactPage>
	)
}

function CustomLink({ to, children, ...props}) {
	return <StyledLink to={to} {...props} >{children}</StyledLink>
}

export default Contact