import * as React from 'react'
import { Outlet, Link } from 'react-router-dom'
import style from './index.style.css'

export default function Home() {
	const homeText = 'This is the home page'

	return (
		<div className='home-page-container'>
			<h1>{homeText}</h1>
			<nav>
				<ul>
					<li>
						<Link to={'personal'}>Personal</Link>
					</li>
					<li>
						<Link to={'poop_machine'}>Poop Machine</Link>
					</li>
					<li>
						<Link to={'spin_collect'}>SpinCollect</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}