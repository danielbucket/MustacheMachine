import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import style from './root.style.css'
import HomePage from './pages/HomePage'
import Personal from './pages/Personal'
import Contact from './pages/Contact'
import PoopMachine from './pages/PoopMachine'
import ErrorPage from './pages/error-page'

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
	},
])

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)