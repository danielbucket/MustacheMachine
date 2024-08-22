import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import style from './root.style.css'
import HomePage 				from './pages/HomePage'
import Personal 				from './pages/Personal'
import Contact 					from './pages/Contact'
import { ContactForm } 	from './pages/Contact/components/contactForm'
import SpinConnect 			from './pages/SpinConnect'
import PoopMachine 			from './pages/PoopMachine'
import ErrorPage 				from './pages/ErrorPage'
import SpinnerOfDoom 		from './pages/SpinnerOfDoom'

import { contactDataStub } from './pages/stubs/contactStub'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/contact/*',
		element: <Contact />,
		loader: async ({params}) => {
			return contactDataStub
			// return fetch('/api/contact')
		},
		children: [
			{
				path: 'contact_form',
				element: <ContactForm />,
			},
		],
		errorElement: <ErrorPage />,
	},
	{
		path: '/personal',
		element: <Personal />,
	},
	{
		path: '/spin_connect',
		element: <SpinConnect />,
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