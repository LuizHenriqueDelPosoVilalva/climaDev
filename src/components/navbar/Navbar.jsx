import { useRouter } from 'next/router'
import styled from 'styled-components'

import Logo from  '../logo/Logo'
import Container from '../layout/container/Container'

const StyledNavbar = styled.div`
  height: 105px;
  display: flex;
  align-items: center;
`

const StyledLogo = styled.div`
  cursor: pointer;
`

export default function Navbar() {
  const router = useRouter()

  return(
    <StyledNavbar>
      <Container>
        <StyledLogo>
          <Logo onClick={() => router.push('/')} />
        </StyledLogo>
      </Container>
    </StyledNavbar>
  )
}