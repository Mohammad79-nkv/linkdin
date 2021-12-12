import styled from "styled-components";

const Main = () => {
  return (
    <Container className="col col-12 col-lg-6">
      <ShareBox>
        <ShareHeader>
          <img src="/images/user.svg" alt="" />
          <button>Start a post</button>
        </ShareHeader>
        <ShareOptions>
          <button>
            <img src="/images/item-icon.svg" />
            <span>Photo</span>
          </button>
          <button>
            <img src="/images/item-icon.svg" />
            <span>Video</span>
          </button>
          <button>
            <img src="/images/item-icon.svg" />
            <span>Event</span>
          </button>
          <button>
            <img src="/images/item-icon.svg" />
            <span>Write article</span>
          </button>
        </ShareOptions>
      </ShareBox>
    </Container>
  );
};
const Container = styled.div``;
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
const ShareBox = styled(Content)`
    display : flex;
    flex-direction: column;
    color: #958b7d;
    margin:0 0 8px
    background-color: #fff;
    padding: 12px 20px
`;

const ShareHeader = styled.div`
    display: flex;
    margin-bottom: 30px;
    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 10px;
    }
    button {
        width: 100%;
        text-align: left;
        padding-left: 20px;
        background-color: #fff;
        border: 1px solid #D0D0D1;
        border-radius: 50px;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.65);
    }
`;
const ShareOptions = styled.div`
    display: flex;
    justify-content: space-around;
    button {
        display: flex;
        justify-content:center;
        align-items: center;
        padding:10px 12px;
        box-sizing: border-box;
        background-color: transparent;
        color: rgba(0, 0, 0, 0.65);
        font-weight: bold;
        border-radius:10px;
        &:hover {
            background-color: rgba(0, 0, 0, 0.08);
            /* color:white; */
        }

    }
`;
export default Main;
