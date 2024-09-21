import React, { useState, useEffect } from "react"
import { useLocation, useNavigate } from 'react-router-dom'
import { SubmitSuccess, PageRedirect } from '../index.styled.js'

export default function OnSubmitElement() {
  const [count, setCount] = useState(5)
  const [firstName, setFirstName] = useState('')

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.state?.submitSuccess) {
      setFirstName(location.state.firstName)
    }
  }, [location])


  useEffect(() => {
    if (location.state.submitSuccess) {
      const timer = setInterval(() => {
        setCount(count => count - 1)
      }, 1000)
      setTimeout(() => {
        clearInterval(timer)
        navigate('/')
      }, 5900)
    }
  }, [count])
	
  return (
    <>
      <SubmitSuccess>
        <p>Hello, {firstName}!</p>
        <p>Thanks for checking in.</p>
        <p>Your message has been received and I'll be sure to get back to you as soon as I can.</p>
      </SubmitSuccess>
      <PageRedirect>
        <p>You will be redirected to the Home page in: <span>{count} years!</span></p>
      </PageRedirect>
    </>
  )
}