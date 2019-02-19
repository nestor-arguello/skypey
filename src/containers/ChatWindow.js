import React from 'react'
import store from '../store'
import Header from '../components/Header'
import Chats from '../components/Chats'
import MessageInput from '../containers/MessageInput'
import styled from 'styled-components'

const StyledChatWindow = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
`

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState()
  const activeUser = state.contacts[activeUserId]
  const activeMsgs = state.messages[activeUserId]
  const { typing } = state

  return (
    <StyledChatWindow>
      <Header user={activeUser} />
      <Chats messages={activeMsgs} />
      <MessageInput value={typing} />
    </StyledChatWindow>
  )
}

export default ChatWindow
