import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="header-logo" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWraper>
            <NavList className="active">
              <a href="#">
                <img src="/images/nav-home.svg" alt="" />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a href="#">
                <img src="/images/nav-network.svg" alt="" />
                <span>My Network</span>
              </a>
            </NavList>
            <NavList>
              <a href="#">
                <img src="/images/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a href="#">
                <img src="/images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </a>
            </NavList>
            <NavList>
              <a href="#">
                <img src="/images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </NavList>
            <User>
              <a href="#">
                <img src="/images/user.svg" alt="" />
                <span>Me</span>{" "}
              </a>
              <SignOut>
                <a href="#">
                  Sign out
                </a>
              </SignOut>
            </User>
            <Work>
              <a href="#">
                <img src="/images/nav-work.svg" alt="" />
                <span>
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
            </Work>
          </NavListWraper>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  position: fixed;
  left: 0;
  top: 0;
  padding: 0 24px;
  width: 100vw;
  z-index: 100;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;
const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;
const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 218px;
      font-size: 14px;
      height: 34px;
      border-color: #dcef61;
      vertical-align: text-top;
    }
  }
`;
const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 900px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;
const NavListWraper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  width: 100%;
  justify-content: space-between;
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
      transition: all 0.2 ease-in-out;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
`;
const NavList = styled.li`
  display: flex;
  align-items: center;
  padding-top: 5px;
  /* padding-bottom: 5px; */
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;
const SignOut = styled.div`
  position: absolute;
  top:45px;
  background-color: skyblue;
  border-radius: 5px;
  display: none;
  cursor: pointer;
  a {
    color : black;
  }
`;
const User = styled(NavList)`
  a {
    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }
  }
  &:hover {
    ${SignOut} {
      display: flex;
    }
  }
`;
const Work = styled(NavList)`
  border-left: 1px dotted rgba(0, 0, 0, 0.8);
`;
export default Header;
