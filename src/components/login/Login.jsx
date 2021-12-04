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
export default Login;
