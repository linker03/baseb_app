import React from 'react';
import styled from 'styled-components';
import { Logo } from '../assets/svg/Logo';

const HeaderContainer = styled.header`
  background: #fff;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  grid-area: hd;
  grid-column-end: hd;
  grid-column-end: span 2;
  align-items: center;
  padding: 8px;
  box-sizing: border-box;
`;

const LogoLink = styled.a`
  background-color: transparent;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoLink>
        <div>
          <Logo />
        </div>
      </LogoLink>
    </HeaderContainer>
  );
};
