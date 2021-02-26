import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  grid-area: content;
  background: #fff;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

export const Content = ({ children }: any) => {
  return <ContentContainer>{children}</ContentContainer>;
};
