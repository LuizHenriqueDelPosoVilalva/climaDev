import styled from 'styled-components'

const StyledInput = styled.input`
 background-color: #F6F6F6;
 border: 0;
 outline: none;
 padding: 20px;
 color: #9c9c9c;
 font-weight: bold;
 box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
 border-radius: 10px;
 width: 100%;
`

function Input(props) {
  return(
    <StyledInput {...props} />
  )
}

export default Input