import styled from 'styled-components'

const StyledFooter = styled.div`
  background-color: ${(props) => props.theme.white};
  text-align: center;
  padding: 30px 0;
  font-weight: 400;
  font-size: 20px;
` 

export default function Footer() {
  return(
    <StyledFooter>
        Criado por <b>Luiz Henrique Del Poso Vilalva</b> durante o <b>DevChallange 01- SejaDev</b>
    </StyledFooter>
  )
}