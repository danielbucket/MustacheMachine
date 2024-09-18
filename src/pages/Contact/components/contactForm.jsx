import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {
	Form,
	InputContainer,
	ErrorElement,
} from './index.styled.js'

export function ContactForm() {
	const { register, handleSubmit, formState: { errors } } = useForm()
	const [submitSuccess, setSubmitSuccess] = useState(false)
	const [firstName, setFirstName] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState()

	const navigate = useNavigate()

  useEffect(() => {
		if (submitSuccess) {
			navigate('/contact/submit', {
				state: { firstName, submitSuccess }
			})
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
		.then(res => {
			setFirstName(() => res.name)
			setSubmitSuccess(() => true)
			setIsLoading(() => false)
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
    <Form onSubmit={handleSubmit(onSubmit)}>
			<InputContainer>
				<input value='Bork' type="text" placeholder="First Name (required)" {...register("firstName", {required: true, maxLength: 80})} />
				<input value='Dork' type="text" placeholder="Last Name (required)" {...register("lastName", {required: true, maxLength: 100})} />
				<input type="text" placeholder="Email (required)" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
				<input type="tel" placeholder="Phone (optional)" {...register("mobileNumber", {required: false, minLength: 6, maxLength: 12})} />
				<textarea value='Please allow for a misplaced hotdog here and there' placeholder="Message (required)" {...register("message", {required: true, max: 250, min: 5})} />
				<input type="submit" />
			</InputContainer>
    </Form>
  )
}