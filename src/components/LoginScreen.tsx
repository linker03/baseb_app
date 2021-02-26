import React from 'react';
import styled from 'styled-components';

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

const LoginForm = styled.div`
  background: hsla(0, 0%, 100%, 0.8);
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(10px);
  width: 100%;
  max-width: 450px;
`;

const FlexContainerColumn = styled.div`
  display: flex;
  flex-flow: column;
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

const FormInstead = styled.form``;

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

const InputInstead = styled.input`
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

const ForgorContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
`;

const FormFooter = styled.div`
  display: flex;
  justify-content: center;
`;

const FooterText = styled.div`
  font-size: 16px;
  color: #667784;
`;

const FooterLink = styled.div`
  text-decoration: underline;
  padding-left: 3px;
  color: #48bbff;
`;

export const LoginScreen = () => {
  return (
    <LoginContainer>
      <LoginForm>
        <FlexContainerColumn>
          <FormHeader>
            <HeaderFirstLine>Welcome to BaseballCloud!</HeaderFirstLine>
            <HeaderSecondLine>Sign into your account here:</HeaderSecondLine>
          </FormHeader>
          <FormInstead>
            <InputContainer>
              <InputSide>
                <InputInstead />
              </InputSide>
              <IconContainer>
                <i className="fa fa-user" />
              </IconContainer>
            </InputContainer>
            <InputContainer>
              <InputSide>
                <InputInstead />
              </InputSide>
              <IconContainer>
                <i className="fa fa-lock" />
              </IconContainer>
            </InputContainer>
            <Button>Sign In</Button>
            <ForgorContainer>
              <a href="/">Forgotten password?</a>
            </ForgorContainer>
          </FormInstead>
          <FormFooter>
            <FooterText>Don’t have an account?</FooterText>
            <FooterLink>Sign Up</FooterLink>
          </FormFooter>
        </FlexContainerColumn>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginScreen;
