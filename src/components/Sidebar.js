import React from 'react'
import styled from 'styled-components'
import User from '../containers/User'

const StyledSidebar = styled.aside`
  width: 80px;
  background-color: rgba(32, 32, 35, 1);
  height: 100%;
  border-right: 1px solid rgba(189, 189, 192, 0.1);
  transition: width 0.3s;
  overflow-y: scroll;

  @media (min-width: 576px) {
    width: 320px;
  }
`

const Sidebar = ({ contacts, ...props }) => {
  const userComponents = contacts.map(contact => {
    return <User key={contact.user_id} user={contact} />
  })
  return (
    <StyledSidebar>
      {userComponents}
    </StyledSidebar>
  )
}

export default Sidebar
