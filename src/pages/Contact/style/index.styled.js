import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ContactWrapper = styled.div`
  display: grid;
  justify-content: center;
	grid-template-rows: [Image] 25rem
											[Logic] 8rem
											[Routes] 1fr;
  height: 100vh;
`

export const ContactFormLink = styled(Link)`
	display: flex;
  justify-content: center;
  align-items: center;
	margin: auto;
	width: 98%;
	border-radius: 2rem;
  background-color: #007bff;
  color: #fff;
  font-size: 4rem;
  transition: background-color 0.3s ease;
  font-family: Ubuntu_Reg;
  border: .5rem solid var(--grayd-a-grey);
  &.active {
    background-color: #003d80;
  }
  &:hover {
    background-color: #0056b3;
  }
`