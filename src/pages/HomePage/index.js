import React from 'react'
import { Link } from 'react-router-dom'
import style from './index.module.css'
import t100Image from '../../assets/images/T100_0724.jpg'
import gitHubIcon from '../../assets/logoIcons/github/github-mark.png'

const { NavBtn } = require('../components/NavBtn')

export default function HomePage() {
	const navBtn = NavBtn('Bucket Limited, LLC', null)
	
	return (
		<div className={style.homePageWrapper}>
			<div className={style.navWrapper}>{navBtn}</div>
			<div className={style.imageContainer}>
				<img src={t100Image} alt="image of truck"/>
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