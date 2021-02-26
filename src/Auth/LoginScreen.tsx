import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';
import { Link } from 'react-router-dom';
import { axInstance } from '../services/api';
import { APISignIn } from '../utils/constants';
import APIProvider from '../services/ApiProvider';
import ApiProvider from '../services/ApiProvider';

const LoginForm = styled.div`
  background: hsla(0, 0%, 100%, 0.8);
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  width: 100%;
  max-width: 450px;
  box-sizing: border-box;
`;

const LoginFormContainer = styled.div`
  display: flex;
  flex-flow: column;
  input {
    display: block;
    height: 50px;
    border-radius: 4px;
    background-color: #eff1f3;
    padding: 6px 12px 10px 37px;
    font-size: 16px;
    line-height: 1.13;
    font-weight: 400;
    color: #667784;
    border: 1px solid transparent;
    box-sizing: border-box;
  }
`;

const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
`;

const HeaderFirstLine = styled.div`
  font-size: 24px;
  line-height: 1.25;
  font-weight: 400;
  -webkit-text-align: center;
  text-align: center;
  color: #667784;
  margin-bottom: 8px;
`;

const HeaderSecondLine = styled.div`
  font-size: 24px;
  line-height: 1.25;
  font-weight: 400;
  -webkit-text-align: center;
  text-align: center;
  color: #667784;
  font-size: 16px;
`;

const InputContainer = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 15px;
`;

const InputSide = styled.div`
  display: flex;
  width: 100%;
  flex: 0 0 100%;
  flex-direction: column;
`;

const IconContainer = styled.span`
  display: flex;
  position: absolute;
  top: 19px;
  left: 17px;
  bottom: 0;
  align-items: baseline;
  color: #667784;
`;

const Button = styled.button`
  padding: 15px 19px 17px 18px;
  width: 100%;
  margin-bottom: 15px;
  color: #ffffff;
  font-weight: 400;
  border: solid 1px transparent;
  box-shadow: 0 0 4px 0 rgba(72, 187, 255, 0);
  background-color: #48bbff;
  border-radius: 4px;
  font-size: 16px;
  line-height: 19px;
`;

const ForgotContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
`;

const FormFooter = styled.div`
  display: flex;
  justify-content: center;
  a {
    text-decoration: underline;
    padding-left: 3px;
    color: #48bbff;
    cursor: pointer;
  }
`;

const FooterText = styled.div`
  font-size: 16px;
  color: #667784;
`;

const ErrorMessage = styled.div`
  display: flex;
  margin-top: 8px;
  color: #f05f62;
`;

export const LoginScreen = () => {
  const [state, setState] = useState({
    error: false,
  });

  const onSubmit = (values: any) => {
    ApiProvider.signIn(values);
    console.log(ApiProvider.token);
    // try {
    //   const response = await axInstance.post(APISignIn, values);
    //   if (response) {
    //     console.log(response.data.data.uid);
    //     console.log(response.headers['access-token']);
    //     console.log(response.headers.client);
    //   }
    // } catch (err) {
    //   setState({ error: true });
    // }
  };

  return (
    <LoginForm>
      <LoginFormContainer>
        <FormHeader>
          <HeaderFirstLine>Welcome to BaseballCloud!</HeaderFirstLine>
          <HeaderSecondLine>Sign into your account here:</HeaderSecondLine>
        </FormHeader>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <InputContainer>
                <InputSide>
                  <Field
                    name="email"
                    component="input"
                    type="text"
                    placeholder="Email"
                  />
                </InputSide>
                <IconContainer>
                  <i className="fa fa-user" />
                </IconContainer>
              </InputContainer>
              <InputContainer>
                <InputSide>
                  <Field
                    name="password"
                    component="input"
                    type="text"
                    placeholder="Password"
                  />
                </InputSide>
                <IconContainer>
                  <i className="fa fa-lock" />
                </IconContainer>
              </InputContainer>
              {state.error && (
                <ErrorMessage>
                  Invalid login credentials. Please try again.
                </ErrorMessage>
              )}
              <Button type="submit">Sign In</Button>
              <ForgotContainer>
                <a href="/">Forgotten password?</a>
              </ForgotContainer>
            </form>
          )}
        />

        <FormFooter>
          <FooterText>Don’t have an account?</FooterText>
          <Link to="/register">Sign Up</Link>
        </FormFooter>
      </LoginFormContainer>
    </LoginForm>
  );
};
