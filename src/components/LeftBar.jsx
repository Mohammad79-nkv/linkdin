import styled from "styled-components";
import { useSelector } from "react-redux";

const LeftBar = () => {
  const user = useSelector((state) => state.user);
  return (
    <Container className="col col-12 col-lg-3">
      <Content className="">
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>
              Welcom, {user && user.given_name ? user.given_name : "There"}!
            </Link>
          </a>
          <a>
            <AddPhotoText>Add a photo</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <span>
              <img src="/images/widget-icon.svg" />
            </span>
          </a>
        </Widget>
        <Item>
          <a>
            <div>
              <img src="/images/item-icon.svg" />
              <p>My Items</p>
            </div>
          </a>
        </Item>
      </Content>
      <CommunityCard>
        <CommunityContent>
          <div>
            <a>Groups</a>
            <a>Events</a>
            <a>Follows Hashtags</a>
          </div>
          <a>
            <img src="/images/plus-icon.svg" />
          </a>
        </CommunityContent>
        <Discover>
          <a>Discover more</a>
        </Discover>
      </CommunityCard>
    </Container>
  );
};
const Container = styled.div`
  position: sticky !important;
`;
const Content = styled.div`
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
  margin-bottom: 8px;
  transition: all 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;
const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
`;
const CardBackground = styled.div`
  background: url("./images/card-bg.svg");
  height: 54px;
  background-position: center;
  background-size: 462px;
  margin: -12px -12px 0;
`;
const Photo = styled.div`
  box-shadow: none;
  background-image: url("./images/photo.svg");
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-color: white;
  background-clip: content-box;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 2px solid white;
  border-radius: 50%;
  margin: -38px auto 12px;
`;
const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;
const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 14px;
  line-height: 1.33;
  font-weight: 400;
  cursor: pointer;
`;
const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-weight: 500;

  a {
    padding: 12px 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    span {
      font-size: 14px;
      &:first-child {
        color: rgba(0, 0, 0, 0.6);
      }
      &:nth-child(2) {
        color: rgba(0, 0, 0, 1);
      }
    }
  }
`;
const Item = styled.div`
  padding: 12px 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
  a {
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
    div {
      display: flex;
      align-items: center;
      justify-content: flex;
      p {
        margin: 0;
      }
    }
  }
`;
const CommunityCard = styled(Content)``;
const CommunityContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 8px;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 2;
    a {
      cursor: pointer;
      &:hover {
        color: #0a66c2 !important;
      }
    }
  }
`;
const Discover = styled.div`
  padding: 12px 8px;
  text-align: left;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  a {
    color: rgba(0, 0, 0, 0.6) !important;
  }import { useSelector } from 'react-redux';
import { useSelector } from 'react-redux';

  &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
`;

export default LeftBar;
