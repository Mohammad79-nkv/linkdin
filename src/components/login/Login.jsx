import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="header-logo" />
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcom to your professionl community</h1>
          <img src="/images/login-hero.svg" alt="login-hro" />
        </Hero>
        <Form>
          <Google>
            <img src="/images/google.svg" alt="signIn-google" />
            Sign in whit Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

const Container = styled.div``;
const Nav = styled.div`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  position: relative;

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;
const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  cursor: pointer;
  text-decoration: 167ms;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;
const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  text-decoration: 167ms;
  font-size: 16px;
  font-weight: 6000;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;
const Section = styled.section`
  display: flex;
  align-content: start;
  align-items: center;
  min-height: 700px;
  max-width: 1128px;
  margin: auto;
  width: 100%;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0;
  }
`;
const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      width: 100%;
      line-height: 2;
      text-align: center;
      font-size: 20px;
    }
  }
  img {
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;
const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
const Google = styled.button`
  display: flex;
  align-items: center;
  background-color: #fff;
  justify-content: center;
  height: 56px;
  width: 100%;
  border: 1px solid black;
  cursor: pointer;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
  vertical-align: middle;
  z-index: 0 ;
  transition-duration: 167ms;
  font-size: 20px;
  color : rgba(0,0,0, 0.6);
  &:hover{
    background-color: rgba(207, 207, 207, 0.25);
    color : rgba(0,0,0,0.75);
  }
`;
export default Login;
