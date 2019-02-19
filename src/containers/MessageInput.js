import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import store from '../store'
import { setTypingValue, sendMessage } from '../actions'

const StyledMessageInput = styled.form`
  width: 80%;
  margin: 1rem auto;

  & .Message__input {
    width: 100%;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    border: 0;
    border-radius: 10px;
    font-size: 1rem;
    outline: 0;
  }
`

const MessageInput = ({ value }) => {
  const state = store.getState()

  const handleChange = event => {
    store.dispatch(setTypingValue(event.target.value))
  }

  const handleSubmit = event => {
    event.preventDefault()
    const { typing, activeUserId } = state

    store.dispatch(sendMessage(typing, activeUserId))
  }

  const messageInputRef = useRef()
  const focusMessageInput = () => {
    messageInputRef.current.focus()
  }

  useEffect(focusMessageInput)  

  return (
    <StyledMessageInput onSubmit={handleSubmit}>
      <input
        className="Message__input"
        onChange={handleChange}
        value={value}
        ref={messageInputRef}
        placeholder="write a message"
      />
    </StyledMessageInput>
  )
}

export default MessageInput
