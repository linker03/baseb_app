import React from 'react';
import styled from 'styled-components';
import { Layout } from '../../components/Layout';
import { LoginScreen } from './LoginScreen';
import { SignUpScreen } from './SignUpScreen';
import background from '../../assets/images/background.png';

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
  background-position: top center;
  background-size: cover;
`;

export const AuthPage: React.FC<AuthPageProps> = ({ signIn = true }) => {
  return (
    <Layout>
      <LoginContainer style={{ backgroundImage: `url(${background})` }}>
        {signIn ? <LoginScreen /> : <SignUpScreen />}
      </LoginContainer>
    </Layout>
  );
};
