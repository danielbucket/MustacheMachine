import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import style from '../style/contactForm.module.css'

export function ContactForm() {
	const { register, handleSubmit, formState: { errors } } = useForm()
	const [submitSuccess, setSubmitSuccess] = useState(false)
	const [firstName, setFirstName] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState()

	const navigate = useNavigate()
	const baseURL = '/api/v1/contact_form/new'

  useEffect(() => {
		if (submitSuccess) {
			navigate('/contact/submit', {
				state: {
					firstName: firstName,
					submitSuccess: submitSuccess,
				}
			})
		}
  },[submitSuccess])

  const onSubmit = (data={}) => {
		fetch(baseURL, {
			method: "POST",
	    headers: {
	      "Content-Type": "application/json",
	    },
			body: JSON.stringify(data),
		})
		.then(res => res.json())
		.then(name => {
			setFirstName(() => name.firstName)
			setSubmitSuccess(() => true)
			setIsLoading(() => false)
		})
		.catch(error => {
		  console.log('errors: ', error)

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
  		<div>Something went wrong: {err}</div>
  	)
  }
  
  return (
    <form className={style.formContainer} onSubmit={handleSubmit(onSubmit)}>
			<div className={style.inputContainer}>
				<input value='Bork' type="text" placeholder="First Name" {...register("firstName", {required: true, maxLength: 80})} />
				<input value='Dork' type="text" placeholder="Last Name" {...register("lastName", {required: true, maxLength: 100})} />
				<input value='dork@bork.com' type="text" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
				<input value='1234567890' type="tel" placeholder="Phone" {...register("mobile number", {required: true, minLength: 6, maxLength: 12})} />
				<textarea value='message has been written' placeholder="Message..." {...register("Message", {required: true, max: 250, min: 5})} />
				<input type="submit" />
			</div>
    </form>
  )
}