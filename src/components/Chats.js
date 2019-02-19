import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'

const StyledChat = styled.span`
  margin: 1rem 0;
  color: #fff;
  padding: 1rem;
  background: linear-gradient(90deg, #1986d8, #7b9cc2);
  max-width: 90%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  &.is-usr-msg {
    margin-left: auto;
    background: #2b2c33;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  @media (min-width: 576px) {
    max-width: 60%;
  }
`

const StyledChats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 1 0;
  width: 85%;
  margin: 0 auto;
  overflow-y: scroll;
`

const Chat = ({ message }) => {
  const { text, is_user_msg } = message
  return (
    <StyledChat className={is_user_msg ? '' : 'is-usr-msg'}>{text}</StyledChat>
  )
}

const Chats = ({ messages }) => {
  const chatsRef = useRef()
  const scrollToBottom = () => {
    chatsRef.current.scrollTop = chatsRef.current.scrollHeight
  }
  
  useEffect(scrollToBottom)

  const messagesArray = Object.keys(messages).map(number => messages[number])
  const chatComponents = messagesArray.map(msg => (
    <Chat message={msg} key={msg.number} />
  ))

  return <StyledChats ref={chatsRef}>{chatComponents}</StyledChats>
}

export default Chats
