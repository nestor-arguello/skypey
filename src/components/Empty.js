import React from 'react'
import styled from 'styled-components'

const StyledEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  & .name {
    color: #fff;
  }
  & .status,
  & .info {
    padding: 1rem;
  }
  & .status {
    color: rgba(255, 255, 255, 0.9);
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  }
  & .img {
    border-radius: 50%;
    margin: 2rem 0;
  }
  & .btn {
    padding: 1rem;
    margin: 1rem 0;
    font-weight: bold;
    font-size: 1.2rem;
    border-radius: 30px;
    outline: 0;
    &:hover {
      background: rgba(255, 255, 255, 0.7);
      cursor: pointer;
    }
  }
`

const Empty = ({ user }) => {
  const { name, profile_pic, status } = user
  const first_name = name.split(' ')[0]
  return (
    <StyledEmpty>
      <h1 className="name">Welcome, {first_name} </h1>
      <img src={profile_pic} alt={name} className="img" />
      <p className="status">
        <b>Status:</b> {status}
      </p>
      <button className="btn">Start a conversation</button>
      <p className="info">
        Search for someone to start chatting with or go to Contacts to see who
        is available
      </p>
    </StyledEmpty>
  )
}
export default Empty
