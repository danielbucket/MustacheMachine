import React, { useEffect, useState } from 'react'
import { useLoaderData, Outlet } from 'react-router-dom'
import { NavBar } from '../../components/NavBar/NavBar.jsx'
import { Footer } from '../../components/Footer/Footer.jsx'
import { StyledHomePage } from './index.styled.js'
import { AppWrapper } from '../../components/pageLayout.styled.js'
import importedImage from '../../assets/images/selfi_klr250.jpg'

function HomePage() {
	const [content, setContent] = useState({})
	const [image, setImage] = useState('')
	const data = useLoaderData()

	useEffect(() => {
		setContent(() => data)
		setImage(() => importedImage	)
	},[])

	return (
		<AppWrapper>
			<NavBar />
			<StyledHomePage>
				<div className={'header-container'}>
					<img src={image} alt="image of truck"/>
				</div>
				<div className="body-container">
					<div className={'text-content-container'}>
						<p>{content.text}</p>
					</div>
				</div>
				<Outlet />
			</StyledHomePage>
			<Footer />
		</AppWrapper>
	)
}

export default HomePage