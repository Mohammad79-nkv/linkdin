import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import LeftBar from './LeftBar';
import Main from "./Main";
import RightBar from "./RightBar";
import LoginGoogleModal from './common/LoginGoogleModal'

const Home = () => {
  const [showGoogleModal, setShowModal] = useState(false)
  const history = useHistory()
  const user = useSelector(state => state.user)
  if(!user.email){
    history.replace('/')
  }
  useEffect(()=>{
    if(user && !user.picture){
      setShowModal(true)
    }
  },[])
  const handleCloseModal = () => {
    setShowModal(false)
  }
  return (
    <Fragment>
      { showGoogleModal && <LoginGoogleModal closeModal={handleCloseModal}/>}
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
        <Layout className="container-fluid ">
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
  height: 100%;
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
const Layout = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  @media (max-width: 992px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: auto;
  }
`;

export default Home;
