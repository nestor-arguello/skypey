import React from 'react'
import styled from 'styled-components'
import store from '../store'
import { setActiveUserId } from '../actions'

const StyledUser = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  & .profile-pic {
    width: 50px;
    border-radius: 50%;
  }

  & .details {
    display: none;

    @media (min-width: 576px) {
      display: block;
      padding: 0 0 0 1rem;
    }
  }

  & .name {
    margin: 0;
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
    font-weight: 600;
  }
`
const handleUserClick = ({ user_id }) => event => {
  store.dispatch(setActiveUserId(user_id))
}

const User = ({ user, ...props }) => {
  const { name, profile_pic, status } = user
  
  return (
    <StyledUser onClick={handleUserClick(user)}>
      <img className="profile-pic" src={profile_pic} alt={name} />
      <div className="details">
        <p className="name">{name}</p>
        <p className="status">{status}</p>
      </div>
    </StyledUser>
  )
}

export default User
