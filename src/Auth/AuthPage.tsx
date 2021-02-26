import React from 'react';
import styled from 'styled-components';
import { Layout } from '../components/Layout';
import { LoginScreen } from './LoginScreen';
import { SignUpScreen } from './SignUpScreen';

interface AuthPageProps {
  signIn: boolean;
}

const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  padding: 16px;
  background-image: url('https://baseballcloud-front.herokuapp.com/e2b853b6994b3e23d56d2dc1139f8d75.png');
  background-position: top center;
  background-size: cover;
`;

export const AuthPage: React.FC<AuthPageProps> = ({ signIn = true }) => {
  return (
    <Layout>
      <LoginContainer>
        {signIn ? <LoginScreen /> : <SignUpScreen />}
      </LoginContainer>
    </Layout>
  );
};
