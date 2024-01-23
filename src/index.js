import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import Personal from './pages/Personal'
import PoopMachine from './pages/PoopMachine'
import SpinCollect from './pages/SpinCollect'
import ErrorPage from './pages/error-page.js'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
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
	{
		path: '/spin_collect',
		element: <SpinCollect />,
	},
])

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)