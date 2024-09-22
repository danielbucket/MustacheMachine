import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { StyledForm, ErrorElement } from './index.styled.js'

function ContactForm() {
	const { register, handleSubmit, formState: { errors } } = useForm()
	const [submitSuccess, setSubmitSuccess] = useState(false)
	const [firstName, setFirstName] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState()

	const navigate = useNavigate()

  useEffect(() => {
		if (submitSuccess && firstName !== '') {
			navigate('/contact/submit', {
				state: { submitSuccess, firstName }
			})
		} else {
			// validate potential errors before this check gate has a chance to fail
			setError('Something done gone wrong!')
		}
  },[submitSuccess])

  const onSubmit = (data={}) => {
		fetch('/api/v1/contact_form/submit', {
			method: "POST",
	    headers: {
	      "Content-Type": "application/json",
	    },
			body: JSON.stringify(data),
		})
		.then(res => {
			if (!res.ok) {
				throw new Error('Network response was not ok')
			}
			return res.json()
		} )
		.then(({ firstName } ) => {
			setFirstName(() => firstName)
			setIsLoading(() => false)
			setSubmitSuccess(() => true)
		})
		.catch(error => {
			setSubmitSuccess(() => false)
		  setError(() => error)
			throw new Error(error)
		})
  }

  if (isLoading) {
  	return (
  		<div>Loading...</div>
  	)
  }

  if (error) {
  	return (
  		<ErrorElement>Something went wrong: <span>{error}</span></ErrorElement>
  	)
  }
  
  return (
		<StyledForm>
			<form onSubmit={ handleSubmit(onSubmit) }>
				<div className='input-container'>
					<input type="text" value='Bork' placeholder="First Name (required)" {...register("firstName", {required: true, maxLength: 15})} />
					<input type="text" value='Dork' placeholder="Last Name (required)" 	{...register("lastName", {required: true, maxLength: 100})} />
					<input type="text" placeholder="Email (required)" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
					<input type="tel" placeholder="Phone (optional)" {...register("mobileNumber", {required: false, minLength: 6, maxLength: 12})} />
					<textarea value='Whan can I do for you?' placeholder="Message (required)" {...register("message", {required: true, max: 250, min: 5})} />
					<input type="submit" />
				</div>
			</form>
		</StyledForm>
  )
}

export default ContactForm