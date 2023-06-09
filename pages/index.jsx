import styled from 'styled-components'

import BackgroundImageWithChildren from 
  '../src/components/layout/backgroundImageWithChildren/BackgroundImageWithChildren'
import Logo from '../src/components/logo/Logo'
import SearchCity from '../src/components/searchCity/SearchCity'
import Footer from '../src/components/footer/Footer'

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.white};
  min-width: 500px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;

  @media (max-width: 500px){
    min-width: 100%
  }
`

const StyledInput = styled(SearchCity)`
  width: 100%;
  box-sizing: border-box;
`

const InputContainer = styled.div`
  z-index: 100;

  @media (min-width: 750px) {
    width: 150%;
  }
`

export default function HomePage() {
  return (
    <><BackgroundImageWithChildren>
      <StyledDiv>
        <Logo showImage type={'vertical'} />
        <InputContainer>
          <StyledInput />
        </InputContainer>
      </StyledDiv>
    </BackgroundImageWithChildren><Footer /></>
  )
}