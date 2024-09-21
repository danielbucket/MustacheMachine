import styled from 'styled-components'

export const StyledFooter = styled.footer`
  grid-area: Footer;
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
    height: 100%;
    height: 5rem;
  }

  & p {
    font-size: 1.25rem;
    font-family: Ubuntu_Reg;
  }	
`