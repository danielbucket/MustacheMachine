import styled from 'styled-components'

export const StyledUnderConstPage = styled('div')`
  display: flex;    
  flex-direction: column;   
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;

  && p, button {
  font-size: 2rem;
    color: #333;
    width: 100%;
    color: #fff;
  }

  && button {
    border: none;
    border-radius: 30%;
    cursor: pointer;
  }
`