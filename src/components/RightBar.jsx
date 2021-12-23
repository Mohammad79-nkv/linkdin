import styled from "styled-components";

const RightBar = () => {
  return (
    <Container className="col col-12 col-lg-3">
      <Content className="">
        <Feed>
          <h5>Add to your feed</h5>
          <span>
            <img src="/images/feed-icon.svg" />
          </span>
        </Feed>
        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#LinkedIn</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>
        <MoreFeed>
          <p>View all recommendations</p>
          <img src="/images/right-icon.svg" />
        </MoreFeed>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  
`;
const Content = styled.div`
  position: sticky !important;
  top:70px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
  margin-bottom: 8px;
  transition: all 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  margin-bottom: 50px;
`;
const Feed = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(0, 0, 0, 0.6);
  padding: 12px 8px;
  margin-top: 12px;
  h5 {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
    padding: 0;
  }
`;
const FeedList = styled.ul`
  list-style-type: none;
  margin-top: 16px;
  li {
    display: flex;
    margin-top: 12px;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    div {
      display: flex;
      flex-direction: column;
      button {
        background-color: #fff;
        padding: 6px 22px;
        border-radius: 20px;
        border: 1px solid #6c6a6d;
        &:hover {
          background-color: rgba(0, 0, 0, 0.08);
        }
      }
    }
  }
`;
const Avatar = styled.div`
  width: 48px;
  height: 48px;
  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 8px;
`;
const MoreFeed = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 8px;
  font-weight: 600;
  cursor: pointer;
  p {
    color: #0a66c2;
    margin: 0;
    padding-right: 8px;
  }
`;
export default RightBar;
