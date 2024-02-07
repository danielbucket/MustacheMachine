import { Routes, Route } from 'react-router-dom'
import Contact from './'
import { ContactForm } from './contactForm.js'

export default function ContactRoutes() {
	return (
		<>
			<Contact />
			<Routes>
				<Route index >
					<Route path='/contact_form' element={<ContactForm />} />
				</Route>
			</Routes>
		</>
	)
}