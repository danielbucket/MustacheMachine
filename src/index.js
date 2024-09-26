import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import './root.style.css'

import HomePage from './pages/HomePage/HomePage.jsx'
import AboutPage from './pages/AboutPage/AboutPage.jsx'
import ContactPage from './pages/ContactPage/ContactPage.jsx'
import { OnSubmitElement } from './pages/ContactPage/components/OnSubmitElement.jsx'
import { ContactForm } from './pages/ContactPage/components/contactForm.jsx'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage.jsx'
import { ProjectDetails } from './pages/ProjectsPage/components/projectDetails.jsx'
import UnderConstructionPage from './pages/UnderConstPage/UnderConstPage.jsx'	
import ErrorBoundary from './pages/ErrorBoundary/ErrorBoundary.jsx'

const router = createBrowserRouter([
	{
		path:'/',
		element: <Root />,
		errorElement: <ErrorBoundary />,
		children: [
			{
				index: true,
				element: <HomePage />,
				loader:  async () => {
					return await fetch('/api/v1/home/GET_content')
					.then(res => res.json())
					.then(data => data)
					.catch(err => err)
				},
			},
			{
				path: '/about',
				element: <AboutPage />,
				loader: async () => {
					return await fetch('/api/v1/about/GET_content')
					.then(res => res.json())
					.then(data => data)
					.catch(err => err)
				}
			},
			{
				path: '/contact',
				element: <ContactPage />,
				loader: async () => {
					return await fetch('/api/v1/contact/GET_content')
					.then(res => res.json())
					.then(data => data)
					.catch(err => err)
				},
				children: [
					{
						path: '/contact/submit',
						element: <UnderConstructionPage />,
					},
					{
						path: '/contact/contact_form',
						element: <UnderConstructionPage	 />,
					},
				]
			},
			{
				path: '/projects',
				element: <ProjectsPage />,
				loader: async () => {
					return await fetch('/api/v1/projects/GET_repo_list')
					.then(res => res.json())
					.then(data => data)
					.catch(err => err)
				},
				children: [
					{
						path: '/projects/:repo',
						element: <ProjectDetails />,
						loader: async ({ params }) => {
							const { owner, repo } = params

							return await fetch(`/api/v1/projects/GET_repo_data/${owner}/${repo}`, {
								method: 'GET',
								headers: {
									'Content-Type': 'application/json',
								},
								params: {
									owner,
									repo,
								},	
							})
							.then(res => res.json())
							.then(data => {
								console.log('data at router: ', data)
								return data
							})
							.catch(error => error)
						},
					},
				],
			},
		],
	},
	{
		path: '/error',
		element: <ErrorBoundary />,
	},
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<RouterProvider router={router}>
			<Root />
		</RouterProvider>
	</React.StrictMode>
)