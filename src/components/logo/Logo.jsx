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

const HorizontalText = styled.h1`
  font-size: 40px;
`

const PrimaryColor = styled.span`
  color: ${(props) => props.theme.primary};
  text-transform: uppercase;
`

export default function Logo({ showImage, type }) {
  return(
    <div>
      {showImage && <Img src="/woman.svg"/> } 
      {type === 'vertical' && 
        <VerticalText>
          Clima<br /><PrimaryColor>Dev</PrimaryColor>
        </VerticalText> 
      }
      {type === 'horizontal' &&
        <HorizontalText>
          Clima <PrimaryColor>Dev</PrimaryColor>
        </HorizontalText>
      }
    </div>
  )
}

Logo.defaultProps = {
  type: 'horizontal'
}