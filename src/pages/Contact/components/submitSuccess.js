import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import style from '../style/submitSuccess.module.css';

export function SubmitSuccess() {
  const [firstName, setFirstName] = useState('')
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [count, setCount] = useState(5)
  const location = useLocation()
  const navigate = useNavigate()
  
  useEffect(() => {
    setFirstName(location.state?.firstName)
    setSubmitSuccess(location.state?.submitSuccess)
    
  }, [location])

  useEffect(() => { 
    if (submitSuccess) {
      const timer = setInterval(() => {
        setCount(count => count - 1)
      }, 1000)
      setTimeout(() => {
        clearInterval(timer)
        navigate('/')
      }, 5000)
    }
  }, [submitSuccess])

  if (!submitSuccess) {
    return (
      <>
        <Link className={style.contactFormLink} to='/contact/contact_form' >Message Me</Link>
        <Outlet />
      </>
    )
  }

  if (submitSuccess) {
    return (
      <div className={style.formSubmittedContainer}>
        <div className={style.formSubmittedHeader}>
          <p>Hey, {firstName}!</p>
          <p>Thanks for checking in!</p>
          <p>Your message has been received and I'll be sure to get back to you as soon as I can.</p>
        </div>
        <div className={style.landingPageRedirect}>
          <p>You will be redirected to the landing page in: <span>{count}</span></p>
        </div>
      </div>
    )
  }
}
