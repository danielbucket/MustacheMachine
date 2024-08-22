import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import style from './index.module.css'
import gitHubIcon from '../../assets/logoIcons/github/github-mark.png'

const { NavBtn } = require('../components/NavBtn')

export default function HomePage() {
	const navBtn = NavBtn('Bucket Limited, LLC', null)
	const data = useLoaderData()
	const { image } = data
	
	return (
		<div className={style.homePageWrapper}>
			<div className={style.navWrapper}>{navBtn}</div>
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
						<Link to={'spin_connect'}>{`<SpinConnect />`}</Link>
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