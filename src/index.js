import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import style from './root.style.css'
import HomePage 				from './pages/HomePage'
import Personal 				from './pages/Personal'
import Contact 					from './pages/Contact'
import { ContactForm } 	from './pages/Contact/contactForm.js'
import PoopMachine 			from './pages/PoopMachine'
import ErrorPage 				from './pages/ErrorPage'
import SpinnerOfDoom 		from './pages/SpinnerOfDoom'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/contact/*',
		element: <Contact />,
	},
	{
		path: '/personal',
		element: <Personal />,
	},
	{
		path: '/poop_machine',
		element: <PoopMachine />,
	},
	{
		path: '*',
		errorElement: <ErrorPage />,
	},
])

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
	<React.StrictMode>
		<RouterProvider
			router={ router }
			fallbackElement={ <SpinnerOfDoom /> }
			future={{ v7_startTransition:true }} />
	</React.StrictMode>
)