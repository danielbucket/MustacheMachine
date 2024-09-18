import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const AboutElement = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
  font-family: Ubuntu_Reg;
  & p:first-child {
  	font-size: 2.05rem;
    text-indent: 1rem;
    width: 95%;
    text-align: start;
  }
  & p:last-child {
  	font-size: 1.75rem;
    text-align: right;
    text-indent: 2rem;
  }
`

export const SubmitSuccess = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  & p {
    margin: 1rem;
  }
  & p:first-child {
    font-size: 3rem;
  }
  & p:last-child {
    font-size: 2rem;
  }
`

export const PageRedirect = styled.div`
  margin-top: 3rem;
  font-size: 3rem;
  font-family: Ubuntu_Reg;
  & span {
    font-family: KodeMono_Var;
    font-weight: 700;
  }
`

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
	margin: auto;
	width: 80vw;
	border-radius: 1.75rem;
  background-color: #007bff;
  color: #fff;
  font-size: 3.75rem;
  transition: background-color 0.3s ease;
  font-family: Ubuntu_Reg;
  border: .5rem solid var(--grayd-a-grey);
`

export const StyledContactWrapper = styled.div`
  grid-area: MainContent
  display: grid;
  grid-template-rows:
    [Header] 20rem
    [Children] 1fr;
`

export const StyledHeader = styled.div`
  grid-area: Header;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  width: 98%;
	border-radius: 2rem;
	margin: 1rem auto;
`

export const Logic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ChildrenContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
`