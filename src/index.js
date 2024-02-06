import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import style from './root.style.css'
import HomePage from './pages/HomePage'
import Personal from './pages/Personal'
import Contact from './pages/Contact'
import PoopMachine from './pages/PoopMachine'
import ErrorPage from './pages/ErrorPage'
import SpinnerOfDoom from './pages/SpinnerOfDoom'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/contact/*',
		element: <Contact />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/personal',
		element: <Personal />,
	},
	{
		path: '/poop_machine',
		element: <PoopMachine />,
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