import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import style from '../style/submitSuccess.module.css';

export function SubmitSuccess() {
  const [firstName, setFirstName] = useState('')
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const location = useLocation()
  
  useEffect(() => {
    setFirstName(location.state?.firstName)
    setSubmitSuccess(location.state?.submitSuccess)
  }, [location])
  
  if (!submitSuccess) {
    return (
      <>
        <Link className={style.contactFormLink} to='/contact/contact_form' >Send An Email My Way</Link>
        <Outlet />
      </>
    )
  }

  if (submitSuccess) {
    return (
      <div className={style.formSubmittedContainer}>
        <div className={style.formSubmittedHeader}>
          <p>Thanks for checking in, {firstName}!</p>
          <p>I'll get back to you as soon as I can.</p>
        </div>
        <Link to='/' className={style.homeLink}>
          {`<Link to={'/home} />`}
        </Link>
      </div>
    )
  }
}
