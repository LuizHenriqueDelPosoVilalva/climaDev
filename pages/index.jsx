import styled from 'styled-components'

import BackgroundImageWithChildren from 
  '../src/components/layout/backgroundImageWithChildren/BackgroundImageWithChildren'

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.black};
  padding: 10px;
`

export default function HomePage() {
  return (
    <BackgroundImageWithChildren>
      <StyledDiv>
        HomePage
      </StyledDiv>
    </BackgroundImageWithChildren>
  )
}