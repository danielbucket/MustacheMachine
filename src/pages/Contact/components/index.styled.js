import styled from 'styled-components';
import { MainContentLayout } from '../../../components/pageLayout.styled'

export const StyledForm = styled(MainContentLayout)`
  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1rem;

    & .input-container {
      	display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: 1rem auto;

        & input {
          height: 3.5rem;
          margin: auto;
          border-radius: 1rem;
          font-size: 2.25rem;
          text-align: center;
          border: 0.15rem solid #007bff;
        }

        & textarea {
          resize: none;
          border: none;
          outline: none;
          scrollbar-width: none;
          height: 10rem;
          width: 95%;
          margin: auto;
          font-size: 1.75rem;
          border-radius: 1.75rem;
          padding: 0.75rem;
          border: .25rem solid #007bff
        }
    }
  }
`

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
  margin: 1rem auto;

  & input {
  	height: 3.5rem;
    margin: auto;
    border-radius: 1rem;
    font-size: 2.25rem;
    text-align: center;
    border: 0.15rem solid #007bff;
  }

  & textarea {
    resize: none;
    border: none;
    outline: none;
    scrollbar-width: none;
    height: 10rem;
    width: 95%;
    margin: auto;
    font-size: 1.75rem;
    border-radius: 1.75rem;
    padding: 0.75rem;
    border: .25rem solid #007bff
  }
`

export const ErrorElement = styled.div`
	height: 2rem;
	font-family: Ubuntu_Reg;
	font-size: 1.5rem;
	margin: 0.5rem auto;
` 
