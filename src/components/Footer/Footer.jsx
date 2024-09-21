import React from "react"
import { Link } from 'react-router-dom'
import { StyledFooter } from './index.styled'
import gitHubIcon from '../../assets/logoIcons/github/github-mark.png'

export function Footer() {
  return (
    <StyledFooter>
      <Link className='footer-link' to={'https://github.com/danielbucket'}>
        <img src={gitHubIcon} alt="Github Icon"/>
        <p>@danielBucket</p>
      </Link>
    </StyledFooter>
  )
}