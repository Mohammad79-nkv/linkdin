import styled from "styled-components";
import PhotoSizeSelectActualOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActualOutlined";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import EventNoteTwoToneIcon from "@material-ui/icons/EventNoteTwoTone";
import CreateTwoToneIcon from "@material-ui/icons/CreateTwoTone";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import InsertCommentTwoToneIcon from '@material-ui/icons/InsertCommentTwoTone';
import ShareTwoToneIcon from '@material-ui/icons/ShareTwoTone';
import SendTwoToneIcon from '@material-ui/icons/SendTwoTone';
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
            <PhotoSizeSelectActualOutlinedIcon />
            <span>Photo</span>
          </button>
          <button>
            <VideocamOutlinedIcon />
            <span>Video</span>
          </button>
          <button>
            <EventNoteTwoToneIcon />
            <span>Event</span>
          </button>
          <button>
            <CreateTwoToneIcon />
            <span>Write article</span>
          </button>
        </ShareOptions>
      </ShareBox>
      <div>
        <Article>
          <SharedArticle>
            <PostHeader>
              <div>
                <img src="/images/user.svg" />
                <div>
                  <span>UserName</span>
                  <span>Email</span>
                  <span>date</span>
                </div>
              </div>
              <a>...</a>
            </PostHeader>
            <Description>
              <p>This is my post</p>
            </Description>
            <PostImage>
              <img src="/images/user.svg" />
            </PostImage>
          </SharedArticle>
          <SocialInfo>
            <SocialActions>
              <button>
                <ThumbUpAltOutlinedIcon />
                <span>Like</span>
              </button>
              <button>
                <InsertCommentTwoToneIcon />
                <span>Comments</span>
              </button>
              <button>
                <ShareTwoToneIcon />
                <span>Share</span>
              </button>
              <button>
                <SendTwoToneIcon />
                <span>Send</span>
              </button>
            </SocialActions>
          </SocialInfo>
        </Article>
      </div>
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
    border: 1px solid #d0d0d1;
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
    justify-content: center;
    align-items: center;
    padding: 10px 12px;
    box-sizing: border-box;
    background-color: transparent;
    color: rgba(0, 0, 0, 0.65);
    font-weight: bold;
    border-radius: 10px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
      /* color:white; */
    }
  }
`;
const Article = styled(Content)``;
const SharedArticle = styled.div``;
const PostHeader = styled.div`
  padding: 10px 12px;
  div {
    display: flex;
    align-items: center;
    img {
      width: 48px;
      height: 48px;
    }
    div {
      margin-left: 8px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-size: 14px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.6);
    }
  }
  a {
    padding: 0 !important;
    margin: 0;
    position: absolute;
    top: -10px;
    right: 12px;
    font-size: 30px;
    font-weight: 700;
    cursor: pointer;
  }
`;
const Description = styled.div`
  padding-left: 12px;
  text-align: left;
  font-size: 16px;
  font-weight: 600;
`;
const PostImage = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
const SocialInfo =styled.div``;
const SocialActions =styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px 12px;
  button {
    margin-right: 20px;
    background-color:transparent;
    color:#5378A4;
    font-weight: 600;
    display:flex;
    align-items: center;
    padding:8px 10px;
    border-radius: 10px;
    &:hover {
      background-color:rgba(83, 120, 164, 0.1);
    }
  }
`;
export default Main;
