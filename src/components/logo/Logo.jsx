import styled from 'styled-components'

const Img = styled.img`
  @media (max-width: 768px){
    width: 8rem;
  }
`

const VerticalText = styled.h1`
  font-size: 80px;
  color: ${(props) => props.theme.black};
  line-height: 70px;
  margin-left: 150px;
  margin-top: -80px;
`

const PrimaryColor = styled.span`
  color: ${(props) => props.theme.primary};
`

export default function Logo({ showImage, type }) {
  return(
    <div>
      {showImage && <Img src="/woman.svg"/> } 
      {type === 'vertical' && 
        <VerticalText>
          Clima <br /><PrimaryColor>Dev</PrimaryColor>
        </VerticalText> 
      }
    </div>
  )
}