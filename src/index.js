import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import Personal from './pages/Personal'
import PoopMachine from './pages/PoopMachine'
import DiscogsApp from './pages/DiscogsApp'
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
		path: '/discogs_app',
		element: <DiscogsApp />,
	},
])

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)