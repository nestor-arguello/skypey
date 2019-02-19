import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  padding: 1rem 2rem;
  border-bottom: 1px solid rgba(189, 189, 192, 0.2);
`
const HeaderName = styled.h1`
  color: #fff;
`

const Header = ({ user }) => {
  const { name, status } = user
  return (
    <StyledHeader>
      <HeaderName>{name}</HeaderName>
      <p>{status}</p>
    </StyledHeader>
  )
}

export default Header
