import styled from 'styled-components'

export const AppWrapper = styled.div`
	display: grid;
	justify-content: center;
	grid-template-rows:
		[NavBar] 6rem
		[MainContent] 1fr;
	height: 100vh;
  width: 100vw;
  background-color: #555;
`

export const MainContent = styled.div`
	grid-area: MainContent;
	display: grid;
  height: 100%;
  width: 100%;
  border: 1px solid green;
`