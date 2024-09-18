import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledNavBar = styled.div`
	grid-area: NavBar;
	display: grid;
	grid-template-columns:
		[Title] 15rem
		[Links] 1fr;
	width: 98%;
	margin: auto;
`
export const SiteTitle = styled(Link)`
	grid-area: Title;
	font-size: 2.25em;
	color: #333;
`
export const UL = styled.ul`
	grid-area: Links;
	justify-content: space-around;
	list-style: none;
  display: flex;
  gap: 1rem;
	font-size: 1.25em;
  padding: 0;
  margin: 0;
`

export const StyledLink = styled(Link)`
	color: inherit;
	text-decoration: none;
	padding: 0.25rem;
	&.active, &:hover {
		color: #777;
	}
`