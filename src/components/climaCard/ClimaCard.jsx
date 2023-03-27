import styled from 'styled-components'

const StyledClimaCard = styled.div`
  background: ${(props) => props.theme.white};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 350px;
  padding: 15px;
  box-sizing: border-box;
`

const Title = styled.h6`
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  margin: 0;
  padding: 0;
`

const BasicInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const BasicInfoImg = styled.img`
  height: 100px;
  width: 100px;
`

const BasicInfoText = styled.div`
  text-align: center;
  flex: 1;
`

const InfoLine = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  padding: 0 15px;
`

const InfoTemperatute = styled.span`
  font-weight: 700;

  ${(props) => props.blue && 'color: #00C9F5;'};
  ${(props) => props.red && 'color: #FF0000 ;'}
`

export default function ClimaCard({ title, icon, description, temp, feels, min, max }) {
  return(
    <StyledClimaCard>
      <Title>{title}</Title>
      <BasicInfo>
        <BasicInfoImg src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
        <BasicInfoText>{description}</BasicInfoText>
      </BasicInfo>
      <InfoLine>
        Temperatura<InfoTemperatute>{temp}°C</InfoTemperatute>
      </InfoLine>
      <InfoLine>
        Sensação<InfoTemperatute>{feels}°C</InfoTemperatute>
      </InfoLine>
      <InfoLine>
        Mínima<InfoTemperatute blue>{min}°C</InfoTemperatute>
      </InfoLine>
      <InfoLine>
        Máxima<InfoTemperatute red>{max}°C</InfoTemperatute>
      </InfoLine>
    </StyledClimaCard>
  )
}