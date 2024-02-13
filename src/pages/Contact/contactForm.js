import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

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
			navigate('/contact', {
				state: firstName
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
			setFirstName(() => name)
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" {...register("firstName", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Last name" {...register("lastName", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Mobile number" {...register("mobile number", {required: true, minLength: 6, maxLength: 12})} />
      <textarea {...register("Message", {required: true, max: 250, min: 5})} />

      <input type="submit" />
    </form>
  )
}