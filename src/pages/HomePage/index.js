import * as React from 'react'
import { Link } from 'react-router-dom'
import style from './index.module.css'
import t100Image from '../../assets/images/T100_0720.jpg'
import gitHubIcon from '../../assets/logoIcons/github/github-mark.png'

export default function HomePage() {
	
	return (
		<div className={style.homePageContainer}>
			<div className={style.headerContainer}>
				<h1>{`<BucketLimited />`}</h1>
			</div>
			<div className={style.bioContainer}>
				<img src={t100Image} />
				<p>Daniel Bucket</p>
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