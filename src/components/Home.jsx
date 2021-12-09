import { Fragment } from "react";
import styled from "styled-components";
import Header from "./Header";
import LeftBar from './LeftBar';
import Main from "./Main";
import RightBar from "./RightBar";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <Section>
          <h5>
            <a>Hiring in a hurry?-</a>
          </h5>
          <p>
            Find talented pros in record time with Upwork and keep business
            moving.
          </p>
        </Section>
        <Layout className="container ">
          <div className="row">
            <LeftBar/>
            <Main/>
            <RightBar/>
          </div>
        </Layout>
      </Container>
    </Fragment>
  );
};
const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
  background-color: #F5F4F6;
  height: 100vh;
`;
const Content = styled.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
`;
const Section = styled.div`
  min-height: 50px;
  padding: 16px 0;
  text-align: center;
  box-sizing: content-box;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }
  p {
    font-weight: 600;
    font-size: 14px;
    color: #434649;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;
const Layout = styled.div``;

export default Home;
