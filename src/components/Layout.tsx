import React from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { Footer } from './Footer';
import { Content } from './Content';

const MainContainer = styled.main`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 'hd hd' 'content content' 'ft ft';
  height: 100vh;
  /* font-size: 1.6rem; */
`;

export const Layout: React.FC = ({ children }) => {
  return (
    <MainContainer>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </MainContainer>
  );
};
