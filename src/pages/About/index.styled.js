import styled from 'styled-components'
import { MainContent } from '../../components/pageLayout.styled'

export const StyledAboutPage = styled(MainContent)`
    & .name-text {
      margin-bottom: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      & h1 {
        margin-bottom: -0.75rem;
      }

      & p {
        font-size: 1.5rem;
      }
    }
    
    & .bio-text {
    
      & p {
        text-indent: 1rem;
      }
    }
  }
`