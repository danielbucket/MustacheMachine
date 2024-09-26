import React from 'react'
import { useLoaderData, useNavigate, useLocation } from 'react-router-dom'
import { StyledUnderConstPage } from './index.styled'

function UnderConstPage() {
  const location = useLocation()
  const navigate = useNavigate()

  console.log('location: ', location)

  const handleClick = () => {
    navigate('/contact', { replace: true })
  }
  
  return (
    <StyledUnderConstPage>
      <p>This page is under construction</p>
      <button onClick={() => handleClick()}>Return to Contact</button>
    </StyledUnderConstPage>
  )
}

export default UnderConstPage