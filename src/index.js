import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './root.style.css'

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: 
// 				<HomePage />,
// 		errorElement: <ErrorPage />,
// 		loader: async () => {
// 			// return fetch('/api/home')
// 			return homeDataStub
// 		}
// 	},
// 	{
// 		path: '/contact/*',
// 		element: <Contact />,
// 		loader: async () => {
// 			// return fetch('/api/contact')
// 			return contactDataStub
// 		},
// 		children: [
// 			{
// 				path: 'contact_form',
// 				element: <ContactForm />,
// 			},
// 		],
// 	},
// 	{
// 		path: '/personal',
// 		element: <Personal />,
// 		loader: async () => {
// 			return await fetch('/api/v1/personal/GET_data')
// 		},
// 	},

// 	{
// 		path: '/gh_projects/:user/:repo',
// 		element: <ProjectPage />,
// 		loader: async ({ params }) => {
// 			const { user, repo } = params

// 			return await fetch(`/api/v1/gh_projects/GET_repo_data/${user}/${repo}`)
// 			.then(res => res.json())
// 			.then(data => {
// 				if (data.status === 200) {
// 					return data
// 				}
// 			})
// 		}
// 	},
// 	{
// 		path: '/poop_machine',
// 		element: <PoopMachine />,
// 	},
// ])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
)