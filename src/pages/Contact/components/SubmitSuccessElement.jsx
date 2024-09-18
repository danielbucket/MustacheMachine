import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

export function SubmitSuccessElement() {
	const [count, setCount] = useState(5)
  const [firstName, setFirstName] = useState('')
  const location = useLocation()

  useEffect(() => {
		if (location.state?.submitSuccess) {
			setFirstName(location.state.firstName)
		}
		if (location.state.submitSuccess) {
			const timer = setInterval(() => {
				setCount(count => count - 1)
			}, 1000)
			setTimeout(() => {
				clearInterval(timer)
				navigate('/')
			}, 5900)
		}
	}, [location])

  return (
    <>
      <SubmitSuccess>
        <p>Hello, {firstName}!</p>
        <p>Thanks for checking in.</p>
        <p>Your message has been received and I'll be sure to get back to you as soon as I can.</p>
      </SubmitSuccess>
      <PageRedirect>
        <p>You will be redirected to the Home page in: <span>{count}</span></p>
      </PageRedirect>
    </>
  )
}