import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import style from './root.style.css'
import HomePage from './pages/HomePage'
import Personal from './pages/Personal'
import Contact from './pages/Contact'
import { ContactForm } from './pages/Contact/components/contactForm'
import GitHubProjectModule from './pages/GitHubProjectModule'
import ProjectPage from './pages/GitHubProjectModule/components/projectPage'
import PoopMachine from './pages/PoopMachine'
import ErrorPage from './pages/ErrorPage'
import SpinnerOfDoom from './pages/SpinnerOfDoom'

import { homeDataStub } from './pages/stubs/homeStub'
import { contactDataStub } from './pages/stubs/contactStub'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <ErrorPage />,
		loader: async () => {
			// return fetch('/api/home')
			return homeDataStub
		}
	},
	{
		path: '/contact/*',
		element: <Contact />,
		loader: async () => {
			// return fetch('/api/contact')
			return contactDataStub
		},
		children: [
			{
				path: 'contact_form',
				element: <ContactForm />,
			},
		],
	},
	{
		path: '/personal',
		element: <Personal />,
		loader: async () => {
			return await fetch('/api/v1/personal/GET_data')
		},
	},
	{
		path: '/gh_projects/',
		element: <GitHubProjectModule />,
		loader: async () => {
			return await fetch('/api/v1/gh_projects/GET_repo_list')
		},
	},
	{
		path: '/gh_projects/:user/:repo',
		element: <ProjectPage />,
		loader: async ({ params }) => {
			const { user, repo } = params

			return await fetch(`/api/v1/gh_projects/GET_repo_data/${user}/${repo}`)
			.then(res => res.json())
			.then(data => {
				if (data.status === 200) {
					return data
				}
			})
		}
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
		<RouterProvider
			router={ router }
			fallbackElement={ <SpinnerOfDoom /> }
			future={{ v7_startTransition:true }} />
	</React.StrictMode>
)