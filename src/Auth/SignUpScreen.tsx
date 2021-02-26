import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';
import { Link } from 'react-router-dom';
import { Checked } from '../assets/svg/Checked';

const SignUpForm = styled.div`
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

const TopButtonContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  button:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  button:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

const TopButton = styled.button`
  padding: 15px 5px 17px;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.13;
  color: #35c32a;
  border: solid 1px #35c32a;
  background-color: #ffffff;
  display: flex;
  align-items: flex-start;
  flex: 1 1 auto;
  &.active,
  &:hover {
    color: #ffffff;
    border: solid 1px #35c32a;
    background-color: #35c32a;
  }
`;

const CheckedContainer = styled.span`
  display: flex;
  margin-right: 6px;
`;

const RegisterTypeSection = styled.div`
  background: #48bbff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RegisterTypeHeader = styled.div`
  font-size: 36px;
  font-weight: 700;
  line-height: 0.78;
  color: #ffffff;
  margin-bottom: 21px;
  text-align: center;
`;

const RegisterTypeText = styled.div`
  font-size: 18px;
  line-height: 1.64;
  text-align: center;
  color: #ffffff;
  p {
    font-size: 1.4rem;
    margin: 0;
    line-height: 1.44;
    font-weight: 700;
  }
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

const TermsContainer = styled.div`
  display: block;
  margin-bottom: 8px;
  margin-top: 8px;
  padding-left: 10px;
  padding-right: 10px;
`;

const Button = styled.button`
  padding: 15px 19px 17px 18px;
  width: 100%;
  margin-bottom: 15px;
  color: #ffffff;
  font-weight: 600;
  border: solid 1px transparent;
  box-shadow: 0 0 4px 0 rgba(72, 187, 255, 0);
  background-color: #48bbff;
  border-radius: 4px;
  font-size: 16px;
  line-height: 19px;
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

export const SignUpScreen: React.FC = () => {
  const [state, setState] = useState({
    player: true,
  });

  const onSubmit = (values: any) => {
    console.log(values);
  };

  const playerScout = {
    player: `Players have their own profile within the system and plan on having data collected.`,
    scout: `Coaches and scouts can view players in the system but do not have their own profile.`,
  };

  return (
    <SignUpForm>
      <LoginFormContainer>
        <TopButtonContainer>
          <TopButton
            className={state.player ? 'active' : ''}
            type="button"
            onClick={() => setState((state) => ({ ...state, player: true }))}
          >
            {state.player && (
              <CheckedContainer>
                <Checked />
              </CheckedContainer>
            )}
            Sign Up as Player
          </TopButton>
          <TopButton
            className={!state.player ? 'active' : ''}
            type="button"
            onClick={() => setState((state) => ({ ...state, player: false }))}
          >
            {!state.player && (
              <CheckedContainer>
                <Checked />
              </CheckedContainer>
            )}
            Sign Up as Scout
          </TopButton>
        </TopButtonContainer>
        <RegisterTypeSection>
          <RegisterTypeHeader>
            {state.player ? 'Players' : 'Scouts'}
          </RegisterTypeHeader>
          <RegisterTypeText>
            <p>{state.player ? playerScout.player : playerScout.scout}</p>
          </RegisterTypeText>
        </RegisterTypeSection>
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
              <InputContainer>
                <InputSide>
                  <Field
                    name="password-confirmation"
                    component="input"
                    type="text"
                    placeholder="Confirm password"
                  />
                </InputSide>
                <IconContainer>
                  <i className="fa fa-check" />
                </IconContainer>
              </InputContainer>
              <TermsContainer>
                By clicking Sign Up, you agree to our{' '}
                <a href="/">Terms of Service</a> and{' '}
                <a href="/">Privacy Policy</a>.
              </TermsContainer>
              <Button>Sign Up</Button>
            </form>
          )}
        />
        <FormFooter>
          <FooterText>Already registered?</FooterText>
          <Link to="/login">Sign In</Link>
        </FormFooter>
      </LoginFormContainer>
    </SignUpForm>
  );
};
