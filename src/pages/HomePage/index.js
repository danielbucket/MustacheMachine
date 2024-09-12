import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { NavBarWrapper } from '../components/navBarWrapper/wrapper.styled.js'
import gitHubIcon from '../../assets/logoIcons/github/github-mark.png'
import style from './index.module.css'

const { NavBtn } = require('../components/Wrapper')

export default function HomePage(props) {
	const navBtn = NavBtn('Bucket Limited, LLC', null)
	const { image } = useLoaderData()
	
	return (
		<div className={style.homePageWrapper}>
			<NavBarWrapper>{navBtn}</NavBarWrapper>
			<div className={style.imageContainer}>
				<img src={image} alt="image of truck"/>
			</div>
			<nav className={style.navOptions}>
				<ul>
					<li>
						<Link to={'personal'}>{`<Personal />`}</Link>
					</li>
					<li>
						<Link to={'contact'}>{`<Contact />`}</Link>
					</li>
					<li>
						<Link to={'gh_projects'}>{`<GithubProjects />`}</Link>
					</li>
					<li>
						<Link to={'poop_machine'}>{`<PoopMachine />`}</Link>
					</li>
				</ul>
			</nav>
			<footer className={style.footerContainer}>
				<Link to={'https://github.com/danielbucket'}>
					<img src={gitHubIcon} alt="Github Icon"/>
				</Link>
			</footer>
		</div>
	)
}