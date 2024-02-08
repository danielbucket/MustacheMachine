import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitSuccess, setSubmitSuccess] = useState()

  const onSubmit = data => {
  	console.log('onSubmit')

  	fetch('api/v1/contact_form_submit', {
  		"method": "POST",
  		"body": JSON.stringify(data),
  	})
  	.then(res => res.json())
  	.then(res => {
  		setFirstName(() => res)
  		setSubmitSuccess(true)
  	})
  	.catch(err => {
  		setSubmitSuccess(false)
		  console.log('errors: ', errors);
  		throw new Error(err)
  	})

  	// if (submitSuccess) {
  	// 	navigate('/', { firstName })
  	// }
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input value="bob" type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
      <input value="barker" type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
      <input value="dead@deadguy.com" type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input value="6666666666" type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
      <textarea value="french" {...register("Message", {required: true, max: 250, min: 5})} />

      <input type="submit" />
    </form>
  );
}