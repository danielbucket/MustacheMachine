import React from 'react'
import { StyledNavBar, SiteTitle, UL, StyledLink } from './index.styled'

function NavBar() {
  return (
    <StyledNavBar>
      <SiteTitle to='/'>Bucket, LLC</SiteTitle>
      <UL>
        <CustomLink to='/about'>About</CustomLink>
        <CustomLink to='/contact'>Contact</CustomLink>
        <CustomLink to='/projects'>Projects</CustomLink>
      </UL>
    </StyledNavBar>
  )
}

function CustomLink({ to, children, ...props}) {
  return (
    <StyledLink to={to} {...props}>
      {children}
    </StyledLink>
  )
}

export default NavBar