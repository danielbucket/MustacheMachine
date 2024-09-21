import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledNavBar = styled.div`
	grid-area: NavBar;
	display: flex;
	flex-direction:row;
	justify-content: start;
	align-items: center;
	padding: 0 0.5rem;
	font-family: Ubuntu_Reg;
	font-size: 1.25rem;
`

export const StyledLink = styled(NavLink)`
	color: inherit;
	text-decoration: none;
	padding: 0.25rem;
	&.active, &:hover {
		color: #777;
	}
`

export const SiteTitle = styled(StyledLink)`
	grid-area: Title;
	width: 35%;
	font-size: 2rem;
	font-family: Laila_Med;
	&.active {
		color: black;
	}
`

export const UL = styled.ul`
	display: flex;
	justify-content: end;
	gap: 1rem;
	flex-grow: 1;
	list-style: none;
	font-size: 1.25em;
  padding: 0;
`
