import React from 'react'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
import store from '../store'

const StyledApp = styled.div`
  height: 100%;
  display: flex;
  color: rgba(189, 189, 192, 1);
`

const App = ({ ...props }) => {
  const { contacts, user, activeUserId } = store.getState()
  const contactsArray = Object.keys(contacts).map(id => contacts[id])

  return (
    <StyledApp>
      <Sidebar contacts={contactsArray} />
      <Main user={user} activeUserId={activeUserId} />
    </StyledApp>
  )
}

export default App
