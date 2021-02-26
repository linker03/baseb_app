import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  grid-area: ft;
  background: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  height: 40px;
  font-size: 1.4rem;
  box-sizing: border-box;

  a {
    padding: 8px;
    color: #337ab7;
    text-decoration: none;
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <div className="legal">
        <span>© 2018 BaseballCloud</span>
        <a href="/">Terms of Service</a>
        <a href="/">Privacy Policy</a>
      </div>
      <div className="socialMedia">
        <a href="/">Blog</a>
        <a href="/">Twitter</a>
        <a href="/">Instagram</a>
        <a href="/">Facebook</a>
      </div>
    </FooterContainer>
  );
};
