import style from './index.style.module.css'
import * as React from 'react'
import { Outlet, Link } from 'react-router-dom'
import selfiImage from '../../assets/images/selfi2.jpg'
import gitHubIcon from '../../assets/logoIcons/github/github-mark.png'

export default function Home() {
	const aboutMe = "Hey, I'm Daniel. On a whim I once went sailing somewhere south of the coastline. Cool story, bruh. Check out some of the projects I built while sailing. I've never been sailing before."
	const poopMachineLinkText = '<Poop Machine />'
	const personalLinkText = '<Personal />'
	const spinCollectLinkText = '<SpinCollect />'
	const contactLinkText = '<Contact />'

	return (
		<div className={style.homePageContainer}>
			<div className={style.headerContainer}>
				<h1>Bucket Limited</h1>
			</div>
			<div className={style.bioContainer}>
				<img src={selfiImage} />
				<p>{aboutMe}</p>
			</div>

			<nav className={style.navOptions}>
				<ul>
					<li>
						<Link to={'personal'}>{personalLinkText}</Link>
					</li>
					<li>
						<Link to={'contact'}>{contactLinkText}</Link>
					</li>
					<li>
						<Link to={'spin_collect'}>{spinCollectLinkText}</Link>
					</li>
					<li>
						<Link to={'poop_machine'}>{poopMachineLinkText}</Link>
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