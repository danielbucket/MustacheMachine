import styled from 'styled-components'

export const AppWrapper = styled.div`
	display: grid;
	justify-content: center;
	grid-template-rows:
		[NavBar] 6rem
		[MainContent] 1fr;
	height: 100vh;
  width: 100vw;
  background-color: --var(--ac-green);
`

export const MainContent = styled.div`
	grid-area: MainContent;
	padding-top: 1.75rem;
	height: 100%;
	font-family: Roboto;

	 & .header-container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    & img {
    	width: 98%;
      border-radius: 2rem;
      margin: auto;
      box-shadow: 0rem 0rem 1rem 0rem;
    }
  }

  & .body-container {
    flex-grow: 1;
    width: 98%;
    font-size: 2rem;
    margin: 2rem auto 0 auto;

     & .text-content-container {
      font-size: 2rem;
      text-align: center;
    }
  }
`

export const StyledFooter = styled.footer`
	display: flex;
  width: 100%;
	margin: auto;

  & .footer-link {
    text-decoration: none;
    display: flex;
    flex-direction: row;
    gap: 3rem;
    align-items: center;
    margin: auto;
  }

  & .footer-link:hover {
    color: #f0f0f0;
  }

  & img {
    height: 5rem;
    width: 5rem;
  }

  & p {
    font-size: 1.25rem;
    font-family: Ubuntu_Reg;
  }	
`