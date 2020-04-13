import React from 'react'
import styled from 'styled-components'
import Empty from './Empty'
import ChatWindow from '../containers/ChatWindow'
import BackPortfolioBtn from '../components/back-portfolio-btn/back-portfolio-btn.component';

const StyledMain = styled.main`
  flex: 1;
  background-color: rgba(25, 25, 27, 1);
  height: 100%;
  position: relative;
`

const Main = ({ user, activeUserId, ...props }) => {
  const renderMainContent = 
    activeUserId ? (
      <ChatWindow activeUserId={activeUserId} />
    ) : (
      <Empty user={user} activeUserId={activeUserId} />
    )
  return <StyledMain><BackPortfolioBtn />{renderMainContent}</StyledMain>
}

export default Main
