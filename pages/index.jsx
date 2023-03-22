import styled from 'styled-components'

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.black};
  padding: 10px;
`

export default function HomePage () {
  return (
    <StyledDiv>
      HomePage
    </StyledDiv>
  )
}